// exemplo callback

// const statusGato = "feio";

// function isGatoFeliz(callback, erroCallback) {
//     switch (statusGato) {
//         case "feliz":
//             callback({
//                 mensagem: "FELIZ",
//             });
//             break;
//         case "bravo":
//             erroCallback({
//                 mensagem: "BRAVO",
//             });
//             break;
//         case "trise":
//             erroCallback({
//                 mensagem: "TRISTE",
//             });
//             break;
//         default:
//             erroCallback({
//                 mensagem: "EMOCIONALMENTE INDEFINIDO",
//             });
//     }
// }

// isGatoFeliz((response) => console.log(`TUdo certo, o gato está ${response.mensagem}`),
// (erro) => console.error(`Deu ruim, o gato está ${erro.mensagem}`)
// );

// exemplo promise

const statusGato = "feio";

const isGatoFeliz = new Promise((resolve, reject) => {
    switch (statusGato) {
        case "feliz":
            resolve({
                mensagem: "FELIZ",
            });
            break;
        case "bravo":
            reject({
                mensagem: "BRAVO",
            });
            break;
        case "trise":
            reject({
                mensagem: "TRISTE",
            });
            break;
        default:
            reject({
                mensagem: "EMOCIONALMENTE INDEFINIDO",
            });
    }
})

isGatoFeliz.then((response) => {
    console.log(`TUdo certo, o gato está ${response.mensagem}`)
}).catch((erro) => {
    console.error(`Deu ruim, o gato está ${erro.mensagem}`)
})