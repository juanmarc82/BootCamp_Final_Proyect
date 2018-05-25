import mysql from "../config/mysql";
import repo from '../repositorio/';
import { log } from "util";
var connection = mysql.connection;

// export default puede devolver lo que sea: una variable, una funcion o lo que sea
export default (function (req, res) {
      //req.params.variable

    repo.selectUsuario(req, res).then(function(results){
        //Asignar response
        res.setHeader('Content-Type', 'application/json')
        res.send(JSON.stringify({'usuario':results})) 
        res.send(console.log("Respuesta del servidor"))   

        
    }).catch(function(error){

        
        res.setHeader('Content-Type', 'application/json')
        res.status(500);
        res.send(JSON.stringify({
            error: error
        }))
    })
})