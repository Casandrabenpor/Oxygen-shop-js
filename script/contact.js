const arrowbutton = document.querySelector(".arrowbutton");
//Función de un botón que se desplaza arriba, behavior es el desplazamiento suave
function buttonArrow() {
  window.scrollTo({top: 0, behavior: 'smooth'});
 
}
arrowbutton.addEventListener('click', function() {
  //Epera 2 segundos a subir
  setTimeout(function() {
    buttonArrow();
  }, 2000);
});
