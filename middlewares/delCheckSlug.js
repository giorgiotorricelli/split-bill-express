import express from 'express';
import { idFromSlug } from '../queries/groupQuery.js';
import connection from '../db/connection.js';

export async function delCheckSlugs(request, response, next) {
    try {
        let {slug} = request.params;
        slug = slug.trim();

        if (!slug || slug === '') {
            response.status(400).json({
                error: `Il campo slug è obbligatorio`,
                result: null
            });
            return;
        }

        if (typeof slug !== 'string') {
            response.status(400).json({
                error: `Il campo slug deve essere una stringa`,
                result: null
            });
            return;
        }

        if (!isNaN(Number(slug))) {
            response.status(400).json({
                error: `Il campo slug è una stringa che può contenere numeri ma NON solo numeri`,
                result: null
            });
            return;
        }

        if (slug.split(' ').length > 1) {
            response.status(400).json({
                error: `Il campo slug non può contenere spazi`,
                result: null
            });
            return;
        }


        const [ idToCheck ] = await connection.query(idFromSlug, [slug]);
        console.log(idToCheck.length);
        
        

        if (idToCheck.length === 0) {
            response.status(404).json({
                error: `Lo slug inserito non appartiene a nessun gruppo`,
                result: null
            });
            return;
        }
        
        const idForDelete = idToCheck[0].id;
        request.idForDelete = idForDelete;
        next();
        

    } catch (error) {
        response.status(500).json({
            error: `Errore nella connessione al server o al database: ${error}`,
            result: null
        });
    }
    


}