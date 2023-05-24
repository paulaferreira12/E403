const nome = document.getElementById('nome');
const userLg = JSON.parse(localStorage.getItem('userLogado'));

nome.innerHTML = userLg.nome;
