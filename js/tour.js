
let tuk1hBotao = document.getElementById("tuk1h")
tuk1hBotao.addEventListener("click", function(event) {
  alert("ola")
  
    const urlParams = new URLSearchParams(window.location.search);
    let cidade = urlParams.get("cidade");

    window.location.href = "marcacaodata.html?cidade=" + cidade + "&tipoTour=tuk1h";

    alert("tuk1h"); // Você pode remover essa linha se quiser

});

let tuk2hBotao = document.getElementById("tuk2h")
tuk2hBotao.addEventListener("click", function(event) {
  
    const urlParams = new URLSearchParams(window.location.search);
    let cidade = urlParams.get("cidade");

    window.location.href = "marcacaodata.html?cidade=" + cidade + "&tipoTour=tuk2h";

});

let tuk3hBotao = document.getElementById("tuk3h")
tuk3hBotao.addEventListener("click", function(event) {
  
    const urlParams = new URLSearchParams(window.location.search);
    let cidade = urlParams.get("cidade");

    window.location.href = "marcacaodata.html?cidade=" + cidade + "&tipoTour=tuk3h";

});

let pe1hBotao = document.getElementById("pe1h")
pe1hBotao.addEventListener("click", function(event) {
  
    const urlParams = new URLSearchParams(window.location.search);
    let cidade = urlParams.get("cidade");

    window.location.href = "marcacaodata.html?cidade=" + cidade + "&tipoTour=pe1h";

});

let pe2hBotao = document.getElementById("pe2h")
pe2hBotao.addEventListener("click", function(event) {
  
    const urlParams = new URLSearchParams(window.location.search);
    let cidade = urlParams.get("cidade");

    window.location.href = "marcacaodata.html?cidade=" + cidade + "&tipoTour=pe2h";

});

let pe3hBotao = document.getElementById("pe3h")
pe3hBotao.addEventListener("click", function(event) {
  
    const urlParams = new URLSearchParams(window.location.search);
    let cidade = urlParams.get("cidade");

    window.location.href = "marcacaodata.html?cidade=" + cidade + "&tipoTour=pe3h";

});

