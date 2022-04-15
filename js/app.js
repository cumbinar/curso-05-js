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