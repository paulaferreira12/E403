/*let avaliacoesLista = JSON.parse(localStorage.getItem("avaliacoes"));


avaliacoesLista.forEach(avaliacao => {
    let html = `
    <div class="container">
  <div class="row">
    <div class="col-md-4">
      <div class="text-center pb-4">
        <img class="img-fluid mx-auto" src="${avaliacao.imagem1}" style="width: 100px; height: 100px;">
        <div class="testimonial-text bg-white p-4 mt-n5">
          <p class="mt-5">${avaliacao.descricao}</p>
          <h5 class="text-truncate">${avaliacao.nome}</h5>
          <span>${avaliacao.profissao}</span>
        </div>
      </div>
    </div>
  </div>
</div>
    
    `;

    document.getElementById("listaAvaliacoes").innerHTML += html;
});*/
let avaliacoesLista = JSON.parse(localStorage.getItem("avaliacoes"));

avaliacoesLista.forEach(avaliacao => {
  let html = `
    <div class="col-md-4">
      <div class="text-center pb-4">
        <img class="img-fluid mx-auto" src="${avaliacao.imagem1}" style="width: 100px; height: 100px;">
        <div class="testimonial-text bg-white p-4 mt-n5">
          <p class="mt-5">${avaliacao.descricao}</p>
          <h5 class="text-truncate">${avaliacao.nome}</h5>
          <span>${avaliacao.profissao}</span>
        </div>
      </div>
    </div>
  `;

  document.querySelector("#listaAvaliacoes .row").innerHTML += html;
});




/*<div class="text-center pb-4">
        <img class="img-fluid mx-auto" src="${avaliacao.imagem1}" style="width: 100px; height: 100px;" >
        <div class="testimonial-text bg-white p-4 mt-n5">
            <p class="mt-5">"${avaliacao.descricao}"
            </p>
            <h5 class="text-truncate">${avaliacao.nome}</h5>
            <span>${avaliacao.profissao}</span>
        </div>
    </div> */

/*<div class="col-md-4 mb-4"> 
    <div class="destination-item position-relative overflow-hidden mb-2"> 
        <img class="img-fluid" src="${cidade.imagem1}" alt=""> 
        <a class="destination-overlay text-white text-decoration-none cidade-${cidade.nome}">
        <h3 class="text-white">${cidade.nome}</h4>
        </a>
    </div>
</div>*/






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