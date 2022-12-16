const nameGuest = prompt("¿Cómo te llamas?");
document.getElementById('name-guest').innerHTML = nameGuest;

if (nameGuest === null || nameGuest === "") {
    document.getElementById('name-guest').innerHTML = "Anónimo";
}

let fecha = new Date();
let dia = fecha.getDate();
let mes = fecha.getMonth() + 1;
let año = fecha.getFullYear();
//mostrar fecha dentro de la clase dia
document.querySelector(".dia").innerHTML = dia + "/" + mes + "/" + año;
//dar estilos a la fecha
document.querySelector(".dia").style.color = "white";

window.setInterval(parpadeo, 500);
var color = "red";

function parpadeo() {
    var blink = document.getElementById("parpadeo");
    color = (color == "#ffffff") ? "purple" : "#ffffff";
    blink.style.color = color;
    blink.style.fontSize = '30px';
}

//musica 
const cargarSonido = function (fuente) {
    const sonido = document.createElement("audio");
    sonido.src = fuente;
    sonido.setAttribute("preload", "auto");
    sonido.setAttribute("controls", "none");
    sonido.style.display = "none"; // <-- oculto
    document.body.appendChild(sonido);
    return sonido;
};
const botonReproducir = document.querySelector("#btnReproducir"),
    botonPausar = document.querySelector("#btnPausar"),
    botonReiniciar = document.querySelector("#btnReiniciar");
// El sonido que podemos reproducir o pausar
const cancion1 = cargarSonido("Villancico-Karaoke.mp3");
const cancion2 = cargarSonido("Villancico-Navidad-Navidad.mp3");
const cancion3 = cargarSonido("Villancico-Burrito-Sabanero.mp3");
const arrayCanciones = [cancion1, cancion2, cancion3];

// ------------------------------------------------------------------------

const btnPlayPause = document.getElementById('play-pause');
let numSong = 0
function playPause() {
    checkClass()
    if (btnPlayPause.classList.contains('fa-pause')) {
        arrayCanciones[numSong].play();
    } else {
        arrayCanciones[numSong].pause();
    }
}

function checkClass() {
    const nameSong = document.getElementById('name-song');
    nameSong.innerHTML = arrayCanciones[numSong].src.split("/").pop();
    if (btnPlayPause.classList.contains('fa-pause')) {
        btnPlayPause.classList.add('fa-play');
        btnPlayPause.classList.remove('fa-pause');
    } else {
        btnPlayPause.classList.remove('fa-play');
        btnPlayPause.classList.add('fa-pause');
    }
}

function nextSong () {
    arrayCanciones[numSong].pause();
    if (numSong >= arrayCanciones.length - 1) {
        numSong = 0
    } else {
        numSong = numSong + 1
    }
    arrayCanciones[numSong].play()
    checkClass()
    
}

function previousSong () {
    arrayCanciones[numSong].pause();
    if (numSong <= 0) {
        numSong = arrayCanciones.length - 1
    } else {
        numSong = numSong - 1
    }
    arrayCanciones[numSong].play();
    checkClass()
}

