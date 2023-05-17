let guia1 = {
    id: "g1",
    nome: "Rui Coelho",
    cidade: "porto",
    descricao: "aaaaaaaa",
    imagem1: "img/porto.jpg",
}

let guia2 = {
    id: "g2",
    nome: "Joaquim Fernandes",
    cidade: "lisboa",
    descricao: "aaaaaaaa",
    imagem1: "img/lisboa.jpg",
}


//funçao que tem no fim de todos os js da bd
export function guias() {
    if (!localStorage.getItem("guias")) {
        let guias = Array();
        promocoes.push(guia1)
        localStorage.setItem("guias", JSON.stringify(guias));
        console.log("ola");
    }
}
