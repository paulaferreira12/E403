let tour1 = {
    id: "t1",
    idCidade: "PORTO",
    idGuia: "g1",
    tipo: "tuctuc",
    descricao: "aaaaaaaa",
    duracao: "3",
    preco: "90",
}

let tour2 = {
    id: "t2",
    idCidade: "LISBOA",
    idGuia: "g2",
    tipo: "pe",
    descricao: "aaaaaaaa",
    duracao: "2",
    preco: "80",
}


//funçao que tem no fim de todos os js da bd
export function tours() {
    if (!localStorage.getItem("tours")) {
        let tours = Array();
        promocoes.push(tour1)
        localStorage.setItem("tours", JSON.stringify(tours));
        console.log("ola");
    }
}
