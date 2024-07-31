const Platos=[
    {
        imagen:"/img/Platos2/EXTRAS/PIQUE_MACHO.png",
        titulo: "PIQUE MACHO",
        guar: "Papa frita",
        precio: "25"
    },
    {
        imagen: "/img/Platos2/EXTRAS/MEDIO_LOMO.png",
        titulo: "MEDIO LOMO",
        guar: "Ensalada Papa Arroz",
        precio: "16"
    },
    {
        imagen: "/img/Platos2/EXTRAS/MILANESA_CARNE.png",
        titulo: "MILANESA DE CARNE",
        guar: "Ensalada Papa Arroz",
        precio: "18"
    },
    {
        imagen: "/img/Platos2/EXTRAS/MILANESA_POLLO.png",
        titulo: "MILANESA DE POLLO",
        guar: "Ensalada Papa Arroz",
        precio: "18"
    },
    {
        imagen: "/img/Platos2/EXTRAS/POLLO_DORADO.png",
        titulo: "POLLO DORADO",
        guar: "Ensalada Papa Arroz",
        precio: "15"
    },
    {
        imagen: "/img/Platos2/EXTRAS/ASADO_ESPECIAL.png",
        titulo: "ASADO ESPECIAL",
        guar: "Chorrellana Papa Arroz",
        precio: "18"
    },
    {
        imagen: "/img/Platos2/EXTRAS/SILPANCHO_COCHABAMBINO.png",
        titulo: "SILPANCHO COCHABAMBINO",
        guar: "Sarsa Papa Arroz",
        precio: "18"
    },
    {
        imagen: "/img/Platos2/EXTRAS/CALDO_POLLO.png",
        titulo: "CALDO DE POLLO",
        guar: "Chuño Papa Arroz",
        precio: "13"
    },
    {
        imagen: "/img/Platos2/EXTRAS/REVUELTO_CARNE.png",
        titulo: "REVUELTO DE CARNE",
        guar: "Arroz",
        precio: "18"
    },
    {
        imagen: "/img/Platos2/EXTRAS/REVUELTO_POLLO.png",
        titulo: "REVUELTO DE POLLO",
        guar: "Arroz",
        precio: "18"
    },
    {
        imagen: "/img/Platos2/EXTRAS/POLLO_PLANCHA.png",
        titulo: "POLLO A LA PLANCHA",
        guar: "Arroz, Papa frita",
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
        precio: "5"
    },
    {
        imagen: "/img/Platos2/Sandiwch_lomiito.png",
        titulo: "Sandwich de Lomito",
        precio: "10"
    },
    {
        imagen: "/img/Platos2/Sandwich_Salchicha.png",
        titulo: "Sandwich de Salchicha",
        precio: "5"
    },
    {
        imagen: "/img/Platos2/Sandwich_Queso.png",
        titulo: "Sandwich de Queso",
        precio: "5"
    },
    {
        imagen: "/img/Platos2/Salchipapa.png",
        titulo: "Salchipapa",
        precio: "10"
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
        imagen:"/img/Platos2/EXTRAS/CHICHARRON_POLLO.png",
        titulo:"CHICHARRON DE POLLO",
        guar: "Chuño Papa Mote",
        precio:"17"
    },
    {
        imagen:"/img/Platos2/EXTRAS/CHICHARRON_CERDO.png",
        titulo:"CHICHARRON DE CHANCHO",
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
        precio: "15"
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
        <h2 class="orange">${card.precio} .Bs</h2>
    </li>
    ` ).join(" ");

const SandwichLista = Sandwich.map(card =>`
    <li>
        <img src=${card.imagen} alt="">
        <h2>${card.titulo}</h2>
        <h2 class="orange">${card.precio} .Bs</h2>
    </li>
    ` ).join(" ");

const OmelettesLista = Omelettes.map(card =>`
    <li>
        <img src=${card.imagen} alt="">
        <h2>${card.titulo}</h2>
        <h2 class="orange">${card.precio} .Bs</h2>
    </li>
    ` ).join(" ");

const EspecialLista = Especial.map(card =>`
    <li>
        <img src=${card.imagen} alt="">
        <h2>${card.titulo}</h2>
        <h2>${card.guar}</h2>
        <h2 class="orange">${card.precio} .Bs</h2>
    </li>
    ` ).join(" ");

const JugosLista = Jugos.map(card =>`
    <li>
        <img src=${card.imagen} alt="">
        <h2>${card.titulo}</h2>
        <h2 class="orange">${card.precio} .Bs</h2>
    </li>
    ` ).join(" ");

const TesLista = Tes.map(card =>`
    <li>
        <img src=${card.imagen} alt="">
        <h2>${card.titulo}</h2>
        <h2 class="orange">${card.precio} .Bs</h2>
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


const btnlist = document.querySelectorAll('.btnColor');
btnlist.forEach(btnEl =>{
    btnEl.addEventListener('click', ()=>{
        document.querySelector('.activebtn')?.classList.remove('activebtn');
        btnEl.classList.add('activebtn');
    });
});