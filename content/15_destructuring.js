// const foo = ["primeiro", "segundo", "terceiro"]

// const [um, dois, tres] = foo;

// console.log(um)
// console.log(dois)
// console.log(tres)

//-----------------------------------------

// let a, b, c, d;

// [a, , , d] = [1, 2, 3, 4];

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

//------------------------------------------

// let a, b, c;

// [a=10, b=20, c=30] = [2, undefined, null]; //se não tiver nenhum segundo valor definido ele utilizara o 10, 20 e 30 que são os valores padrões atribuido ao A, B e C. o valor undefined não conta então mantem o valor padrão 20, já o null vai printar Null mesmo, pois é um valor valido.

// console.log(a)
// console.log(b)
// console.log(c)

//-----------------------------------------

let a = 1;
let b = 3;

[a, b] = [b, a];

console.log(a, b)

const [aa, ...bb] = [1, 2, 3, 4, 5];

console.log(aa, bb)