//BOTONES
const emocionesf = document.querySelector('.info__iconof');
const emocionest = document.querySelector('.info__iconot');
const emocionesi = document.querySelector('.info__iconoi');
const emocionesa = document.querySelector('.info__iconoa');
const emocionesm = document.querySelector('.info__iconom');
const emocionesd = document.querySelector('.info__iconod');
const emocioness = document.querySelector('.info__iconos');

//EMOCIONES
const f = document.querySelector('.f');
const t = document.querySelector('.t');
const i = document.querySelector('.i');
const a = document.querySelector('.a');
const m = document.querySelector('.m');
const d = document.querySelector('.d');
const s = document.querySelector('.s');

//CERRAR
const cerrarf = document.querySelector('.felicidad__cerrar');
const cerrart = document.querySelector('.tristeza__cerrar');
const cerrari = document.querySelector('.ira__cerrar');
const cerrara = document.querySelector('.asco__cerrar');
const cerrarm = document.querySelector('.miedo__cerrar');
const cerrard = document.querySelector('.desprecio__cerrar');
const cerrars = document.querySelector('.sorpresa__cerrar');



//ACCIONES PARA ABRIR LA INFO DE CADA EMOCION
emocionesf.addEventListener('click', function(){
    f.classList.add('f--mostrar');
    //console.log("hola");
});

emocionest.addEventListener('click', function(){
    t.classList.add('t--mostrar');
});

emocionesi.addEventListener('click', function(){
    i.classList.add('i--mostrar');
});

emocionesa.addEventListener('click', function(){
    a.classList.add('a--mostrar');
});

emocionesm.addEventListener('click', function(){
    m.classList.add('m--mostrar');
});

emocionesd.addEventListener('click', function(){
    d.classList.add('d--mostrar');
});

emocioness.addEventListener('click', function(){
    s.classList.add('s--mostrar');
});


//CERRAR LAS PANTALLAS

cerrarf.addEventListener('click', function(){
    f.classList.remove('f--mostrar');
});

cerrart.addEventListener('click', function(){
    t.classList.remove('t--mostrar');
});

cerrari.addEventListener('click', function(){
    i.classList.remove('i--mostrar');
});

cerrara.addEventListener('click', function(){
    a.classList.remove('a--mostrar');
});

cerrarm.addEventListener('click', function(){
    m.classList.remove('m--mostrar');
});

cerrard.addEventListener('click', function(){
    d.classList.remove('d--mostrar');
});

cerrars.addEventListener('click', function(){
    s.classList.remove('s--mostrar');
});