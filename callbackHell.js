function hola(nombre, miCallback){
    //console.log('hola, soy una funcion asincrona')
    setTimeout(function(){
        console.log('Hola '+ nombre);
        miCallback(nombre);
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log('bla bla bla bla bla....');
        callbackHablar();
    },1000)
}

function adios(nombre, otroCallback) {
    setTimeout(function(){
        console.log('adios '+ nombre);
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if(veces>0){
    hablar(function(){
        conversacion(nombre, --veces, callback);
    })
}
    else{
        adios(nombre, callback);
    }
}

console.log('iniciando proceso...')
hola('justin', function(nombre){
    conversacion(nombre, 3, function(){
        console.log('proceso terminado...')
    });
});
// hola('justin', function(nombre){
//     adios(nombre, function(){
//         console.log('terminamos...')
//     })
// })
// hola('justin', function(nombre){
//     hablar(function(){
//         hablar(function(){
//             adios(nombre, function(){
//                 console.log('teminando proceso...')
//             });
//         });
//     });
// });