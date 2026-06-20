console.log('Kode ini berjalan sebelum set timeout');
setTimeout(() => {
    return console.log('Kode ini berjalan di dalam set timeout')
    }, 10000);
console.log('Kode ini berjalan setelah set timeout');
