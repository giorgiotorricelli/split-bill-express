import connection from "../db/connection.js";
import { allGroups, singleGroup, createGroup } from "../queries/groupQuery.js";
import { generateSlug } from "../utils/generateSlug.js";

async function index(request, response) {
    try {
        const [groupListRaw] = await connection.query(allGroups);

        response.status(200).json({
            error: null,
            result: groupListRaw
        })
    } catch (error) {
        response.status(500).json({
            error: `errore nella connessione al server, ${error}`,
            result: null
        })
    }
}

async function show(request, response) {
    const slug = request.params.slug;
    try {
        const [group] = await connection.query(singleGroup, [slug]);
        

        if (group.length === 0) {
            response.status(404).json({
                error: `Gruppo non trovato`,
                result: null
            })
        }

        response.status(200).json({
            error: null,
            result: group
        })
    } catch (error) {
        response.status(500).json({
            error: `errore nella connessione al server, ${error}`,
            result: null
        })
    }
}

async function create(request, response) {
    
    try {
        const newGroupId = request.biggerId;
        const slug = request.slug; 
        let { owner_id, name } = request.body;

        const groupCreation = await connection.query(createGroup, [newGroupId, name, slug, owner_id]);
        //per aggiungere l'owner_id alla tabella user_group
        const user_group_creation = await connection.query("INSERT INTO `user_group` (`user_id`, `group_id`) VALUES (?, ?);", [owner_id, newGroupId]);

        response.status(201).json({
            error: null,
            result: `Gruppo creato con successo`
        })
    } catch (error) {
        response.status(500).json({
            error: `Errore nella connessione al server o al database: ${error}`,
            result: null
        });
    }
    


}

export { index, show, create }