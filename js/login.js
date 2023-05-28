const email = document.getElementById('email');
const password = document.getElementById('password');

const botaoLogin = document.getElementById('loginbtn');

//teste


botaoLogin.addEventListener('click', (event) =>{
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem('visitantes'));
    const filtro = users.filter(post => post.email === email.value);
    console.log(filtro)
    console.log(users)
    console.log(email)
    console.log(password)
    if(filtro.lenght !== 0){
        if(password.value === filtro[0].password){
            localStorage.setItem("userLogado", JSON.stringify(filtro[0]));
            window.location.href = 'perfil.html';
        }else{
            alert('Senha Invalida');
        }
    }else{
        alert("Email não existe");
    }
})

