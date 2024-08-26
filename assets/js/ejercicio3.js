
let resultado = document.getElementById("resultado");

document.getElementById("btn-sumar").addEventListener("click", () => {
  let valor1 = parseInt(document.getElementById("valor1").value);
  let valor2 = parseInt(document.getElementById("valor2").value);
  resultado = valor1 + valor2;
  document.querySelector(".resultado").innerHTML = resultado;
  console.log(resultado);
});
document.getElementById("btn-restar").addEventListener("click", () => {
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value);
    resultado = valor1 - valor2;
    document.querySelector(".resultado").innerHTML = resultado;
    console.log(resultado);
  });