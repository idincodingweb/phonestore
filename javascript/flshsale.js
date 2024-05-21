// Tetapkan tanggal dan waktu akhir flash sale
var countDownDate = new Date("May 31, 2024 23:59:59").getTime();

// Perbarui hitungan mundur setiap 1 detik
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Hitung waktu hari, jam, menit, dan detik
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Author : Idin Iskandar
// Template : Landing page phone store 
// created at : 07 Mei 2024

    // Tampilkan hasil di elemen dengan id="timer"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Jika hitungan mundur selesai
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Flash Sale Telah Berakhir";
    }
}, 1000);
