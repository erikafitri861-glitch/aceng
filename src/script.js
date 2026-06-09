// script.js

document.addEventListener("DOMContentLoaded", function() {
    const greetingMessage = document.getElementById("greeting-message");
    const shareButton = document.getElementById("share-button");
    
    // Menampilkan ucapan selamat ulang tahun
    function displayBirthdayGreeting() {
        greetingMessage.innerHTML = "Selamat Ulang Tahun, Pacarku! 🎉";
        animateGreeting();
    }

    // Fungsi untuk mengatur animasi
    function animateGreeting() {
        greetingMessage.classList.add("animate");
    }

    // Fungsi untuk membagikan ucapan
    function shareGreeting() {
        const shareText = "Saya baru saja mengucapkan selamat ulang tahun kepada pacar saya! 🎂";
        if (navigator.share) {
            navigator.share({
                title: 'Ucapan Selamat Ulang Tahun',
                text: shareText,
                url: window.location.href
            }).then(() => {
                console.log('Ucapan berhasil dibagikan!');
            }).catch((error) => {
                console.error('Kesalahan saat membagikan:', error);
            });
        } else {
            alert("Fitur berbagi tidak tersedia di browser ini.");
        }
    }

    // Event listener untuk tombol berbagi
    shareButton.addEventListener("click", shareGreeting);

    // Menampilkan ucapan saat halaman dimuat
    displayBirthdayGreeting();
});