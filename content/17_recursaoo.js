// let soma = 0;

// for(let i = 1; i <= 10; i++) {
//     soma += i;
// }

// console.log(soma);

//---------------------------------------------------

// function somaRecursiva1(n) {
//     let soma = 0;

//     for(let i = 1; i <= n; i++) {
//         soma += i;
//     }

//     return soma;
// }

// console.log(somaRecursiva1(10))

//---------------------------------------------------

function somaRecursiva2(n) {
    if (n === 1) {
        return 1;
    }

    return n + somaRecursiva2(n - 1);
}

console.log(somaRecursiva2(10))