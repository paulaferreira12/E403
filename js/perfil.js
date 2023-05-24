const userLg = JSON.parse(localStorage.getItem('userLogado'));


const nome = document.getElementById('nome');
nome.innerHTML = userLg.nome;

const email = document.getElementById('email');
email.innerHTML = userLg.email;

const contacto = document.getElementById('contacto');
contacto.innerHTML = userLg.contacto;

const pais = document.getElementById('pais');
console.log(pais)
pais.innerHTML = userLg.pais;

const profissao = document.getElementById('profissao');
profissao.innerHTML = userLg.profissao;

const logout = document.getElementById('logout');
logout.addEventListener('click', ()=> {
    localStorage.removeItem('userLogado');
    window.location.href = 'index.html';
})
/*
 id: "v1",
    nome: "João Coelho",
    email: "aa@email.com",
    contacto: "911911911",
    password: "a",
    pais: "portugal",
    profissao: "calceteiro",
*/