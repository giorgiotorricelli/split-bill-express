import express from 'express';

export async function checkGroupData(request, response, next) {
    try {
        let { name, owner_id, members } = request.body;

        if (typeof name === 'number') {
            response.status(400).json({
                error: `Il campo "name" può contenere numeri ma non può essere un numero e basta`,
                result: null
            });
            return;
        };

        if (!members || members.constructor !== Array) {
            response.status(400).json({
                error: `Il campo "members" deve essere un array di interi o un array vuoto`,
                result: null
            });
            return;
        };

        console.log(members.length);

        if (members.length > 0) { //caso in cui siano inseriti dei membri
            const someNotInt = members.some(member => {
                return !Number.isInteger(member); //caso in cui il numero non sia un intero

            });

            if (someNotInt) {
                console.log('sono qua');

                response.status(400).json({
                    error: `Il campo "members" può contenere solo interi`,
                    result: null
                });
                return;
            }
        }


        name = name.trim();

        if (!name || !owner_id || name === '' || owner_id === '') {
            response.status(400).json({
                error: `Inserire il campo "name", il campo "owner_id e il campo members []"`,
                result: null
            });
            return;
        }

        if (typeof owner_id !== 'number' || String(owner_id).split('.').length > 1) {
            response.status(400).json({
                error: `nel campo "owner_id" devi inserire un numero intero`,
                result: null
            });
            return;
        }

        if (!isNaN(Number(name))) {
            response.status(400).json({
                error: `Il campo "name" può contenere numeri ma non può essere un numero e basta`,
                result: null
            });
            return;
        }

        next();
    } catch (error) {
        response.status(500).json({
            error: `Errore nella connessione al server o al database: ${error}`,
            result: null
        });
    }

}