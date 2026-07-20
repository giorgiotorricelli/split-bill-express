import express from 'express';
import connection from '../db/connection.js';
import { findGroupIds } from '../queries/groupQuery.js';

export async function checkBiggerId(request, response, next) {
    try {
        const [idList] = await connection.query(findGroupIds);
        
        let biggerId = 0;
        idList.forEach(curr => {
            if (curr.id > biggerId) {
                biggerId = curr.id;
            }
        });
        request.biggerId = biggerId + 1;
        
        next();
    } catch (error) {
        response.status(500).json({
            error: `Errore nella connessione al server o al database: ${error}`,
            result: null
        });
    }
}