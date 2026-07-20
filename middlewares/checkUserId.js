import express from 'express';
import connection from '../db/connection.js';
import { findUserIds } from '../queries/userQuery.js';

export async function checkUserId(request, response, next) {
    try {
        const [idList] = await connection.query(findUserIds);
        const idToCheck = request.body.owner_id;
        
        const found = idList.some(objToCheck => objToCheck.id === idToCheck);
        

        if (!found) {
            response.status(400).json({
                error: `L'id inserito nel campo "owner_id" non appartiene a nessun utente`,
                result: null
            });
            return;
        } else {
            request.idList = idList;
            next();
        }
        
    } catch (error) {
        response.status(500).json({
            error: `Errore nella connessione al server o al database: ${error}`,
            result: null
        })
    }
}