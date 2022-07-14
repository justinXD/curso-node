function otraFuncion(params) {
    seRompe();
}
function seRompe(params) {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(function(){
        try {
            return 3+ z;
        } catch (err) {
            console.error('error en mi funcion asincrona');
            cb(err);
        }
        
    })
}

//para trabajar errores en funciones asincronas el try/catch debe ir dentro de la funcion

try {
   //otraFuncion(); 
   seRompeAsincrona(function(cb){
    console.log('hay error');
   });
} catch (err) { 
    console.error('algo salio may y se rompio')
    console.error(err) //err.message nos arroja solo el mensaje del error
    console.log('pero lo hemos capturado')
}

console.log('esto va al final');
