/*una promesa es una forma mas sencilla de hacer un callback*/
function hola(nombre){
    //console.log('hola, soy una funcion asincrona')
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola '+ nombre);
            resolve(nombre);
            reject('Hay un error')
        }, 1000);
    })
    
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('bla bla bla bla bla....');
            resolve(nombre);
            reject('Hay un error')
        },1000)
    })
    
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('adios '+ nombre);
            resolve(nombre);
            reject('Hay un error')
        }, 1000);
    });
    
}
//al usar promesas siempre debems unsar un .catch para evitar la propagacion de errores
console.log('iniciando el proceso...');
hola('justin')
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('terminado el proceso...');
    
    })
    .catch(error =>{
        console.error('Ha habido un error')
        console.error(error)
    })