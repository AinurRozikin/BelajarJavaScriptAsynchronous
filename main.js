// set timeout sederhana dengan console log
// console.log('Kode ini berjalan sebelum set timeout');
// setTimeout(() => {
//     return console.log('Kode ini berjalan di dalam set timeout')
//     }, 10000);
// console.log('Kode ini berjalan setelah set timeout');

// set timeout merubah warna halaman atau callback hell
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//         setTimeout(() => {
//         document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//             document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                 document.body.style.backgroundColor = 'blue';
//                 }, 1000);
//             }, 1000);
//     }, 1000);
// }, 1000);

// menggunakan promise untuk menghindari callback hell
let gantiWarna = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
};

// gantiWarna('red', 1000)
//     .then(() => gantiWarna('yellow', 1000))
//     .then(() => gantiWarna('green', 1000))
//     .then(() => gantiWarna('blue', 1000));



// belajar javascript async 
// const asinkronus = async() => {
//     return 'Hello World';
// }

// asinkronus().then((res) => {
//     console.log('response', res);
// })

const asinkronus = async() => {
    throw 'Hello World';
}

asinkronus().then((res) => {
    console.log('response', res);
}).catch((err) => {
    console.log('error', err);
})

async function jalankanPerubahan() {
    await gantiWarna('red', 1000);
    await gantiWarna('yellow', 1000);
    await gantiWarna('green', 1000);
    await gantiWarna('blue', 1000);
    await gantiWarna('purple', 1000);
    await gantiWarna('black', 1000);
    return 'berjalan mulus';
}

jalankanPerubahan().then((res) => console.log(res));