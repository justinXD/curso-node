const os = require('os'); // el modulo os nos permite acceder a todo lo de bajo nivel del equipo desde node

//console.log(os.arch()); //arquitectura del sistema operativo

//console.log(os.platform()); //plataforma del sistema operativo

//console.log(os.cpus().length); //informacion del procesador y sus nucleos. con .length nos da el numero de nucleoso hilos

//console.log(os.constants); //errores y señales del sistema

// const SIZE = 1024;
// function kb(bytes) { return bytes / SIZE}
// function mb(bytes) { return kb(bytes) / SIZE}
// function gb(bytes) { return mb(bytes) / SIZE}

// console.log(os.freemem()); //estacio en memoria ram libre en bytes
// console.log(kb(os.freemem()));
// console.log(mb(os.freemem()));
// console.log(gb(os.freemem()));

// console.log(gb(os.totalmem())); //memoria ram total

// console.log(os.homedir()); //directorio raiz

// console.log(os.tmpdir()); //directorio temporal

// console.log(os.hostname()); //nombre del host

console.log(os.networkInterfaces()); //interfaces de red