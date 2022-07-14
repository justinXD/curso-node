//agregando async antes de la palabra function hacemos que la funcion sea asincrona
async function hola(nombre){
    //console.log('hola, soy una funcion asincrona')
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola '+ nombre);
            resolve(nombre);
            reject('Hay un error')
        }, 1000);
    })
    
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('bla bla bla bla bla....');
            resolve(nombre);
            reject('Hay un error')
        },1000)
    })
    
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('adios '+ nombre);
            resolve(nombre);
            reject('Hay un error')
        }, 1000);
    });
    
}
//async convierte los porcesos que aparentemente son sincronos
//necesitamos una funcion main para poder ejecutar una funcion asincrona
async function main() {
    let nombre = await hola('justin');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('termina el proceso...');
}
//ejecutamos el main
console.log('inicia el proceso...');
main();
