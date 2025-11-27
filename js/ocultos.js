const productos = document.querySelectorAll(".sectionPrincipal a");
const btn = document.getElementById("verMasBtn");

let visibles = 8;
const step = 4;


productos.forEach((p, i) => {
    if (i >= visibles) p.style.display = "none";
});

btn.addEventListener("click", () => {
    visibles += step;

    productos.forEach((p, i) => {
    if (i < visibles) p.style.display = "";
    });

    if (visibles >= productos.length) {
    btn.style.display = "none";
    }
});
