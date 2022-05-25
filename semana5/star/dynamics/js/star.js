const canvas = document.getElementById("star");
const ctx = canvas.getContext("2d");

const numPicos = document.getElementById("picos");
const picudez = document.getElementById("picudez");
const color = document.getElementById("color");
const relleno = document.getElementById("relleno");

console.log(color.value); 
console.log(picos.value); 
console.log(picudez.value); 
console.log(relleno.value);

function rellenar(){
    if(relleno.value == "off")
            ctx.stroke(); 
            
    else if(relleno.value == "on")
            ctx.fill(); 
}; 

function star(){

    var canvas = 500; 
    var X = canvas/2; 
    var Y = canvas/2; 
    var radio_interno = (picos.value); 
    var radio_externo = 250; 
    var numPicos = (picos.value)*2; 
    var grados = (Math.PI * 2) /numPicos; 
    var angulo; 
    var radio; 
    var ejex, ejey; 

    ctx.lineWidth = 4; 
    ctx.strokeStyle = color.value;
    ctx.fillStyle = color.value; 
    
    ctx.beginPath(); 

    for(var i = 0; i< numPicos; i++)
        {
                if(i%2==0)
                        radio = radio_interno; 
                else 
                        radio = radio_externo; 

                angulo = i * grados;
                ejex = radio * Math.cos(angulo) + X; 
                ejey = radio * Math.sin(angulo) + Y; 
                ctx.lineTo(ejex, ejey); 
        }
        ctx.closePath(); 
        rellenar(); 
};

star(); 

color.addEventListener("change", (evento)=>
{
        canvas.width = 500;
        star(); 
});

picudez.addEventListener("change", (eventos) =>
{
        if(picos.value>=4 && picos.value <= 30)
        {
                canvas.width = 500; 
                star(); 
        }
        else 
                alert("No se puede hacer una estrella con esos picos"); 
});

picos.addEventListener("change", (eventos) =>
{
        canvas.width = 500; 
        star(); 
});

relleno.addEventListener("change", (evento) =>
{
        canvas.width = 500; 
        if(relleno.value == "off")
                relleno.value = "on";
                
        else if(relleno.value == "on")
                relleno.value = "off"; 
        star(); 
});
