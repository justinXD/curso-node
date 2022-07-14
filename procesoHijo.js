const { exec, spawn } = require('child_process');
const { stdout, stderr } = require('process');
//const { error } = require('console');

// exec('dir', (err, stdout, stderr) => {  //exec nos permite ejecutar comandos para hacer procesos por debajo (un nuevo hilo)
//     if (err) {
//         console.error(err);
//         return false;
//     }

//     console.log(stdout);
// })

let proceso = spawn('dir',['']);
console.log(proceso.pid)
console.log(proceso.connected);

proceso.stdout.on('data', function dato() {
    console.log(dato.toString())
})

proceso.on('exit', function () {
    console.log('el proceso termono')
})