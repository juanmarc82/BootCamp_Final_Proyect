//Importamos selectUsuario
import selectUsuario from "./usuarioControllers/selectUsuario";
//Importamos addUsuario
import addUsuario from "./usuarioControllers/addUsuario";
//Importamos deleteUsuario
import deleteUsuario from "./usuarioControllers/deleteUsuario";
//Importamos updateUsuario
import updateUsuario from "./usuarioControllers/updateUsuario";

//Importamos selectTrayecto
import selectTrayectos from "./trayectoControllers/selectTrayectos";
//Importamos addTrayecto
import addTrayecto from "./trayectoControllers/addTrayecto";
//Importamos deleteTrayecto
import deleteTrayecto from "./trayectoControllers/deleteTrayecto";
//Importamos updateTrayecto
import updateTrayecto from "./trayectoControllers/updateTrayecto";
//Importamos searchTrayecto
import searchTrayectos from "./trayectoControllers/searchTrayectos";


// Como asignamos directamente, los archivos anteriores usan export default

// Asignamos a los exports las funciones que hemos importado

module.exports = {
  selectUsuario,
  addUsuario,
  deleteUsuario,
  updateUsuario,
  selectTrayectos,
  addTrayecto,
  deleteTrayecto,
  searchTrayectos
};

// selectTrayecto, deleteTrayecto, updateTrayecto
