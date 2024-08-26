document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let asunto = document.getElementById("asunto").value;
    let mensaje = document.getElementById("mensaje").value;
    validar(nombre, ".errorNombre");
    validar(asunto, ".errorAsunto");
    validar(mensaje, ".errorMensaje");
    validarForm(nombre, asunto, mensaje);
    if (pasamosLaValidacion) {
      document.querySelector(".resultado").innerHTML =
        "Mensaje enviado con exito";
    } else {
      document.querySelector(".resultado").innerHTML = "";
    }
    console.log(validacionNombre.test(nombre));
  });
let pasamosLaValidacion = true;
let validacionNombre = /^[a-zA-Z\s]+$/;

function validar(inputText, classes) {
  if (validacionNombre.test(inputText) == false) {
    document.querySelector(classes).innerHTML = "Ingrese un nombre válido.";
  } else {
    document.querySelector(classes).innerHTML = "";
  }
}
function validarForm(nombre, asunto, mensaje) {
  if (
    validacionNombre.test(nombre) &&
    validacionNombre.test(asunto) &&
    validacionNombre.test(mensaje)
  ) {
    pasamosLaValidacion = true;
  } else pasamosLaValidacion = false;
}