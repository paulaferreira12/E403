let avaliacoesLista = JSON.parse(localStorage.getItem("avaliacoes"));

avaliacoesLista.forEach(avaliacao => {
    let html = `<div class="owl-item testimonial-carousel"
    
    <div class="text-center pb-4">
        <img class="img-fluid mx-auto" src="${avaliacao.imagem1}" style="width: 100px; height: 100px;" >
        <div class="testimonial-text bg-white p-4 mt-n5">
            <p class="mt-5">"${avaliacao.descricao}"
            </p>
            <h5 class="text-truncate">${avaliacao.nome}</h5>
            <span>${avaliacao.profissao}</span>
        </div>
    </div>
    </div>
    `;

    document.getElementById("listaAvaliacoes").innerHTML += html;
});


/*function criarDepoimentoElement(avaliacao) {
    const depoimentoElement = document.createElement('div');
    depoimentoElement.classList.add('owl-item');

    const conteudoDepoimento = `
        <div class="text-center pb-4">
            <img class="img-fluid mx-auto" src="${avaliacao.imagem1}" style="width: 100px; height: 100px;">
            <div class="testimonial-text bg-white p-4 mt-n5">
                <p class="mt-5">${avaliacao.descricao}</p>
                <h5 class="text-truncate">${avaliacao.nome}</h5>
                <span>${avaliacao.profissao}</span>
            </div>
        </div>
    `;

    depoimentoElement.innerHTML = conteudoDepoimento;
    return depoimentoElement;
}

// Selecionar o elemento do carrossel
const carrosselElement = document.getElementById('listaAvaliacoes');

// Adicionar cada depoimento ao carrossel
avaliacoes.forEach(avaliacao => {
    const depoimentoElement = criarDepoimentoElement(avaliacao);
    carrosselElement.appendChild(depoimentoElement);
});*/
/*
// Atribuir eventos de clique aos elementos <a> existentes
avaliacoesLista.forEach(cidade => {
  let cidadeLink = document.querySelector(`.cidade-${cidade.nome}`);
  
  cidadeLink.addEventListener("click", function(event) {
    event.preventDefault();

    window.location.href = 'cidades.html?cidade=' + cidade.nome;
    // Ou você pode redirecionar para uma página diferente com base na cidade clicada
    // window.location.href = `pagina-cidade.html?cidade=${cidade.nome}`;
  });
});*/