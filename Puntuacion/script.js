const marcoPuntaje = document.querySelector(".puntaje");
let puntajeInicial = 0;
const puntajeMax = 5;

const html_mapa = Array.from(Array(puntajeMax)).map((item, i) => {
    return `<div class="item item-${i}" data-pos="${i}"> </div>`;
});
marcoPuntaje.innerHTML = html_mapa.join('');

document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("mouseover", e => {
        //console.log("validar");
        const posicion = item.getAttribute("data-pos");

        //validacion estricta
        if (puntajeInicial === parseInt(posicion) + 1) {
            return;
        }

        document.querySelectorAll(".item").forEach(cuadraditoGris => {
            if (cuadraditoGris.classList.contains("selec")) {
                cuadraditoGris.classList.remove("selec");
            }
        });

        for (let i = 0; i <= posicion; i++) {
            const cuadradito = document.querySelector(`.item-${i}`);
            if (!cuadradito.classList.contains("selec")) {
                cuadradito.classList.add("selec")
            }
        }
        puntajeInicial = parseInt(posicion) + 1;
    });
    item.addEventListener("click", (e) => {
        const posicion = item.getAttribute("data-pos");
        puntajeInicial = parseInt(posicion)+1;
        console.log(puntajeInicial);
    });
});
