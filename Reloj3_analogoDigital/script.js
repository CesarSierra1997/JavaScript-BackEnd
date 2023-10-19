/* Relos Analogo y Digital */

//Reloj Analogo
//definimos las variables
const deg = 6;

//Seleccionamos elementos HTML con las clases CSS "hora," "minuto" y "segundo" utilizando document.querySelector()
const horas = document.querySelector('.hora');
const minutos = document.querySelector('.minuto');
const segundos = document.querySelector('.segundo');

//setInterval(() => {...}): Esto inicia un bucle que se ejecutará repetidamente cada intervalo de tiempo
setInterval(() => {
    let tiempo = new Date();

    //let hr = tiempo.getHours() * 30;: Calcula el ángulo de la manecilla de las horas multiplicando las horas actuales por 30. Dado que hay 12 horas en un reloj analógico, se usan 30 grados por hora.
    let hr = tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;


    // utilizando el estilo transform y la propiedad rotate. Los cálculos de los ángulos obtenidos en los pasos anteriores se utilizan para establecer la rotación de las manecillas en grados.
    horas.style.transform = `rotate(${(hr) + (min / 12)}deg)`
    //OP2 minutos.style.transform = `rotate(${(min) + (seg / 30)}deg)`
    //OP2 segundos.style.transform = `rotate(${(seg) + (seg / 30)}deg)`
    minutos.style.transform = `rotate(${(min)}deg)`
    segundos.style.transform = `rotate(${(seg)}deg)`
})

// Reloj Digital

function relojDigital() {

    //Se instancia el objeto Date()
    const reloj2 = new Date();

    //Se llama el metodo que obtiene los diferentes tiempor getHours(), convertimos las variables como Str y se utiliza el metodo padStart() para establecer que sean 2 caracteres de longitud y que contengan "0" en la cadena
    const hora2 = reloj2.getHours().toString().padStart(2, '0');
    const minuto2 = reloj2.getMinutes().toString().padStart(2, '0');
    const segundo2 = reloj2.getSeconds().toString().padStart(2, '0');

    //Actualiza la etiqueta div segun su Id especicicado
    // Condicion que nos valida si el dato a mostrar es PM o AM
    if (hora2 > 12) {
        document.getElementById('hora').textContent = hora2 - 12;
        document.getElementById('m').textContent = "PM";
    }
    else {
        document.getElementById('hora').textContent = hora2;
        document.getElementById('m').textContent = "AM";
    }

    document.getElementById('minuto').textContent = minuto2;
    document.getElementById('segundo').textContent = segundo2;

}
// Actualizar la funcion cada 1000 mili segundos o 1 segundo
setInterval(relojDigital, 1000);
