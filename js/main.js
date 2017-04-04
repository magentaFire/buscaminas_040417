var celdas = document.getElementsByTagName("td");

for (var i = 0; i < celdas.length; i++){
  celdas[i].addEventListener("click", verificaCeldas)
}

function m(){
  console.log("holi");
}

function verificaCeldas(){
  var empty = document.getElementsByClassName("empty");
  var num1 = document.getElementsByClassName("num1");
  var num2 = document.getElementsByClassName("num2");
  var mina = document.getElementsByClassName("mina");

  if(this.className == "empty"){
    console.log("holi");
  }

}
