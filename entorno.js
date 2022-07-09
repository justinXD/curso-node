let nombre = process.env.NOMBRE || 'papupro'; //usamos || '...' para pasarle un valor por defecto
//process.env.NOMBRE es una variable de entorno, una variable que esta fuera de nuestro codigo que podemos traer al programa
//es buena practia poner las variables de entorno en MAYUSCULAS y los espacios con _
console.log('hola ' + nombre)