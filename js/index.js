let cidadesLista = JSON.parse(localStorage.getItem("cidades"));

cidadesLista.forEach(cidade => {
  let html = `<div class="col-md-4 mb-4"> 
    <div class="destination-item position-relative overflow-hidden mb-2"> 
    <img class="img-fluid" src="${cidade.imagem1}" alt=""> 
    <a class="destination-overlay text-white text-decoration-none cidade-${cidade.nome}">
    <h3 class="text-white">${cidade.nome}</h4>
    </a>
    </div>
    </div>`;

  document.getElementById("listaCidades").innerHTML += html;
});