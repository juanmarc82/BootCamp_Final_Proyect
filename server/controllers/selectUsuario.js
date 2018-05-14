import mysql from "../config/mysql";
import repo from '../repositorio/';
var connection = mysql.connection;

// export default puede devolver lo que sea: una variable, una funcion o lo que sea
export default (function (req, res) {
    console.log(req)
    //req.params.variable

    repo.selectUsuario(req).then(function(results){
        console.log('El resultado es :', results)
        //Asignar response
        res.setHeader('Content-Type', 'application/json')
        res.send(JSON.stringify({'usuario':results}))        

        
    }).catch(function(error){

        
        res.setHeader('Content-Type', 'application/json')
        res.status(500);
        res.send(JSON.stringify({
            error: error
        }))
    })
})