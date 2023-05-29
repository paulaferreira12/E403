const userLg = JSON.parse(localStorage.getItem('userLogado'));

const nome = document.getElementById('nome');
nome.innerHTML = userLg.nome;

const email = document.getElementById('email');
console.log(email)
email.innerHTML = userLg.email;

const contacto = document.getElementById('contacto');
contacto.innerHTML = userLg.contacto;

const pais = document.getElementById('pais');
pais.innerHTML = userLg.pais;

const profissao = document.getElementById('profissao');
profissao.innerHTML = userLg.profissao;

const logout = document.getElementById('logout');
logout.addEventListener('click', ()=> {
    localStorage.removeItem('userLogado');
    window.location.href = 'index.html';
})


let avaliacao = JSON.parse(localStorage.getItem("avaliacoes")) || [];

function inserirAv(event){

    event.preventDefault();
   
    let av = document.getElementById('avaliacao').value;

    

    let novaAv = { "nome": nome, "email": email, "contacto": contacto, "password": password, "pais": pais, "profissao": profissao}
    avaliacao.push(novaAv); 
    localStorage.setItem("avaliacoes", JSON.stringify(avaliacao));
    alert('A sua avaliação foi registada');
    
}


// Registar evento de clique no botão de registo 
document.getElementById("enviarAv").addEventListener("click", inserirAv);