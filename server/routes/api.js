import express from "express";
// Importamos el router de express
var router = express.Router();
//import { Router } from 'express'
// Importamos el modulo controladores.
import controller from '../controllers/'

import mysql from '../config/mysql'
var connection = mysql.connection


console.log("controller", JSON.stringify(controller))
// En la URL /api/usuario, usamos en controlador usuario. || Select de un usuario
router.post('/usuario/select', controller.selectUsuario);

// En api/usuario/addUsuario llamamos al controlador addUsuario
router.post("/usuario/add", controller.addUsuario);

// Borrar usuario
router.post('/usuario/delete', controller.deleteUsuario);

// Esta peticion es PUT. Update usuario
router.put("/usuario/update", controller.updateUsuario);


module.exports = router;