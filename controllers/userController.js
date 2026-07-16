import connection from "../db/connection.js";
import { allUsers } from "../queries/userQuery.js";

async function index(request, response) {
    console.log('ciao');
    
    try {
        const [userList] = await connection.query(allUsers);

        response.status(202).json({
            error: null,
            result: userList
        })
    } catch (error) {
        response.status(500).json({
            error: `errore durante la richiesta, ${error}`,
            result: null
        })
    }
    
}

export { index };