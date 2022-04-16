console.log('Hola Cumbi');


//includes: comprueba si un valor existe en un arreglo//
//includes sirve para areglos simples//

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'];

const resultado = meses.includes('Abril');
console.log(resultado);

const resultado2 = meses.includes('Noviembre');
console.log(resultado2);


//.some//
//some soporta arreglo simple y arreglo de objetos//

const carrito = [
    { nombre: 'Guitarra', precio: 500 },
    { nombre: 'Timbales', precio: 1500 },
    { nombre: 'Teclado', precio: 1500 },
    { nombre: 'Congas', precio: 4500 },
    { nombre: 'Campana', precio: 5035 },
    { nombre: 'Jamblock', precio: 150 }
    
]
const existe = carrito.some(producto => producto.nombre === 'Jamblock'
)

console.log(existe);

const existe2 = meses.some(mes => mes === 'Noviembre');
console.log(existe2);

//findIndex para encontrar la posición en un array//

const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice);

//encontrar un indice en un arreglo de objetos//

const indice2 = carrito.findIndex(producto => producto.precio === 150);
console.log(indice2);

//reduce function reduce//

const carrito2 = [
    { nombre: 'Guitarra2', precio: 500 },
    { nombre: 'Timbales2', precio: 1500 },
    { nombre: 'Teclado2', precio: 1500 },
    { nombre: 'Congas2', precio: 4500 },
    { nombre: 'Campana2', precio: 5035 },
    { nombre: 'Jamblock2', precio: 150 }
    
]

//para saber cuánto suma el carrito////
//hay dos formas://

let total = 0;
carrito2.forEach(producto => total += producto.precio);
console.log(total);

//reduce es la otra forma más usada://

let cuenta = carrito2.reduce((total, producto) => total + producto.precio, 0);
console.log(cuenta);

//filter crea un nuevo arreglo, basado en el parámetro que es evaluado////


const carrito3 = [
    { nombre: 'Guitarra3', precio: 500 },
    { nombre: 'Timbales3', precio: 1500 },
    { nombre: 'Teclado3', precio: 1500 },
    { nombre: 'Congas3', precio: 4500 },
    { nombre: 'Campana3', precio: 1500 },
    { nombre: 'Jamblock3', precio: 150 }
    
]

//buscar todos los productos que cuesten más de 600//

let busqueda = carrito3.filter(producto => producto.precio > 600);

console.log(busqueda);

//hacer un arreglo con todos menos uno(Campana3)/

let busqueda2 = carrito3.filter(producto => producto.nombre !== 'Campana3');
console.log(busqueda2);

//find --crea un nuevo arreglo basado en la condición que se está revisando//

const carrito4 = [
    { nombre: 'Guitarra4', precio: 500, color: 'green' },
    { nombre: 'Timbales4', precio: 1500, color: 'blue' },
    { nombre: 'Teclado4', precio: 1500, color: 'red' },
    { nombre: 'Congas4', precio: 4500, color: 'orange' },
    { nombre: 'Campana4', precio: 1500, color: 'purple' },
    { nombre: 'Jamblock4', precio: 150, color: 'yelow' }
    
]


const nuevo = carrito4.find(producto => producto.nombre === 'Campana4');
console.log(nuevo); //find crea un arreglo con el primer elemento que cumpla la condición//


/*every -- todos los elementos de un arreglo deben cumplir la
condición para retornar true */ //

const carrito5 = [
    { nombre: 'Guitarra5', precio: 500, color: 'green' },
    { nombre: 'Timbales5', precio: 1500, color: 'blue' },
    { nombre: 'Teclado5', precio: 700, color: 'red' },
    { nombre: 'Congas5', precio: 4500, color: 'orange' },
    { nombre: 'Campana5', precio: 1500, color: 'purple' },
    { nombre: 'Jamblock5', precio: 150, color: 'yelow' }
    
]

const consulta = carrito5.every(producto => producto.precio < 1000);
console.log(consulta); //return false, no todos son menores que 100//

const consulta2 = carrito5.some(producto => producto.precio < 1000);
console.log(consulta2); //return true, al menos uno cumple la condición//

//concat -- spread operator para unir dos arreglos//

const dias = ['lunes', 'martes', 'miercoles'];

const dias2 = ['jueves', 'viernes', 'sábado', 'domingo'];

console.log(dias);
console.log(dias2);

const semana = dias.concat (dias2);
console.log(semana); 

const semana2 = [...dias, ...dias2];
console.log(semana2);

const semana3 = [...dias, ...dias2, ...dias, ...dias2];
console.log(semana3);

/*Spread Operator agregar un elemento 
al final de un arreglo*/

const misMeses = ['enero', 'febrero', 'marzo'];

const otroMes = [...misMeses, 'abril'];

console.log(otroMes); 
console.log(misMeses); //no se modifica, ver programación funcional...//

/*Spread Operator agregar un objeto 
al final de un arreglo de objetos*/

const carrito6 = [
    { nombre: 'Guitarra6', precio: 500, color: 'green' },
    { nombre: 'Timbales6', precio: 1500, color: 'blue' },
    { nombre: 'Teclado6', precio: 700, color: 'red' },
    { nombre: 'Congas6', precio: 4500, color: 'orange' },
    { nombre: 'Campana6', precio: 1500, color: 'purple' },
    { nombre: 'Jamblock6', precio: 150, color: 'yelow' }
    
]

const otroArtefacto = { producto: 'Pandereta6', precio: 150, color: 'pink' }

const carrito6A = [...carrito6, otroArtefacto]; //se agrega otro objeto al arreglo
console.log(carrito6); //no se modifica el arreglo
console.log(carrito6A);



