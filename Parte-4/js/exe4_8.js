function imprimir() {
  var inNome = document.getElementById("inNome");
  var inNumero = document.getElementById("inNumero");
  var outResposta = document.getElementById("outResposta");

  var fruta = inNome.value;
  var num = Number(inNumero.value);

  if (fruta == "" || num == 0 || isNaN(num)) {
    alert("Informe corretamente os dados");
    inNome.focus();
    return;
  }

  var resposta = "";

  for (var i = 1; i < num; i++) {
    resposta = resposta + fruta + " * ";
  }
  resposta = resposta + fruta;
  outResposta.textContent = resposta;
}
var btRepetir = document.getElementById("btRepetir");
btRepetir.addEventListener("click", imprimir);