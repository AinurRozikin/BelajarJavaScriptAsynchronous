// set timeout sederhana dengan console log
console.log('Kode ini berjalan sebelum set timeout');
setTimeout(() => {
    return console.log('Kode ini berjalan di dalam set timeout')
    }, 10000);
console.log('Kode ini berjalan setelah set timeout');

// set timeout merubah warna halaman
setTimeout(() => {
    document.body.style.backgroundColor = 'red';
        setTimeout(() => {
        document.body.style.backgroundColor = 'yellow';
            setTimeout(() => {
            document.body.style.backgroundColor = 'green';
                setTimeout(() => {
                document.body.style.backgroundColor = 'blue';
                }, 1000);
            }, 1000);
    }, 1000);
}, 1000);
