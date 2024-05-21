// JavaScript untuk efek scroll pada tombol 'Jelajahi Sekarang'
document.addEventListener('DOMContentLoaded', function() {
    var exploreButton = document.querySelector('.btn-explore');
    exploreButton.addEventListener('click', function(e) {
        e.preventDefault();
        
 // Author : Idin Iskandar
 // Template : Landing page phone store 
 // created at : 07 Mei 2024
        
        var productsSection = document.querySelector('#products');
        productsSection.scrollIntoView({ behavior: 'smooth' });
    });
});
