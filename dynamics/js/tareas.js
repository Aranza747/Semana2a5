

const agregar = document.getElementById("agregar");
const input = document.getElementById("input");
const ul = document.getElementById("ul");
const botones = document.getElementById("boton");
const otra = document.getElementById("otra");
const materia = document.getElementById("materia");



ul.addEventListener("click", (evento)=>{ 
    if(evento.target.className==='boton'){
        evento.target.parentElement.outerHTML = '';
    }
});

otra.addEventListener("click", (evento) =>{
    if(evento.target.otra == true){
        '<label class="materia">Escribe tu materia</label>'
        '<input type="text"></input>       nm ;lm '
    }
});

agregar.addEventListener("click", (evento)=>{
    ul.innerHTML += '<li id="">'+input.value +'<button class="boton"><br>Añadir</button> </li>';
});


