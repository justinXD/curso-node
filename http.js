const http = require('http');

http.createServer(router).listen(3000); //puerto 3000
function router(req, res){
    console.log('nueva peticion!');
    console.log(req.url)

    switch (req.url) {
        case '/hola':
            res.write('Hola que tal');
            res.end()
            break;
    
        default:
            res.write('Error 404: No se lo que quieres');
            res.end();
            break;
    }

    // res.writeHead(201, { 'content-Type': 'text/plain' })
    
    // //escribir respuesta al usuario
    // res.write('hola, ya se usar http desde nodeJS')

    // res.end();
}

console.log('escuchando http en el puerto 3000')