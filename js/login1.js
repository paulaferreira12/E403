const email = document.getElementById('email');
const password = document.getElementById('password');
const botaoLogin = document.getElementById('loginbtn');

//teste


botaoLogin.addEventListener('click', (event) =>{
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('visitantes'));
    const filtro = users.filter(post => post.email == email.value);
    console.log(filtro)
    if(filtro.lenght !== 0){
        if(password.value === filtro[0].password){
            localStorage.setItem("userLogado", JSON.stringify(filtro[0]));
            window.location.href = 'marcacaodata.html';
        }else{
            alert('Senha Invalida');
        }
    }else{
        alert("Email não existe");
    }
})



  
    const urlParams = new URLSearchParams(window.location.search);
    let cidade = urlParams.get("cidade");
    let tipoTour = urlParams.get("tipoTour")

    window.location.href = "marcacaodata.html?cidade=" + cidade + "&tipoTour=" + tipoTour.nome;

    alert("tuk1h"); // Você pode remover essa linha se quiser



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


