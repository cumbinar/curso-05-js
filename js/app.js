console.log('Hola Cumbi');


//includes: comprueba si un valor existe en un arreglo//
//includes sirve para areglos simples//

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'];

const resultado = meses.includes('Abril');
console.log(resultado);

const resultado2 = meses.includes('Noviembre');
console.log(resultado2);


//.some//
//some se utiliza con arreglo de objetos//

const carrito = [
    { nombre: 'Guitarra', precio: 500 },
    { nombre: 'Timbales', precio: 1500 },
    { nombre: 'Teclado', precio: 530 },
    { nombre: 'Congas', precio: 4500 },
    { nombre: 'Campana', precio: 5035 },
    { nombre: 'Jamblock', precio: 150 }
    
]
const existe = carrito.some(producto=> { 
    return producto.nombre === 'Celular'
})

console.log(existe);