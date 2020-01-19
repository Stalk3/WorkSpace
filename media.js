function media() {
  var nota1 = parseInt(document.querySelector("#nota1").value);
  var nota2 = parseInt(document.querySelector("#nota2").value);

  var media2 = (nota1 + nota2)/2

  var media = media2;

  if (media < 7) {
    document.getElementById('Media').style.color = 'Red';
    document.getElementById('Media').innerHTML =  media;
  }
  else {
    document.getElementById('Media').style.color = 'Blue';
    document.getElementById('Media').innerHTML = media;
  }

}
