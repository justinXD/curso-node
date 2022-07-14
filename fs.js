const fs =  require('fs');

async function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) =>{
        cb(data.toString());
    })
}

async function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, (err) => {
        if (err) {
            console.log('no pude escribir', err)
        }
        else{
            console.log('se ha escrito correctamente...')
        }
        cb()
    })
}

async function eliminar(ruta, cb) {
    fs.unlink(ruta, (err) =>{
        if (err) {
            console.log('archivo no encontrado', err)
        }
        else{
            console.log('archivo eliminado')
        }
        cb()
    });
}

async function main() {
    //await leer(__dirname + '/archivo.txt', console.log);
    //await escribir(__dirname + '/archivo1.txt', 'soy un nuevo archivo', console.log)
    await eliminar(__dirname + '/archivo1.txt', console.log);
}

main();