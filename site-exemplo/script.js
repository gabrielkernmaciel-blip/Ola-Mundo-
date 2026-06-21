const texto = document.getElementById("texto")

setInterval(() => {
    texto.style.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
}, 200);