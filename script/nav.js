// Variable seleccionando la clase de css
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');

// Definimos la función 
function toggleNav() {
    //función con botón de la clase icono del nav
    burger.classList.toggle('fa-bars');
    // botón del icono de la cruz
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}
//Se abre el nav cuadno pulsas y se cambia al icono  cruz
// Llamamos a la función después de pulsar el evento
burger.addEventListener('click', function () {
    toggleNav();
});

// Scroll

window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY;
    let docHeight = document.body.scrollHeight - window.innerHeight;
    //calculamos la cantidad de desplazamiento vertical (scrollTop) y la altura del documento (docHeight)
    //calculamos el porcentaje de desplazamiento dividiendo el desplazamiento vertical por la altura del documento y multiplicando por 100.
    let scrollPercent = (scrollTop / docHeight) * 100;
    document.querySelector('.bar-long').style.width = scrollPercent + '%';
});
