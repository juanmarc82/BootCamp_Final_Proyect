import repoMySQl from './repoMysql'

var motor = process.argv[2]
var repo

if(motor === "mysql") {
    repo =  repoMySQl;
} else{
    throw "Motor de base de datos no definido";
}

export default(repo);