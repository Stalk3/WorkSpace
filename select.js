function listOp() {

  var test = document.getElementById('test');
  var displaytext = test.options[test.selectedIndex].text;


  if (displaytext == "Soma") {
    var valor1 = parseInt(document.getElementById('valor3').value);
    var valor2 = parseInt(document.getElementById('valor4').value);

    var resultado = valor1 + valor2;

    document.getElementById('ResultadoOp').innerHTML = resultado

  }
    else {
      if (displaytext == "Média") {
        var nota1 = parseInt(document.querySelector("#valor3").value);
        var nota2 = parseInt(document.querySelector("#valor4").value);

        var media2 = (nota1 + nota2)/2

        var media = media2;
        document.getElementById('ResultadoOp').innerHTML = media;
      }
      else {
        if (displaytext == "Subtrair") {

          var valor1 = parseInt(document.getElementById('valor3').value);
          var valor2 = parseInt(document.getElementById('valor4').value);

          resultado = valor1 - valor2;

          document.getElementById('ResultadoOp').innerHTML = resultado;

        }
        else {
          if (displaytext == "Dividir") {

            valor1 = parseInt(document.getElementById('valor3').value);
            valor2 = parseInt(document.getElementById('valor4').value);

            resultado = valor1 / valor2;

            document.getElementById('ResultadoOp').innerHTML = resultado;
          }
          else {
            if (displaytext == "Multiplicar") {

              valor1 = parseInt(document.getElementById('valor3').value);
              valor2 = parseInt(document.getElementById('valor4').value);

              resultado = valor1 * valor2;

              document.getElementById('ResultadoOp').innerHTML = resultado;

            }

            else {
              alert("Falha na matrix")
            }
          }
        }
      }
    }
}
