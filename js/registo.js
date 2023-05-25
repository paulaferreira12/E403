let visitante = JSON.parse(localStorage.getItem("visitantes")) || [];

function registar(event){

    event.preventDefault();
   
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let contacto = document.getElementById('contacto').value;
    let password = document.getElementById('password').value;
    let pais = document.getElementById('pais').value;
    let profissao = document.getElementById('profissao').value;
    /*let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;*/
    let emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if(!emailValido){
        alert('Por favor, introduza um email válido');
        return;
    }

    if(!nome){
        alert('Por favor, preencha o campo de nome');
        return;
    }

    // Verificar se o utilizador já existe
    if(visitante.some(v => v.email === email)){
        alert('Já se registou um visitante com esse email');
        return;
    }

      

    if (password.length < 6 || !/\d/.test(password)) {
        alert("A senha deve ter pelo menos 6 caracteres e conter pelo menos 1 número.");
        return;
      }
      

    

    let novo = { "nome": nome, "email": email, "contacto": contacto, "password": password, "pais": pais, "profissao": profissao}
    visitante.push(novo); 
    localStorage.setItem("visitantes", JSON.stringify(visitante));
    alert('A sua conta foi criada');
    window.location.href = "login.html";
}
console.log(document.getElementById("registar"))


// Registar evento de clique no botão de registo 
document.getElementById("registar").addEventListener("click", registar);