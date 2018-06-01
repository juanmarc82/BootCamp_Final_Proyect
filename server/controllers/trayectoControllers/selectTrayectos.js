import mysql from "../../config/mysql";
import repo from '../../repositorio/';
import { log } from "util";
var connection = mysql.connection;

export default (function (req, res) {
    repo.selectTrayectos(req, res).then(function(results){
        //Asignar response
        res.setHeader('Content-Type', 'application/json')
        res.send(JSON.stringify({'trayectos':results})) 
        res.send(console.log("Respuesta del servidor al SELECT Trayectos"))   

    }).catch(function(error){

        res.setHeader('Content-Type', 'application/json')
        res.status(500);
        res.send(JSON.stringify({
            error: error
        }))
    })
})