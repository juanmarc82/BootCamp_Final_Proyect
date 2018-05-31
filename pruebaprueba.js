let addTrayecto = function(req, res) {
    let trayecto = {
      usuarioConductorID: req.body.usuarioConductorID,
      lugarComienzo: req.body.lugarComienzo,
      horaComienzo: req.body.horaComienzo
    };
    return new Promise((resolve, reject) => {
      mysql.connection.query(
        `INSERT INTO trayectos_usuarios (usuarioConductorID, lugarComienzo, horaComienzo) VALUES('${
          trayecto.usuarioConductorID
        }', '${trayecto.lugarComienzo}', '${trayecto.horaComienzo}')`,
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
              TrayectoID: results.insertId,
              usuarioConductorID: results.usuarioConductorID,
              lugarComienzo: results.lugarComienzo,
              horaComienzo: results.horaComienzo
            };
            resolve(results);
          }
        }
      );
    });
  };