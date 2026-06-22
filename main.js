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

// membuat request ke server 
const requestCallback = (url, success, failure) => {
	const delay = Math.floor(Math.random() * 4500) + 500;
	setTimeout(() => {
		if (delay > 4000) {
			failure('Error: Connection Timeout');
		} else {
			success(`Success: ${url} (${delay}ms)`);
		}
	}, delay);
};

// 1. Buat fungsi requestPromise di sini
const requestPromise = (url) => {
	return new Promise((resolve, reject) => {
		requestCallback(url, resolve, reject);
	});
};

async function requestHandler() {
	try {
		// 2. Sekarang requestPromise sudah bisa dipanggil dengan aman
		let result = await requestPromise('movie.com');
		console.log(result);
	} catch (error) {
		console.log('Pesan Error:', error);
	}
}

// 3. Panggil fungsi requestHandler agar kodenya dieksekusi
requestHandler();
