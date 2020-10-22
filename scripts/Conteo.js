//Conteo para iniciar el juego

let conteoImagen;
conteoImagen = document.querySelector('.conteo');

setTimeout(function () {
    conteoImagen.setAttribute('src', './resources/Juego 2.jpg');
}, 1000)

setTimeout(function () {
    conteoImagen.setAttribute('src', './resources/Juego 3.jpg');
}, 2000)

setTimeout(function () {
    window.location.href="juego.html";
}, 3000)