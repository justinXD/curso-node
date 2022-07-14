const fs = require('fs');
const stream = require('stream')
const util = require('util');

let data = '';

let readStream = fs.createReadStream(__dirname + '/input.txt');

readStream.setEncoding('utf-8'); //agregamos esta linea para no agregar el metodo .toString()
// readStream.on('data', function (chunk) {
//     data += chunk;
// })

readStream.on('end', function(){ //ideal para cuando no sabemos el tamaño del archivo
    console.log(data)
})

process.stdout.write('Hola!'); //estamos escribiendo en el buffer de la salida del sistemas

const transform = stream.Transform;

function mayus() {
    transform.call(this)
}

util.inherits(mayus, transform);

mayus.prototype._transform = function(chunk, codif, cb){
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus)
    cb();
}
let Mayus = new mayus();
readStream.pipe(Mayus).pipe(process.stdout);