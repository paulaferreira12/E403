let visitante1 = {
    id: "v1",
    nome: "João Coelho",
    pais: "portugal",
    email: "aa@email.com",
    contacto: "911911911",
    password: "a",
}

let visitante2 = {
    id: "v2",
    nome: "João Fernandes",
    pais: "portugal",
    email: "bb@email.com",
    contacto: "921911911",
    password: "a",
}

//funçao que tem no fim de todos os js da bd
export function visitantes() {
    if (!localStorage.getItem("visitantes")) {
        let visitantes = Array();
        promocoes.push(visitante1)
        localStorage.setItem("visitantes", JSON.stringify(visitantes));
        console.log("ola");
    }
}
