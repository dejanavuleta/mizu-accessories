function promeniFont() {

    document.body.classList.toggle("uvecan-font");

    if(document.body.classList.contains("uvecan-font")){

        localStorage.setItem("uvecanFont","da");

    } else {

        localStorage.setItem("uvecanFont","ne");
    }
}

function otvoriOverlay() {
    const overlay = document.querySelector(".overlay");
    overlay.classList.toggle("active");
}

function promeniTemu() {

    const tema = document.getElementById("tema-stil");
    const ikonica = document.getElementById("tema-ikonica");


    if (tema.getAttribute("href") === "stil.css") {

        tema.setAttribute("href", "tamna.css");

        ikonica.src = "slike/dan.png";

        localStorage.setItem("tema", "tamna");

    } else {

        tema.setAttribute("href", "stil.css");

        ikonica.src = "slike/noc.png";

        localStorage.setItem("tema", "svetla");
    }
}

window.onload = function () {

    const sacuvanaTema = localStorage.getItem("tema");

    const ikonica = document.getElementById("tema-ikonica");

    if (sacuvanaTema === "tamna") {

        document.getElementById("tema-stil")
        .setAttribute("href", "tamna.css");

        ikonica.src = "slike/dan.png";

    } else {

        ikonica.src = "slike/noc.png";

    }

    if(localStorage.getItem("uvecanFont") === "da"){

        document.body.classList.add("uvecan-font");
    }
}

const SlikeProizvoda = [
    [
        "slike/kapa1.jpg",
        "slike/kapa1 drugi stil.jpg"
    ],
    [
        "slike/kapa2.jpg"
    ],
    [
        "slike/kapa3.jpg"
    ]
];

const cards = document.querySelectorAll(".kartica-proizvoda");

cards.forEach((card, index) => {
    let currentIndex = 0;

    const img = card.querySelector(".slide");
    const sledeci = card.querySelector(".sledeci");
    const prethodni = card.querySelector(".prethodni");

    img.src = SlikeProizvoda[index][currentIndex];

    sledeci.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % SlikeProizvoda[index].length;
        img.src = SlikeProizvoda[index][currentIndex];
    });

    prethodni.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + SlikeProizvoda[index].length) % SlikeProizvoda[index].length;
        img.src = SlikeProizvoda[index][currentIndex];
    });
});

function otvoriProizvod(id) {
    window.location.href = "product.html?id=" + id;
}

/*proizvod stranica*/
if(window.location.pathname.includes("product.html")){

    const sviproizvodi = [
           {
    id: 1,
    name: "MIZU Hirurška kapa",
    price: "700 RSD",
    description: "Moderna hirurška kapa sa zanimljivim dizajnom",
    images: [
        "slike/kapa1.jpg",
        "slike/kapa1 drugi stil.jpg"
    ]
},
{
    id: 2,
    name: "MIZU Hirurška kapa",
    price: "700 RSD",
    description: "Moderna hirurška kapa sa zanimljivim dizajnom",
    images: [
        "slike/kapa2.jpg"
    ]
},
{
    id: 3,
    name: "MIZU Hirurška kapa",
    price: "700 RSD",
    description: "Moderna hirurška kapa sa zanimljivim dizajnom",
    images: [
        "slike/kapa3.jpg"
    ]
}
    ];

    const params = new URLSearchParams(window.location.search);

    const productId = parseInt(params.get("id"));

    const product = sviproizvodi.find(p => p.id === productId);

    document.getElementById("proizvod-ime").textContent = product.name;
        document.getElementById("proizvod-cena").textContent = product.price;

    document.getElementById("proizvod-opis").textContent = product.description;



    let currentImage = 0;

    const image = document.getElementById("proizvod-slika");

    image.src = product.images[currentImage];



    document.querySelector(".right").addEventListener("click", () => {

        currentImage =
        (currentImage + 1) % product.images.length;

        image.src = product.images[currentImage];
    });



    document.querySelector(".levo").addEventListener("click", () => {

        currentImage =
        (currentImage - 1 + product.images.length)
        % product.images.length;

        image.src = product.images[currentImage];
    });

}

function otvoriMeni(){

    const meni =
    document.getElementById("mobilniMeni");

    meni.classList.toggle("prikazi");

}