const promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve({
            name: 'saif',
            age: 22
        })

        reject('Somthing went wrong')
    }, 5000)
});

console.log('before');

promise.then((data) => {
    console.log(data);
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve('This is my other promise')
        }, 5000)
    });
}).then((str) => {
    console.log('does this run?', str);
}).catch((err) => {
    console.log('error', err);
})

console.log('after');