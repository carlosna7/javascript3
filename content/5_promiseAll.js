const promise1 = new Promise((resolve, reject) => {
    resolve("Promise 1 resolvida");
});

const promise2 = new Promise((resolve, reject) => {
    resolve("Promise 2 resolvida");
});

const promise3 = new Promise((resolve, reject) => {
    resolve("Promise 3 resolvida");
});

Promise.all([promise1, promise2, promise3]).then((msg) => {
    console.log(msg);
});