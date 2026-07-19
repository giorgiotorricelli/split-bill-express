import express from 'express';

async function validateSlug(request, response, next) {
    try {
        const slug = (request.params.slug).trim();

        if (slug || slug !== '') {
            if (slug.split(' ').length > 1) {
                response.status(400).json({
                    error: `Il campo slug non può contenere spazi`,
                    result: null
                });
            } else if (!isNaN(Number(slug))) {
                response.status(400).json({
                    error: `Il campo slug può contenere numeri ma non può essere solo un numero`,
                    result: null
                });
            }
        } else {
            response.status(400).json({
                error: `Il campo slug non può essere vuoto`,
                result: null
            });
        }

        next();
    } catch (error) {
        response.status(500).json({
            error: `errore nella connessione al server, ${error}`,
            result: null
        });
    }
}

export { validateSlug }