//Importamos selectUsuario
import selectUsuario from './selectUsuario'
//Importamos addUsuario
import addUsuario from './addUsuario'
//Importamos deleteUsuario
import deleteUsuario from "./deleteUsuario";
//Importamos updateUsuario
import updateUsuario from "./updateUsuario";

// Como asignamos directamente, los archivos anteriores usan export default

// Asignamos a los exports las funciones que hemos importado

module.exports = { selectUsuario, addUsuario, deleteUsuario, updateUsuario }