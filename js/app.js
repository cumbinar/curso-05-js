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


