function calcular_itbis(precio) {
    var itbis = 0.18;
    var precio = prompt("ingrese el precio total de su factura");
    var precio_itbis = (precio * itbis);
    alert(precio_itbis)
}

var padre = document.getElementById("padre");

var hijo = document.getElementById("hijo");
var hijo2 = document.getElementById("hijo2");

//padre.removeChild(hijo);
//padre.removeChild(hijodos);

const boton = document.querySelector('#miBoton');

boton.addEventListener('click', () => {
    alert('¡Has hecho clic en el botón!');
});

const nav = document.querySelector('.nav')
window.addEventListener('scroll', function() {
    nav.classList.toggle('active', windoe.scrollY > 0)
})