class Persona {

    constructor( firstName, lastName, photo, job, text ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.photo = photo;
        this.job = job;
        this.text = text;
    }
}
const georgeText = "Soy un actor de método; ante de rodar Oceans eleven " +
    "tuve que prepararme pasando muchos años bebiendo y yendo de juerga";
const persona1 = new Persona("George", "Clooney", "george.jpg", "Film actor", georgeText);

const jonText = "Lorem ipsum";
const persona2 = new Persona("Jon", "Kortajarena", "jon.jpg", "Model and actor", jonText);

const ryanText = "Es un texto de prueba para ryan";
const persona3 = new Persona("Ryan", "Gosling", "ryan.jpg", "Film actor", ryanText);

const actores = new Array(persona1, persona2, persona3);




window.onload = function () {
    // Variables
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 3000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    
    let $imagen = document.querySelector('#imagen');
    let $nombre = document.querySelector('#nombre');
    let $apellido = document.querySelector('#apellido');
    let $profesion = document.querySelector('#profesion');
    let $frase = document.querySelector('#frase');

    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= actores.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = actores.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${actores[posicionActual].photo})`;
        $nombre.innerHTML = actores[posicionActual].firstName;
        $apellido.innerHTML = actores[posicionActual].lastName
        $profesion.innerHTML = actores[posicionActual].job;
        $frase.innerHTML = actores[posicionActual].text;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        // Desactivamos los botones de control
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');

    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled', true);
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonPlay.addEventListener('click', playIntervalo);
    $botonStop.addEventListener('click', stopIntervalo);
    // Iniciar
    renderizarImagen();
} 
