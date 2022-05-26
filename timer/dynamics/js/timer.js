

const comenzar = document.getElementById("comenzar");
const detener = document.getElementById("detener");
const sound = new Audio("statics/audio/pikachu.mp3");

//let timer;
// comenzar.addEventListener("click", ()=>{
//     timer = setTimeout(() => {
//     console.log("tiempo");
//     }, 2000);
// });

// comenzar.addEventListener("click", ()=>{
//     console.log("alo");
// });

// comenzar.addEventListener("click", ()=>{
//     // clearInterval(timer);

//     console.log("ola");
// });

detener.addEventListener("click", ()=>{
    // clearInterval(timer);
    sound.play();
    // console.log("ola");
});