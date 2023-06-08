// se não for passado nenhum valor no CONSOLE.LOG o valor a ser considera sera 1 atribuiudo como parametro na função multiplicar

function multiplicar(a = 1, b = 1) {
    return a * b;
}

console.log(multiplicar(5));
console.log(multiplicar(5,5));
console.log(multiplicar(undefined,6));

//---------------------------------------------