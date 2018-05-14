import repo from '../repositorio/'

// export default puede devolver lo que sea: una variable, una funcion o lo que sea
export default (function (req, res) {

    //req.params.variable

    repo.updateUsuario(req).then(function (results) {
        console.log('El resultado es :', results)
        //Asignar response
        res.status(200);
        res.send(JSON.stringify({ 'usuario': results }));


    }).catch(function (error) {


        res.setHeader('Content-Type', 'application/json')
        res.status(500);
        res.send(JSON.stringify({
            error: error
        }))
    })
})