let updateButton = document.getElementById('updateDetails');
let cancelButton = document.getElementById('cancel');
let favDialog = document.getElementById('favDialog');
// El botón Actualizar abre un cuadro de diálogo modal después de 5 segundos
setTimeout(function () {
  const storage = window.sessionStorage;
  console.log(storage.getItem("visit"));
  if (storage.getItem("visit") == null) {
    favDialog.showModal();
    storage.setItem("visit", true);
  }
}, 1000);

// El botón de cancelar formulario cierra el cuadro de diálogo
cancelButton.addEventListener('click', function () {
  favDialog.close();
});

// Agregamos un evento "submit" al formulario para validar el campo de correo electrónico
favDialog.querySelector('form').addEventListener('submit', function (e) {
  const mailPopup = this.elements.mailPopup;
  const mailPopupRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!mailPopupRegExp.test(mailPopup.value)) {
    mailPopup.classList.add("invalid");
    mailPopup.nextElementSibling.innerText = "I expect an e-mail, darling!";
    mailPopup.nextElementSibling.classList.add("error", "active");
    alert("You have entered an invalid email address!");
    e.preventDefault();
  } else {
    // Si el correo electrónico es válido, mostramos el cuadro de diálogo
    favDialog.showModal();
  }
});


