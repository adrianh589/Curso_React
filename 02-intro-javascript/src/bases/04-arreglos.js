// Arreglos en JS
// const array = new Array(100);
const array = [1,2,3,4];
// array.push(1);
// array.push(2);
// array.push(3);
// array.push(4);

let arreglo2 = [...array, 5];

const arreglo3 = arreglo2.map( function (numero) {
    return numero * 2
} );


console.log(array);

console.log(arreglo2);

console.log(arreglo3);