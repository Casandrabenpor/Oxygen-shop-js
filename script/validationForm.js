// Obtenemos el formulario y el campo de correo electrónico
const form = document.forms[0];
const email = form.elements.mail;






//VALIDAR NAME
let inputName = form.elements.inputName;
inputName.addEventListener("input", () => {
  // Si el valor del correo electrónico cumple con la expresión regular,
  // agregamos la clase "valid" al campo, de lo contrario agregamos la clase "invalid"
  inputName.classList.toggle("valid", isNameValid(inputName.value));
  inputName.classList.toggle("invalid", !isNameValid(inputName.value));
});

function isNameValid(text) {
  let min = 2;
  let max = 100;

  if (text.length >= min && text.length <= max) {
    return true;
  } else {
    return false;
  }

}

function stringlength(inputtxt, minlength, maxlength) {
  let field = inputtxt.value;
  let mnlen = minlength;
  let mxlen = maxlength;


  if (field.length < mnlen || field.length > mxlen) {

    alert("Please input the userid between " + mnlen + " and " + mxlen + " characters");
    return false;

  }
  else {

    // alert('Your userid have accepted.');
    return true;
  }
}

// VALIDAR CONTACT

const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Agregamos un evento "input" al campo de correo electrónico
// para verificar si la dirección de correo electrónico es válida o no
email.addEventListener("input", () => {
  // Si el valor del correo electrónico cumple con la expresión regular,
  // agregamos la clase "valid" al campo, de lo contrario agregamos la clase "invalid"
  email.classList.toggle("valid", emailRegExp.test(email.value));
  email.classList.toggle("invalid", !emailRegExp.test(email.value));
});

// Agregamos un evento "submit" al formulario para validar el campo de correo electrónico
form.addEventListener("submit", (e) => {
  // Si el valor del campo de correo electrónico no cumple con la expresión regular,
  // agregamos la clase "invalid" al campo, mostramos un mensaje de error y evitamos
  // que el formulario se envíe utilizando el método "preventDefault()"
  if (!emailRegExp.test(email.value)) {
    email.classList.add("invalid");
    email.nextElementSibling.innerText = "I expect an e-mail, darling!";
    email.nextElementSibling.classList.add("error", "active");
    alert("You have entered an invalid email address!");
    e.preventDefault();
  } else {
    // Si el correo electrónico es válido, no hace la alerta
    email.classList.remove("invalid");
    email.nextElementSibling.innerText = "";
    email.nextElementSibling.classList.remove("error", "active");
  }
});