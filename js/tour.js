
let tuk1hBotao = document.getElementById("tuk1h")
tuk1hBotao.addEventListener("click", function(event) {
  alert("ola")
  
    const urlParams = new URLSearchParams(window.location.search);
    let cidade = urlParams.get("cidade");

    window.location.href = "marcacaodata.html?cidade=" + cidade + "&tipoTour=tuk1h";

    alert("tuk1h"); // Você pode remover essa linha se quiser

});

