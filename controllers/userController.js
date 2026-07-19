import connection from "../db/connection.js";
import { allUsers } from "../queries/userQuery.js";

async function index(request, response) {
    
    try {
        const [userListRaw] = await connection.query(allUsers);

        const cleanList = userListRaw.map(user => {
            return {name: user.name}
        })

        response.status(202).json({
            error: null,
            result: cleanList
        })
    } catch (error) {
        response.status(500).json({
            error: `errore durante la richiesta, ${error}`,
            result: null
        })
    }
    
}

export { index };