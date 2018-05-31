import repo from '../../repositorio/'

export default(function (req, res) {
    
    var id = req.body.id;
    
    repo.deleteTrayecto(id).then(results => {
        res.send(JSON.stringify(results))
    }).catch(results=>{

        //Asignar response
        res.setHeader('Content-Type', 'application/json')
        res.status(500);
        res.send(JSON.stringify(results))
    })
})