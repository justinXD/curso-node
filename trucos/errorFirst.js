


function asincrona(callback) {
    setTimeout(function() {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (error) {
           callback(error) 
        }
    }, 1000);
}


asincrona(function(error, dato){
    if (error) {
        console.error('Tenemos un error');
        console.error(error);
        //throw error; //no va a funcionar para las funciones asincronas
        return false; //paramos la ejecucion de la funcion
    }
    console.log('Todo ha ido bien , mi data es', dato);
})