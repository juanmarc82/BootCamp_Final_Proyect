import repo from '../../repositorio/'

export default (function (req, res) {

    repo.searchTrayectos(req, res).then(results => {

        //Asignar response
        res.setHeader('Content-Type', 'application/json');
        res.status(200);
        res.send(JSON.stringify(results))
    }).catch(error => {

        //Asignar response
        res.setHeader('Content-Type', 'application/json')
        res.status(500);
        res.send(JSON.stringify(error))
    })

})