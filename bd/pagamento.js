let pagamento1 = {
    id: "p1",
    idVisitante: "v1",
    idTour: "t1",
    valor: "90",
    data: "10/03/2023",
}

let pagamento2 = {
    id: "p2",
    idVisitante: "v2",
    idTour: "t2",
    valor: "80",
    data: "05/03/2023",
}


//funçao que tem no fim de todos os js da bd
export function pagamentos() {
    if (!localStorage.getItem("pagamentos")) {
        let pagamentos = Array();
        promocoes.push(pagamento1)
        localStorage.setItem("pagamentos", JSON.stringify(pagamentos));
        console.log("ola");
    }
}
