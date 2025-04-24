$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("bg-music");
    audio.play().catch(error => {
        console.log("Autoplay diblokir, memerlukan interaksi pengguna", error);
    });
})

document.getElementById("nextBtn").addEventListener("click", function() {
    alert("Next button clicked!"); // Gantilah dengan aksi yang diinginkan
});