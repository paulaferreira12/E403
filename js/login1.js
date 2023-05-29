const email = document.getElementById('email');
const password = document.getElementById('password');
const botaoLogin = document.getElementById('loginbtn');

//teste


botaoLogin.addEventListener('click', (event) =>{
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('visitantes'));
    const filtro = users.filter(post => post.email == email.value);
    const urlParams = new URLSearchParams(window.location.search);
    let cidade = urlParams.get("cidade");
    let tipoTour = urlParams.get("tipoTour");
    console.log(tipoTour)
    
    if(filtro.lenght !== 0){
        if(password.value === filtro[0].password){
            localStorage.setItem("userLogado", JSON.stringify(filtro[0]));
            window.location.href = 'marcacaodata.html?cidade=' + cidade + "&tipoTour=" + tipoTour;
        }else{
            alert('Senha Invalida');
        }
    }else{
        alert("Email não existe");
    }
})


