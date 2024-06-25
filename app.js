const Platos=[
    {
        imagen:"/img/Platos2/Medio_pique.png",
        titulo: "Pique Macho",
        guar: "Papa frita",
        precio: "25"
    },
    {
        imagen: "/img/Platos2/medio_lomo.png",
        titulo: "Medio Lomo",
        guar: "Ensalada Papa Arroz",
        precio: "15"
    },
    {
        imagen: "/img/Platos2/milanesa_carne.png",
        titulo: "Milanesa de Carne",
        guar: "Ensalada Papa Arroz",
        precio: "17"
    },
    {
        imagen: "/img/Platos2/Milanesa_pollo.png",
        titulo: "Milanesa de Pollo",
        guar: "Ensalada Papa Arroz",
        precio: "18"
    },
    {
        imagen: "/img/Platos2/pollo_dorado.png",
        titulo: "Pollo Dorado",
        guar: "Ensalada Papa Arroz",
        precio: "15"
    },
    {
        imagen: "/img/Platos2/Asado_especial.png",
        titulo: "Asado Especial",
        guar: "Chorrellana Papa Arroz",
        precio: "17"
    },
    {
        imagen: "/img/Platos2/silpancho_cochabambino.png",
        titulo: "Silpancho Cochabambino",
        guar: "Sarsa Papa Arroz",
        precio: "18"
    },
    {
        imagen: "/img/Platos2/Caldo_de_pollo.png",
        titulo: "Caldo de Pollo",
        guar: "Chuño Papa Arroz",
        precio: "13"
    },
    {
        imagen: "/img/Platos2/Revuelto_carne.png",
        titulo: "Revuelto de Carne",
        guar: "Arroz",
        precio: "18"
    },
    {
        imagen: "/img/Platos2/Revuelto_Pollo.png",
        titulo: "Revuelto de Pollo",
        guar: "Arroz",
        precio: "18"
    }
];

const Sandwich = [
    {
        imagen: "/img/Platos2/Sandwich_Carne.png",
        titulo: "Sandwich de Carne",
        precio: "7"
    },
    {
        imagen: "/img/Platos2/Sandwich_Pollo.png",
        titulo: "Sandwich de Pollo",
        precio: "8"
    },
    {
        imagen: "/img/Platos2/Sandwich_Huevo.png",
        titulo: "Sandwich de Huevo",
        precio: "4"
    },
    {
        imagen: "/img/Platos2/Sandiwch_lomiito.png",
        titulo: "Sandwich de Lomito",
        precio: "9"
    },
    {
        imagen: "/img/Platos2/Sandwich_Mortadela.png",
        titulo: "Sandwich de Mortadela",
        precio: "4"
    },
    {
        imagen: "/img/Platos2/Sandwich_Salchicha.png",
        titulo: "Sandwich de Salchicha",
        precio: "4"
    },
    {
        imagen: "/img/Platos2/Sandwich_Queso.png",
        titulo: "Sandwich de Queso",
        precio: "5"
    },
    {
        imagen: "/img/Platos2/Salchipapa.png",
        titulo: "Salchipapa",
        precio: "8"
    }
]

const Omelettes = [
    {
        imagen: "/img/Platos2/Omellete_queso.png",
        titulo: "Omellete de Queso",
        precio: "7"
    },
    {
        imagen: "/img/Platos2/Omellete_Verduras.png",
        titulo: "Omellete de Verdura",
        precio: "7"
    },
    {
        imagen: "/img/Platos2/omelette-Salchicha.png",
        titulo: "Omellete de Salchicha",
        precio: "7"
    }
]

const Especial = [
    {
        imagen:"/img/Platos2/Chicharron_pollo.png",
        titulo:"Chicharron de Pollo",
        guar: "Chuño Papa Mote",
        precio:"17"
    },
    {
        imagen:"/img/Platos2/Chicharron_chancho.png",
        titulo:"Chicharron de Chancho",
        guar: "Chuño Papa Mote",
        precio:"20"
    }
]

const Jugos =[
    {
        imagen:"/img/Platos2/jugo_platano.png",
        titulo: "Jugo de Plátano",
        precio: "5"
    },
    {
        imagen: "/img/Platos2/Jugo_Papaya.png",
        titulo: "Jugo de Papaya",
        precio: "5"
    },
    {
        imagen: "/img/Platos2/Jugo_Manzana.png",
        titulo: "Jugo de Manzana",
        precio: "6"
    },
    {
        imagen:"/img/Platos2/jugo_frutilla.png",
        titulo: "Jugo de Frutilla",
        precio: "6"
    },
    {
        imagen:"/img/Platos2/jugo_vitanimico.png",
        titulo: "Jugo Vitanímico",
        precio: "10"
    },
]

const Tes = [
    {
        imagen: "/img/Platos2/Te.png",
        titulo: "Té",
        precio: "3"
    },
    {
        imagen: "/img/Platos2/mates.png",
        titulo: "Mates",
        precio: "3"
    },
    {
        imagen: "/img/Platos2/Cafe.png",
        titulo: "Café",
        precio: "3"
    },
    {
        imagen: "/img/Platos2/Cafe_leche.png",
        titulo: "Café con Leche",
        precio: "5"
    },
    {
        imagen: "/img/Platos2/Toddy_leche.png",
        titulo: "Toddy con Leche",
        precio: "5"
    },
    {
        imagen: "/img/Platos2/leche.png",
        titulo: "Leche",
        precio: "5"
    },
    {
        imagen: "/img/Platos2/Toddy.png",
        titulo: "Toddy",
        precio: "3"
    }
];

const MenuLista = document.querySelector(".cajamenu");

const PlatosLista = Platos.map(card =>`
    <li>
        <img src=${card.imagen} alt="">
        <h2>${card.titulo}</h2>
        <h2>${card.guar}</h2>
        <h2>${card.precio} .Bs</h2>
    </li>
    ` ).join(" ");

const SandwichLista = Sandwich.map(card =>`
    <li>
        <img src=${card.imagen} alt="">
        <h2>${card.titulo}</h2>
        <h2>${card.precio} .Bs</h2>
    </li>
    ` ).join(" ");

const OmelettesLista = Omelettes.map(card =>`
    <li>
        <img src=${card.imagen} alt="">
        <h2>${card.titulo}</h2>
        <h2>${card.precio} .Bs</h2>
    </li>
    ` ).join(" ");

const EspecialLista = Especial.map(card =>`
    <li>
        <img src=${card.imagen} alt="">
        <h2>${card.titulo}</h2>
        <h2>${card.guar}</h2>
        <h2>${card.precio} .Bs</h2>
    </li>
    ` ).join(" ");

const JugosLista = Jugos.map(card =>`
    <li>
        <img src=${card.imagen} alt="">
        <h2>${card.titulo}</h2>
        <h2>${card.precio} .Bs</h2>
    </li>
    ` ).join(" ");

const TesLista = Tes.map(card =>`
    <li>
        <img src=${card.imagen} alt="">
        <h2>${card.titulo}</h2>
        <h2>${card.precio} .Bs</h2>
    </li>
    ` ).join(" ");


function showJugosTes(){
    MenuLista.innerHTML = '';
    MenuLista.innerHTML = JugosLista + TesLista;
}
function showPlatos(){
    MenuLista.innerHTML = '';
    MenuLista.innerHTML = PlatosLista;
}
function showEspecial(){
    MenuLista.innerHTML = '';
    MenuLista.innerHTML = EspecialLista;
}
function showSandwichOmellete(){
    MenuLista.innerHTML = '';
    MenuLista.innerHTML = SandwichLista + OmelettesLista;
}