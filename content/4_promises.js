const umaPromessa = new Promise((resolve, reject) => {
    let soma = 1 + 3;

    if(soma === 2) {
        resolve("Está certo")
    } else {
        reject("Está errado")
    }
})

console.log("Esperando promise...")

umaPromessa.then((resultado) => {
    console.log("Valor do then: " + resultado)
}).catch((erro) => {
    console.error("Valor do catch: " + erro)
}).finally(() => {
    console.log("Indenpedente do resultado eu sempre estarei aqui")
});