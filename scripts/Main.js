//JUEGO
let contador = 0;
let nivel = 0;
let aciertos = 4;
let emocionActual;
let nivelActual;
let emocionCorrecta;
let puntajeActual;

const niveles = [
    {
        src: './resources/Neutral1.webp',
    },
    {
        src: './resources/Neutral2.webp',
    },
    {
        src: './resources/Neutral3.webp',
    },
    {
        src: './resources/Neutral4.webp',
    },
];

const subniveles = [
    //EMOCIONES NIVEL 1
    {
        emocion: 'felicidad',
        src: './resources/Felicidad1.webp',
    },
    {
        emocion: 'miedo',
        src: './resources/Miedo1.webp',
    },
    {
        emocion: 'sorpresa',
        src: './resources/Sorpresa1.webp',
    },
    {
        emocion: 'asco',
        src: './resources/Asco1.webp',
    },
    {
        emocion: 'ira',
        src: './resources/Enojo1.webp',
    },
    {
        emocion: 'desprecio',
        src: './resources/Desprecio1.webp',
    },
    {
        emocion: 'tristeza',
        src: './resources/Tristeza1.webp',
    },
    //EMOCIONES NIVEL 2
    {
        emocion: 'sorpresa',
        src: './resources/Sorpresa2.webp',
    },
    {
        emocion: 'asco',
        src: './resources/Asco2.webp',
    },
    {
        emocion: 'felicidad',
        src: './resources/Felicidad2.webp',
    },
    {
        emocion: 'desprecio',
        src: './resources/Desprecio2.webp',
    },
    {
        emocion: 'miedo',
        src: './resources/Miedo2.webp',
    },
    {
        emocion: 'tristeza',
        src: './resources/Tristeza2.webp',
    },
    {
        emocion: 'ira',
        src: './resources/Enojo2.webp',
    },
    //EMOCIONES NIVEL 3
    {
        emocion: 'asco',
        src: './resources/Asco3.webp',
    },
    {
        emocion: 'desprecio',
        src: './resources/Desprecio3.webp',
    },
    {
        emocion: 'sorpresa',
        src: './resources/Sorpresa3.webp',
    },
    {
        emocion: 'felicidad',
        src: './resources/Felicidad3.webp',
    },
    {
        emocion: 'miedo',
        src: './resources/Miedo3.webp',
    },
    {
        emocion: 'ira',
        src: './resources/Enojo3.webp',
    },
    {
        emocion: 'tristeza',
        src: './resources/Tristeza3.webp',
    },
    //EMOCIONES NIVEL 4
    {
        emocion: 'tristeza',
        src: './resources/Tristeza4.webp',
    },
    {
        emocion: 'felicidad',
        src: './resources/Felicidad4.webp',
    },
    {
        emocion: 'desprecio',
        src: './resources/Desprecio4.webp',
    },
    {
        emocion: 'ira',
        src: './resources/Enojo4.webp',
    },
    {
        emocion: 'asco',
        src: './resources/Asco4.webp',
    },
    {
        emocion: 'sorpresa',
        src: './resources/Sorpresa4.webp',
    },
    {
        emocion: 'miedo',
        src: './resources/Miedo4.webp',
    },
];

const velocidad = [
 800, 600, 400, 300
];

const puntaje = [
    4,6,8,10
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

    //AUMENTAR CONTADOR Y NIVEL
    contador++;
    if (contador % 7 == 0) {
        nivel++;
        console.log('nivel' + nivel);
    }
    cambiarImagen();

    //MOSTRAR PANTALLA DE RESULTADOS
    if (contador == 28){

        const resultados = document.querySelector('.resul');

        resultados.classList.add('resul--mostrar');
    }

    //CONTAR ACIERTOS
    emocionCorrecta = subniveles[contador - 1];
    if (contador < 28) {
        if ('' + src === '' + emocionCorrecta.emocion) {
            
            aciertos+=puntajeActual;
            console.log(aciertos);
        }
    }

    //MOSTRAR EL PUNTAJE FINAL EN LA PANTALLA DE RESULTADOS
    const puntajeFinal = document.querySelector('.resul__t3');

    puntajeFinal.innerHTML= 'Tu puntaje fue de ' + aciertos/2 + '%';

    //MOSTRAR EL NIVEL ACTUAL EN LA PANTALLA
    const numerodeimagen = document.querySelector('.juego__contador');

    numerodeimagen.innerHTML= contador + 1  + '/28';

}

btns.forEach(function (elem, index) {
    elem.addEventListener('click', btnHandle);
});


//ACIERTOS ES LA VARIABLE DEL PUNTUAJE