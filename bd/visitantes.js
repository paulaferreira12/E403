let visitantes = [{
    id: "0",
    nome: "João Coelho",
    email: "aa@email.com",
    contacto: "911911911",
    password: "a",
    pais: "portugal",
    profissao: "calceteiro",
},
{
    id: "1",
    nome: "João Fernandes",
    email: "bb@email.com",
    contacto: "921911911",
    password: "a",
    pais: "portugal",
    profissao: "aaaaaa"
}]
localStorage.setItem("visitantes", JSON.stringify(visitantes));
//funçao que tem no fim de todos os js da bd
