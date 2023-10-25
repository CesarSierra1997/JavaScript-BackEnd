let esuqleto = "off";
//traesmos el id del elemento del html
let esqueletoStop = document.getElementById("esqueletoQuieto")
//agregar audios
let audio = new Audio("sound/botonBailar.mp3");
let audio2 = new Audio("sound/audio.mp3");

function bailar(){
    if (esuqleto == "off"){
        esuqleto="on"
        esqueletoStop.classList.add("on")
        esqueletoStop.addEventListener("click", ()=>{
            audio.play();
            audio2.play();
        })
        console.log("On");
    }else{
        esuqleto = "off"
        console.log("Off")
        esqueletoStop.classList.remove("on");
        esqueletoStop.addEventListener("click", ()=>{
            audio2.pause();
        })
    }
}