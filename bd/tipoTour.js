let tipoTour = [{
    "id": "0",
    "nome": "tuk1h",
    "tipo": "tuk-tuk",
    "duracao": "1h",
    "preco": "60",
},

{
    "id": "1",
    "nome": "tuk2h",
    "tipo": "tuk-tuk",
    "duracao": "2h",
    "preco": "90",
},

{
    "id": "2",
    "nome": "tuk3h",
    "tipo": "tuk-tuk",
    "duracao": "3h",
    "preco": "120",
},

{
    "id": "3",
    "nome": "pe1h",
    "tipo": "pe",
    "duracao": "1h",
    "preco": "40",

},

{

    "id": "4",
    "nome": "pe2h",
    "tipo": "pe",
    "duracao": "2h",
    "preco": "70",
},

{
    "id": "5",
    "nome": "pe3h",
    "tipo": "pe",
    "duracao": "3h",
    "preco": "100",
}]

localStorage.setItem("tour", JSON.stringify(tipoTour));
