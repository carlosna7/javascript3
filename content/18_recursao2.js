function timeout(numero) {
    return new Promise(resolve => setTimeout(() => resolve(numero), 1000));
}

async function contagemRegressiva(numero) {
    if(numero <= 0) {
    return console.log("Fim!")
    }

    console.log(await timeout(numero));

    return contagemRegressiva(numero - 1);
}

contagemRegressiva(10)

//----------------------------------------------

function fatorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * fatorial(n - 1);
}

console.log(fatorial(6))