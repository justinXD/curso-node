// function soyAsincrona(miCallback){
//     //console.log('hola, soy una funcion asincrona')
//     setTimeout(function(){
//         console.log('estoy siendo asincrona');
//         miCallback();
//     }, 1000);
// }

// console.log('iniciando proceso...')
// soyAsincrona(function(){
//     console.log('terminando proceso...')
// });

function hola(nombre, miCallback){
    //console.log('hola, soy una funcion asincrona')
    setTimeout(function(){
        console.log('Hola '+ nombre);
        miCallback(nombre);
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function(){
        console.log('adios '+ nombre);
        otroCallback();
    }, 1000);
}
console.log('iniciando proceso...')
hola('justin', function(nombre){
    adios(nombre, function(){
        console.log('teminando proceso...')
    });
});


