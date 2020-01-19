function valores() {
  var valor1 = parseInt(document.getElementById('valor1').value);
  var valor2 = parseInt(document.getElementById('valor2').value);
  if (valor1 == 0 || valor2 == 0) {
    document.getElementById('valor1').style.backgroundColor = 'red';
    document.getElementById('valor2').style.backgroundColor = 'red';
    alert("Insira um valor")
  }
  else {
    var resultado = (valor1 + valor2);
    if (resultado > 50) {
      alert("Está maior que 50")
      document.getElementById('valor1').style.backgroundColor = 'white';
      document.getElementById('valor2').style.backgroundColor = 'white';
      document.getElementById('Resultado').style.color = 'red';
    }
    else {
      alert("Está menor que 50")
      document.getElementById('valor1').style.backgroundColor = 'white';
      document.getElementById('valor2').style.backgroundColor = 'white';
      document.getElementById('Resultado').style.color = 'blue';
    }

    document.getElementById('Resultado').innerHTML = resultado;

  }
}
