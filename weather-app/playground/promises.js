var assyncAdd = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number') {
                resolve(a+b);
            }
            else {
                reject('Arguments must be numbers!');
            }
        }, 1500);
    });
};

assyncAdd(6,9).then((res) => {
    console.log('Result: ', res);
    return assyncAdd(res, 27);
}).then((res) => {
    console.log('42 is the answer:', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});

var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Nao funfou');
    }, 2500);
    
});

somePromise.then((message) => {
    console.log("Success: ", message);
}, (errorMessage) => {
    console.log("Error: ", errorMessage);
});