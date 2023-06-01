const promise1 = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 1 resolvida"), 1000) 
});

const promise2 = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 2 resolvida"), 1000) 
});

const promise3 = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 3 resolvida"), 1000) 
});

const promise4 = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 4 resolvida"), 1000) 
});

const promise5 = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 5 resolvida"), 1000) 
});

// Promise.race([promise1, promise2, promise3]).then((msg) => {
//     console.log(msg);
// });

const resolution = async () => {
    const resultado1 = await promise1();
    console.log(`${resultado1} em 1 seg`);

    const resultado2 = await promise2();
    console.log(`${resultado2} em 2 seg`);

    const resultado3 = await promise3();
    console.log(`${resultado3} em 3 seg`);

    const resultado4 = await promise4();
    console.log(`${resultado4} em 4 seg`);

    const resultado5 = await promise5();
    console.log(`${resultado5} em 5 seg`);
}

resolution();
