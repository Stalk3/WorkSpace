// chama a função e para o event do botao
var botaoAdicionar = document.querySelector("#adicionar-cliente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
//chama o form
    var form = document.querySelector("#form-list");
// chama os dados da tabela
    var nome = form.nome.value;
    var idade = form.idade.value;
    var salario = form.salario.value;

    if (nome == "") {
      alert("Nome Invalido")
    }
    else {
      if (idade == "") {
        alert("Idade Invalida")
      }
      else {
        if (salario == "") {
          alert("Salário Invalido")
        }
        else {
          // cria a linha
              var clienteTr = document.createElement("tr");
          // adiciona os valores das celulas
              var nomeTd = document.createElement("td");
              var idadeTd = document.createElement("td");
              var salarioTd = document.createElement("td");
          // chama os valores para as celulas
              nomeTd.textContent = nome;
              idadeTd.textContent = idade;
              salarioTd.textContent = salario;
          // adiciona os valores a linha
              clienteTr.appendChild(nomeTd);
              clienteTr.appendChild(idadeTd);
              clienteTr.appendChild(salarioTd);

          // chama a tabela do html
              var tabela = document.querySelector("tbody");
          // adiciona a  linha a tabela
              tabela.appendChild(clienteTr);
        }
      }

    }

});
