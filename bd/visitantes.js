let visitantes = [{
    id: "v1",
    nome: "João Coelho",
    email: "aa@email.com",
    contacto: "911911911",
    password: "a",
},
{
    id: "v2",
    nome: "João Fernandes",
    pais: "portugal",
    email: "bb@email.com",
    contacto: "921911911",
    password: "a",
}]
localStorage.setItem("visitantes", JSON.stringify(visitantes));
//funçao que tem no fim de todos os js da bd
