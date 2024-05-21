// Ubah warna navbar saat di-scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) { // Sesuaikan dengan tinggi yang diinginkan
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// Author : Idin Iskandar
// Template : Landing page phone store 
// created at : 07 Mei 2024