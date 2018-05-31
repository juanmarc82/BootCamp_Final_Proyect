import mysql from "../../config/mysql";
import repo from "../../repositorio/";
import { log } from "util";
var connection = mysql.connection;

export default (function (req, res) {
    repo.updateTrayecto(req, res).then(function (results) {
        console.log('El resultado es :', results)
        //Asignar response
        res.setHeader('Content-Type', 'application/json')
        res.send(JSON.stringify({'usuario': results}));
        res.send(console.log("Respuesta del servidor al UPDATE Trayecto...:)"))  

    }).catch(function (error) {

        res.setHeader('Content-Type', 'application/json')
        res.status(500);
        res.send(JSON.stringify({
            error: error
        }))
    })
})