let abrir_imagenes = document.querySelectorAll(".boton");
let verMenos = document.querySelector(".boton_ver_menos");
let verMas = document.querySelector(".boton_ver_mas");
let imagenes = document.querySelectorAll(".img_desaparecer");
estado = false;

for (let s = 0; s < abrir_imagenes.length; s++) {
  abrir_imagenes[s].addEventListener("click", function () {
    for (let i = 0; i < imagenes.length; i++) {
      imagenes[i].classList.toggle("efecto_img_desaparecer");
    }
    if (estado == false) {
      verMenos.style.display = "block";
      verMas.style.display = "none";
      estado = true;
    } else {
      verMenos.style.display = "none";
      verMas.style.display = "block";
      estado = false;
    }
  });
}

window.addEventListener("scroll", function () {
  let imagen = document.querySelector(".aside_img");
  const distancia = window.innerHeight - imagen.getBoundingClientRect().top;
  if (distancia >= 120) {
    imagen.classList.add("fecto_aside_img");
  }
});

let abrirMenuMovil = document.querySelector(".barra_movil");
let links = document.querySelector(".hero_nav");
let iconAbrir = document.querySelector(".abrir");
let iconCerrar = document.querySelector(".cerrar");
let estadoMovil = "close";

abrirMenuMovil.addEventListener("click", function () {
  if (estadoMovil == "close") {
    links.classList.toggle("efecto_nav_movil");
  }
});
