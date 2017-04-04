var celdas = document.getElementsByTagName("td");
var reiniciaJuego = document.getElementById("reiniciaJuego");

for (var i = 0; i < celdas.length; i++){
  celdas[i].addEventListener("click", verificaCeldas);
}

reiniciaJuego.addEventListener("click", restart);


function verificaCeldas(){
  if(this.className === "empty"){
    this.style.backgroundColor = "#cccccc"
  }
  else if (this.className === "mina"){
    this.style.backgroundColor = "#dd6666"
    this.innerText = "b";
    alert("Esto ha explotado");
    for (var i = 0; i < celdas.length; i++){
      celdas[i].removeEventListener("click", verificaCeldas);
    }
  }
  else if (this.className === "num") {
    this.style.backgroundColor = "#cccccc"
    this.innerText = this.getAttribute("data-num");
  }
}

function restart(){
  location.reload();
}
