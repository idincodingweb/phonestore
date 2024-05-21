function showDemo('video/iphone15.mp4') {
    var productDemo = document.getElementById('productDemo');
    productDemo.style.display = 'flex';
    productDemo.querySelector('video source').src = videoUrl;
    productDemo.querySelector('video').load();
}

// Author : Idin Iskandar
// Template : Landing page phone store 
// created at : 07 Mei 2024

function closeDemo() {
    var productDemo = document.getElementById('productDemo');
    productDemo.style.display = 'none';
}

// Contoh penggunaan:
// showDemo('path-to-your-product-demo.mp4');
