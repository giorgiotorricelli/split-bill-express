import express from 'express';
import connection from '../db/connection.js';
import { generateSlug } from '../utils/generateSlug.js';
import { findGroupSlugs } from '../queries/groupQuery.js';

export async function checkSlugs(request, response, next) {
    
    try {
        const [slugList] = await connection.query(findGroupSlugs);

        const { name } = request.body;

        let slug = generateSlug(name);
        let difference = 0;
        let tempSlug = slug;
        let exists = slugList.some(slugObj => slugObj.slug === tempSlug);
        
    
        while (exists) {
            difference++
            tempSlug = slug + '-' + String(difference);
            exists = slugList.some(slugObj => slugObj.slug === tempSlug);
        } 

        slug = tempSlug;
        
        request.slug = slug;
        next();

    } catch (error) {
        response.status(500).json({
            error: `Errore nella connessione al server o al database: ${error}`,
            result: null
        })
    }
}