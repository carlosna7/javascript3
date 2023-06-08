// se não for passado nenhum valor no CONSOLE.LOG o valor a ser considera sera 1 atribuiudo como parametro na função multiplicar

// function multiplicar(a = 1, b = 1) {
//     return a * b;
// }

// console.log(multiplicar(5));
// console.log(multiplicar(5,5));
// console.log(multiplicar(undefined,6));

//---------------------------------------------

// function test (num = 1) {
//     console.log(typeof num);
// }

// test();
// test(undefined);
// test("");

//---------------------------------------------

// function concat(value, array = []) {
//     array.push(value);
//         return array;
// }

// concat(1);
// concat(2);
// console.log(concat(3));

//---------------------------------------------

// function chamaAlgo(coisa = algo()) {
//     return coisa;
// }

// function algo() {
//     return "Andefained";
// }

// const result = chamaAlgo();

// console.log(result)

//---------------------------------------------

function somaArrayObjetos([x, y] = [1, 2], {z: z} = {z: 3}) {
    return x + y + z;
}

console.log(somaArrayObjetos());
console.log(somaArrayObjetos([3, 5], {z: 2}));