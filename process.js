//const process = require('process') 

//procesos en ejecucion, escuchamos los procesos
process.on('beforeExit', () => { //antes de lasir del programa
    console.log('El proceso va a terminar');
})
process.on('exit', () => { //salir del programa
    console.log('El proceso termino');
})
//todo lo que se ejecute a partir de aqui es sincrono
process.on('uncaughtException', (err, origen) => { //recoge los errores que suceden en el codigo
    console.error('Se nos colo un error');
    console.error(err);
})
process.on('unc')