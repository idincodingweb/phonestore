function toggleChat() {
    var chatBox = document.getElementById('chat-box');
    chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
    var input = document.getElementById('chat-input');
    var message = input.value.trim();
    if (message) {
        displayMessage(message, 'user');
        input.value = '';
        autoRespond(message); // Fungsi auto response
    }
}

function displayMessage(message, sender) {
    var chatMessages = document.getElementById('chat-messages');
    var messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', sender);
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Author : Idin Iskandar
// Template : Landing page phone store 
// created at : 07 Mei 2024
 

// Fungsi untuk auto response
function autoRespond(userMessage) {
    // Contoh sederhana dari auto response
    var response = 'Terima kasih telah menghubungi kami. silahkan hubungi kami melalui kontak whatsapp atau email kami terimkasih.';
    
    // Anda bisa menambahkan logika yang lebih kompleks untuk response berdasarkan userMessage
    setTimeout(function() {
        displayMessage(response, 'support');
    }, 1000); // Delay 1 detik sebelum mengirim response
}

// Contoh menampilkan pesan dari dukungan pelanggan
function receiveMessage(message) {
    displayMessage(message, 'support');
}

// TODO: Implementasi penerimaan pesan dari server
