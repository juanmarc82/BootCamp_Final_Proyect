import mysql from '../config/mysql'
var connection = mysql.connection;

let selectUsuario = function (req, res) {
    // Set values into session
    //initialize session variable

    let usuario = {
        email: req.body.email,
        password: req.body.password,
    }

    return new Promise((resolve,reject)=>{
        var sess = req.session;
        
        mysql.connection.query(
            `SELECT * FROM usuarios WHERE email= '${usuario.email}' AND password= '${usuario.password}' `,
          function(error, results, fields) {
            if (error) {

                let results = {
                    error: error
                };

              reject(error);
            } else {

                console.log('El resultado es :', results)
                req.session.userId = JSON.stringify(results[0].usuarioID); 
                req.session.user = results[0].nombre;//set user name

                console.log("La req.session.user es .... " + req.session.user);
                console.log("La user es .... " + req.session.userId);
                
                resolve(results);
            }
          }
        );        
    })
}           
let addUsuario = function (req, res) {
    let usuario = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password        
    }
    return new Promise((resolve,reject)=>{
        mysql.connection.query(`INSERT INTO usuarios (nombre, email, password) VALUES('${usuario.nombre}', '${usuario.email}', '${usuario.password}')`, 
    function (error, results, fields) {
        if (error){
            console.log("my error ", error)
            var results = {
                error: error
            }

            reject(results)
                        
        } else{

            console.log('The result: ', JSON.stringify(results));
            
            var results = {
                error: null,
                id: results.insertId,
                nombre: usuario.nombre,
                password: usuario.password                
            }
            resolve(results)
        }
      });


    })
}

let deleteUsuario = function(id) {

    return new Promise((resolve, reject)=>{
        console.error("Borrando usuario")
        mysql.connection.query(`DELETE FROM usuarios WHERE usuarioId=${id}`, function (error, results, fields) {
            if (error){
                console.log("my error ", error)
                var results = {
                    error: error
                }
                
                console.error("QUE ESTA PASANDO REJECT")

                reject(results)

            } else{
                
                var results = {
                    error: null,
                    id: id
                }
            
                resolve(results)
            }
          });
    })
}

//Añadir updateUsuario
let updateUsuario = function (req, res) {
    let usuario = {
        id: req.body.id,
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password
    }
    return new Promise((resolve, reject) => {
        mysql.connection.query(`UPDATE usuarios SET nombre='${usuario.nombre}',email='${usuario.email}', password='${usuario.password}' WHERE usuarioId='${usuario.id}'`,
            function (error, results, fields) {
                if (error) {
                    console.log("my error ", error)
                    var results = {
                        error: error
                    }

                    reject(results)

                } else {

                    console.log('The result: ', JSON.stringify(results));

                    var results = {
                        error: null,
                        id: usuario.id,
                        nombre: usuario.nombre,
                        password: usuario.password
                    }
                    resolve(results)
                }
            });


    })
}


module.exports = {
    selectUsuario,
    addUsuario,
    deleteUsuario,
    updateUsuario 
}
/*
exports.selectUsuario = selectUsuario;
exports.addUsuario = addUsuario;
exports.deleteUsuario = deleteUsuario;
exports.updateUsuario = updateUsuario;*/