let cidade1 = {
    id: "PORTO",
    nome: "porto",
    pais: "portugal",
    descricao: "aaaaaaaa",
    imagem1: "img/porto.jpg",
    imagem2: "img/porto2.jpg",
}

let cidade2 = {
    id: "LISBOA",
    nome: "lisboa",
    pais: "portugal",
    descricao: "aaaaaaaa",
    imagem1: "img/lisboa.jpg",
    imagem2: "img/lisboa2.jpg",
}


//funçao que tem no fim de todos os js da bd
export function cidades() {
    if (!localStorage.getItem("cidades")) {
        let cidades = Array();
        promocoes.push(cidade1)
        localStorage.setItem("cidades", JSON.stringify(cidades));
        console.log("ola");
    }
}
