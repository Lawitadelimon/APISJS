const datos = [1, 2, 3, 4, 5, 6]

const myPromise = new Promise(
    (resolve, reject) => {
       setTimeout( () => {
            //resolve(datos);
            reject('no se pudo :/');
        }, 3000);
    }
);

console.log(myPromise);

console.log('Inicia promesa');

myPromise.then((data) => {
    console.log(data);
    console.log('Finaliza promesa');
}).catch(error => console.log(error));
console.log('El código coninúa');