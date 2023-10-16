//Definir funcion
function calcularTiempo() {

    //Instanciar el objeto Date que respresenta horta actual del sistema 
    let tiempo = new Date();

    //Definir variables para almacenar horas minutos y segundos
    let hora = tiempo.getHours();
    let minuto = tiempo.getHours();
    let segundo = tiempo.getSeconds();

    //Restablecer valores de variables para agregar un 0 a la izq
    hora = hora < 10 ? "0" + hora : hora;
    minuto = minuto < 10 ? "0" + minuto : minuto;
    segundo = segundo < 10 ? "0" + segundo : segundo;

    //Definir variable que muestre los datos del reloj en pantalla
    let pantalla = hora + ":" + minuto + ":" + segundo;

    let relojDigital = document.querySelector(".reloj")
    relojDigital.innerHTML = pantalla;
}
//SetInterval Evalua nuestra funcion en un intervalo de tiempo determinado 
setInterval(calcularTiempo, 1000)



//Solucion 2
function actualizarReloj() {

    //Se instacian nuevamente el objeto Date
    const reloj2 = new Date();

    //Se definen las variables como Str y se utiliza la funcion padStart para establecer que sean 2 digitos 0 en la cadena
    const hora2 = reloj2.getHours().toString().padStart(2, '2'); 
    const minuto2 = reloj2.getMinutes().toString().padStart(2, '0');
    const segundo2 = reloj2.getSeconds().toString().padStart(2, '0');

    //Actualiza la etiqueta div segun su Id especicicado
    document.getElementById('hora').textContent = hora2;
    document.getElementById('minuto').textContent = minuto2;
    document.getElementById('segundo').textContent = segundo2;
}
// Actualizar cada segundo
setInterval(actualizarReloj, 1000);

// Llamar a la función para configurar el reloj inicialmente
