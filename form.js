document.getElementById("reportForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    let data = {};
    formData.forEach(function(value, key) {
        data[key] = value;
    });
    console.log(data); // Di sini Anda dapat melakukan pengiriman data ke server atau proses lainnya
    alert("Laporan berhasil dikirim!");
    this.reset(); // Bersihkan formulir setelah berhasil dikirim
});
