import repo from '../repositorio/'

export default(function (req, res) {
    
    var id = req.body.id;
    
    console.error("La peticion llega aqui")

    repo.deleteUsuario(id).then(results => {
        res.send(JSON.stringify(results))
    }).catch(results=>{

        console.error("CATCH!!! DELETE USUARIO")
        //Asignar response
        res.setHeader('Content-Type', 'application/json')
        res.status(500);
        res.send(JSON.stringify(results))
    })
})