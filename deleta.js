// var clientes = document.querySelectorAll(".cliente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
  event.target.parentNode.classList.add("fadeOut");

  setTimeout(function(){
    event.target.parentNode.remove();
  },500);

});




// clientes.forEach(function(cliente) {
//    cliente.addEventListener("dblclick", function(){
//        this.remove();
//    })
// });
