

function subtrair() {
  var valor1 = parseInt(document.getElementById('valor3').value);
  var valor2 = parseInt(document.getElementById('valor4').value);

  resultado = valor1 - valor2;

  document.getElementById('ResultadoOp').innerHTML = resultado;

}
