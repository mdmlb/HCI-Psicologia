//JUEGO
let contador = 0;
let nivel = 0;
let aciertos = 2;
let emocionActual;
let nivelActual;
let emocionCorrecta;
let puntajeActual;

const niveles = [
    {
        src: './resources/Neutral1.JPG',
    },
    {
        src: './resources/Neutral2.JPG',
    },
    {
        src: './resources/Neutral3.JPG',
    },
    {
        src: './resources/Neutral4.JPG',
    },
];

const subniveles = [
    //EMOCIONES NIVEL 1
    {
        emocion: 'felicidad',
        src: './resources/Felicidad1.JPG',
    },
    {
        emocion: 'miedo',
        src: './resources/Miedo1.JPG',
    },
    {
        emocion: 'sorpresa',
        src: './resources/Sorpresa1.JPG',
    },
    {
        emocion: 'asco',
        src: './resources/Asco1.JPG',
    },
    {
        emocion: 'ira',
        src: './resources/Enojo1.JPG',
    },
    {
        emocion: 'desprecio',
        src: './resources/Desprecio1.JPG',
    },
    {
        emocion: 'tristeza',
        src: './resources/Tristeza1.JPG',
    },
    //EMOCIONES NIVEL 2
    {
        emocion: 'sorpresa',
        src: './resources/Sorpresa2.JPG',
    },
    {
        emocion: 'asco',
        src: './resources/Asco2.JPG',
    },
    {
        emocion: 'felicidad',
        src: './resources/Felicidad2.JPG',
    },
    {
        emocion: 'desprecio',
        src: './resources/Desprecio2.JPG',
    },
    {
        emocion: 'miedo',
        src: './resources/Miedo2.JPG',
    },
    {
        emocion: 'tristeza',
        src: './resources/Tristeza2.JPG',
    },
    {
        emocion: 'ira',
        src: './resources/Enojo2.JPG',
    },
    //EMOCIONES NIVEL 3
    {
        emocion: 'asco',
        src: './resources/Asco3.JPG',
    },
    {
        emocion: 'desprecio',
        src: './resources/Desprecio3.JPG',
    },
    {
        emocion: 'sorpresa',
        src: './resources/Sorpresa3.JPG',
    },
    {
        emocion: 'felicidad',
        src: './resources/Felicidad3.JPG',
    },
    {
        emocion: 'miedo',
        src: './resources/Miedo3.JPG',
    },
    {
        emocion: 'ira',
        src: './resources/Enojo3.JPG',
    },
    {
        emocion: 'tristeza',
        src: './resources/Tristeza3.JPG',
    },
    //EMOCIONES NIVEL 4
    {
        emocion: 'tristeza',
        src: './resources/Tristeza4.JPG',
    },
    {
        emocion: 'felicidad',
        src: './resources/Felicidad4.JPG',
    },
    {
        emocion: 'desprecio',
        src: './resources/Desprecio4.JPG',
    },
    {
        emocion: 'ira',
        src: './resources/Enojo4.JPG',
    },
    {
        emocion: 'asco',
        src: './resources/Asco4.JPG',
    },
    {
        emocion: 'sorpresa',
        src: './resources/Sorpresa4.JPG',
    },
    {
        emocion: 'miedo',
        src: './resources/Miedo4.JPG',
    },
];

const velocidad = [
 800, 600, 400, 200
];

const puntaje = [
    2,3,4,5
];

const img = document.querySelector('.juego__imagen');
function cambiarImagen(){
    if(contador < 28){
        emocionActual = subniveles[contador];
        nivelActual = niveles[nivel];
        velocidadActual = velocidad[nivel];
        puntajeActual = puntaje[nivel];
        
        setTimeout(function () {
            img.setAttribute('src', emocionActual.src);
        }, 1000);

        setTimeout(function () {
            img.setAttribute('src', nivelActual.src);
        }, velocidadActual+1000);

    }
}
cambiarImagen();


//BOTONES
const btns = document.querySelectorAll('.juego__btn');

function btnHandle(event) {
    const src = event.target.getAttribute('alt');

    ////////
    contador++;
    if (contador % 7 == 0) {
        nivel++;
        console.log('nivel' + nivel);
    }
    cambiarImagen();

    ///////
    if (contador == 28){

        const resultados = document.querySelector('.resul');

        resultados.classList.add('resul--mostrar');
        //console.log("llego");
    }

    ///////
    emocionCorrecta = subniveles[contador - 1];
    if (contador < 28) {
        if ('' + src === '' + emocionCorrecta.emocion) {
            
            aciertos+=puntajeActual;
            console.log(aciertos);
        }
    }

    //Con
    const puntajeFinal = document.querySelector('.resul__t3');

    puntajeFinal.innerHTML= 'Tu puntaje fue de ' + aciertos + '%';

    //QUE TAL
    const numerodeimagen = document.querySelector('.juego__contador');

    numerodeimagen.innerHTML= contador +1  + '/28';

}

btns.forEach(function (elem, index) {
    elem.addEventListener('click', btnHandle);
});


//ACIERTOS ES LA VARIABLE DEL PUNTUAJE