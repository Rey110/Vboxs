document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav a");
  const contents = document.querySelectorAll(".content");
  const loader = document.getElementById("loader"); // Menambahkan referensi ke elemen efek loading

  navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      loader.style.display = "block"; // Menampilkan efek loading
      const targetId = this.getAttribute("href").substring(1);
      contents.forEach(content => {
        content.classList.remove("active");
        if (content.getAttribute("id") === targetId) {
          content.classList.add("active");
        }
      });
      // Menambahkan delay sementara untuk efek loading (contoh: 1.5 detik)
      setTimeout(() => {
        window.scrollTo(0, 0);
        loader.style.display = "none"; // Menyembunyikan efek loading setelah halaman dimuat
      }, 1500);
    });
  });
});
