import express from 'express';

export async function checkMembers(request, response, next) {
    try {
        const { members } = request.body; // array di interi
        const idList = request.idList; //array di oggetti {id: 1}

        if (members.length === 0) return next();

        members.forEach(member => {
            const isContained = idList.some(idObj => idObj.id === member);
            if (!isContained) {
                response.status(404).json({
                    error: `Almeno un id non appartiene a nessun utente`,
                    result: null
                });
                return;
            }
        });
        next();
    } catch (error) {
        response.status(500).json({
            error: `Errore nella connessione al server o al database: ${error}`,
            result: null
        });
    }
}