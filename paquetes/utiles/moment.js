const moment = require('moment');

let ahora = moment();

//hay mejores alternativas actuales a moment
console.log(ahora.toString());
console.log(ahora.format('YYYY/MM/DD - HH:mm')); //formato de fecha y hora
