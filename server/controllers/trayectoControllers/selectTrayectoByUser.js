import mysql from "../../config/mysql";
import repo from "../../repositorio/";
import { log } from "util";
var connection = mysql.connection;

export default (function (req, res) {
    repo.selectTrayectoByUser(req, res).then(function (results) {
        console.log('El resultado UPDATE SelectByUser es :', results)
        //Asignar response
        res.setHeader('Content-Type', 'application/json')
        res.send(JSON.stringify({'trayecto': results}));
        res.send(console.log("Respuesta del servidor al UPDATE SelectByUser...:", results))  

    }).catch(function (error) {

        res.setHeader('Content-Type', 'application/json')
        res.status(500);
        res.send(JSON.stringify({
            error: error
        }))
    })
})