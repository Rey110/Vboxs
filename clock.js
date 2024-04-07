function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  // Mengubah format jam menjadi 2 digit
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // Menampilkan jam di elemen dengan id "clock"
  document.getElementById("clock").textContent = hours + ":" + minutes + ":" + seconds;
}

// Memperbarui jam setiap detik
setInterval(updateClock, 1000);
