const deg = 6;

const horas = document.querySelector('.hora');
const minutos = document.querySelector('.minuto');
const segundos = document.querySelector('.segundo');

setInterval(() => {
    let tiempo = new Date();

    let hr = tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;

    horas.style.transform = `rotate(${(hr) + (min / 12)}deg)`
    minutos.style.transform = `rotate(${(min) + (seg / 30)}deg)`
    segundos.style.transform = `rotate(${(seg) + (seg / 30)}deg)`
    minutos.style.transform = `rotate(${(min)}deg)`
    segundos.style.transform = `rotate(${(seg)}deg)`

    // Reloj Digital

    function actualizarReloj() {

        //Se instacian nuevamente el objeto Date
        const reloj2 = new Date();

        //Se definen las variables como Str y se utiliza la funcion padStart para establecer que sean 2 digitos 0 en la cadena
        const hora2 = reloj2.getHours().toString().padStart(2, '0');
        const minuto2 = reloj2.getMinutes().toString().padStart(2, '0');
        const segundo2 = reloj2.getSeconds().toString().padStart(2, '0');
        const m = reloj2.toString('Am')

        if (hora2 > 12) {
            mM = "Pm"
        }

        //Actualiza la etiqueta div segun su Id especicicado
        document.getElementById('hora').textContent = hora2 - 12;
        document.getElementById('minuto').textContent = minuto2;
        document.getElementById('segundo').textContent = segundo2;
        document.getElementById('m').textContent = m;
    }
    // Actualizar cada segundo
    setInterval(actualizarReloj, 1000);

})
