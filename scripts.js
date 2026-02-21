// 1. Selector por ID (getElementById)
const miBoton = document.getElementById('boton-alerta');
miBoton.onclick = function() {
    alert("¡Acción 1: Botón presionado por Gerson!");
};

// 2. Selector por Clase (querySelector)
const elTexto = document.querySelector('.texto-cambiante');
elTexto.onmouseover = () => {
    elTexto.style.color = 'blue';
};

// 3. Selector de Atributo (querySelector)
const laEntrada = document.querySelector('#campo-texto');
laEntrada.oninput = (evento) => {
    console.log("Gerson está escribiendo: " + evento.target.value);
};

// 4. Selector por ID para el DIV
const laCaja = document.getElementById('caja-color');
laCaja.onclick = () => {
    laCaja.style.backgroundColor = 'yellow';
};

// 5. Selector de Imagen
const laImagen = document.getElementById('foto-perfil');
laImagen.ondblclick = () => {
    laImagen.style.width = '200px';
};

// 6, 7 y 8. Selector Múltiple (querySelectorAll)
const todosLosItems = document.querySelectorAll('.item-lista');
todosLosItems.forEach((item, posicion) => {
    item.onclick = () => {
        item.style.color = 'green';
        item.innerHTML = "Seleccionaste el item " + (posicion + 6);
    };
});