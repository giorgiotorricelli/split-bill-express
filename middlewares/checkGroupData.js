import express from 'express';

export async function checkGroupData(request, response, next) {
    let { name, owner_id } = request.body;

    if (typeof name === 'number') {
        response.status(400).json({
            error: `Il campo "name" può contenere numeri ma non può essere un numero e basta`
        });
        return;
    }


    name = name.trim();

    if (!name || !owner_id || name === '' || owner_id === '') {
        response.status(400).json({
            error: `Inserire sia il campo "name" che il campo "owner_id"`
        });
        return;
    }

    if (typeof owner_id !== 'number' || String(owner_id).split('.').length > 1) {
        response.status(400).json({
            error: `nel campo "owner_id" devi inserire un numero intero`
        });
        return;
    }

    if (!isNaN(Number(name))) {
        response.status(400).json({
            error: `Il campo "name" può contenere numeri ma non può essere un numero e basta`
        });
        return;
    }

    next();
}