import mysql from "../config/mysql";
var connection = mysql.connection;

let selectUsuario = function(req, res) {
  // Set values into session
  //initialize session variable

  let usuario = {
    email: req.body.email,
    password: req.body.password
  };
  console.log(usuario);

  return new Promise((resolve, reject) => {
    var sess = req.session;
    console.log(req.body.email);
    mysql.connection.query(
      `SELECT * FROM usuarios WHERE email= '${usuario.email}' AND password= '${
        usuario.password
      }' `,
      function(error, results, fields) {
        if (error) {
          let results = {
            error: error
          };

          reject(error);
        } else {
          req.session.userId = JSON.stringify(results[0]);
          req.session.user = JSON.stringify(results[0]);

          resolve(results);
        }
      }
    );
  });
};

let addUsuario = function(req, res) {
  let usuario = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    email: req.body.email,
    password: req.body.password,
    nie: req.body.nie
  };
  return new Promise((resolve, reject) => {
    mysql.connection.query(
      `INSERT INTO usuarios (nombre, apellidos, email, password, nie) VALUES('${
        usuario.nombre
      }', '${usuario.apellidos}', '${usuario.email}', '${usuario.password}', '${
        usuario.nie
      }')`,
      function(error, results, fields) {
        if (error) {
          console.log("my error ", error);
          var results = {
            error: error
          };

          reject(results);
        } else {
          console.log("The result: ", JSON.stringify(results));

          var results = {
            error: null,
            id: results.insertId,
            nombre: usuario.nombre,
            password: usuario.password
          };
          resolve(results);
        }
      }
    );
  });
};

let deleteUsuario = function(id) {
  return new Promise((resolve, reject) => {
    console.error("Borrando usuario");
    mysql.connection.query(
      `DELETE FROM usuarios WHERE usuarioID=${id}`,
      function(error, results, fields) {
        if (error) {
          console.log("my error ", error);
          var results = {
            error: error
          };

          console.error("QUE ESTA PASANDO REJECT");

          reject(results);
        } else {
          var results = {
            error: null,
            id: id
          };

          resolve(results);
        }
      }
    );
  });
};

let updateUsuario = function(req, res) {
  let usuario = {
    id: req.body.id,
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    telefono: req.body.telefono,
    foto: req.body.foto,
    conductor: req.body.conductor,
    nie: req.body.nie,
    sobreMi: req.body.sobreMi,
    email: req.body.email,
    password: req.body.password
  };
  return new Promise((resolve, reject) => {
    mysql.connection.query(
      `UPDATE usuarios SET nombre='${usuario.nombre}',email='${
        usuario.email
      }', password='${usuario.password}', apellidos='${
        usuario.apellidos
      }',telefono='${usuario.telefono}', foto='${usuario.foto}', conductor='${
        usuario.conductor
      }', nie='${usuario.nie}', sobreMi='${usuario.sobreMi}' WHERE usuarioID='${
        usuario.id
      }'`,
      function(error, results, fields) {
        if (error) {
          console.log("my error ", error);
          var results = {
            error: error
          };

          reject(results);
        } else {
          console.log("The result: ", JSON.stringify(results));

          var results = {
            error: null,
            id: usuario.id,
            nombre: usuario.nombre,
            apellidos: usuario.apellidos,
            telefono: usuario.telefono,
            foto: usuario.foto,
            conductor: usuario.conductor,
            nie: usuario.nie,
            sobreMi: usuario.sobreMi,
            email: usuario.email,
            password: usuario.password
          };
          resolve(results);
        }
      }
    );
  });
};

// Select todos los trayectos de un usuario
let selectTrayectos = function(req, res) {
  let trayectos = {
    usuarioConductorID: req.body.usuarioConductorID
  };
  console.log(trayectos);

  return new Promise((resolve, reject) => {
    console.log(req.body.id);
    mysql.connection.query(
      `SELECT * FROM trayectos_usuarios WHERE usuarioConductorID= '${
        trayectos.usuarioConductorID
      }'`,
      function(error, results, fields) {
        if (error) {
          let results = {
            error: error
          };
          reject(error);
        } else {
          console.log("El resultado es :", results);
          console.log(JSON.stringify(results));
          resolve(results);
        }
      }
    );
  });
};

// Query añadir trayecto
let addTrayecto = function(req, res) {
  let trayecto = {
    usuarioConductorID: req.body.usuarioConductorID,
    lugarComienzo: req.body.lugarComienzo,
    lugarFinal: req.body.lugarFinal,
    horaComienzo: req.body.horaComienzo,
    plazasLibres: req.body.plazasLibres     
  };
  return new Promise((resolve, reject) => {
    mysql.connection.query(
      `INSERT INTO trayectos_usuarios (usuarioConductorID, lugarComienzo, lugarFinal, horaComienzo, plazasLibres) VALUES('${
        trayecto.usuarioConductorID
      }', '${trayecto.lugarComienzo}', '${trayecto.lugarFinal}', '${trayecto.horaComienzo}', '${trayecto.plazasLibres}')`,
      function(error, results, fields) {
        if (error) {
          console.log("my error ", error);
          var results = {
            error: error
          };

          reject(results);
        } else {
         
          var results = {
            error: null,
            TrayectoID: results.insertId,
            usuarioConductorID: results.usuarioConductorID,
            lugarComienzo: results.lugarComienzo,
            lugarFinal: results.lugarFinal,
            horaComienzo: results.horaComienzo,
            plazasLibres: results.plazasLibres
          };
          console.log("The result: ", JSON.stringify(results));

          resolve(results);
        }
      }
    );
  });
};

//Añadir los trayectos.

module.exports = {
  selectUsuario,
  addUsuario,
  deleteUsuario,
  updateUsuario,
  selectTrayectos,
  addTrayecto
};
