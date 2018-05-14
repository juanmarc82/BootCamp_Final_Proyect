import repo from '../repositorio/'

export default (function (req, res) {
    
    // var usuario = { 
    //     nombre: req.body.nombre,
    //     email: req.body.email, 
    //     password: req.body.password };
   
    repo.addUsuario(req).then(results=> {

        //Asignar response
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.send(JSON.stringify(results))
    }).catch(error=>{

        //Asignar response
        res.setHeader('Content-Type', 'application/json')
        res.status(500);
        res.send(JSON.stringify(error))
    })
    
})