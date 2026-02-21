// --- 1. BOTÓN (ALERTA) ---
const miBoton = document.getElementById('boton-alerta');
miBoton.onclick = function() {
    alert("Saludos.");
};

// --- 2. PÁRRAFO (CAMBIA Y REGRESA) ---
const elTexto = document.querySelector('.texto-cambiante');
elTexto.onmouseover = () => elTexto.style.color = 'blue';
elTexto.onmouseout = () => elTexto.style.color = 'black'; // Esto hace que REGRESE

// --- 3. INPUT (VISUALIZAR EN CONSOLA) ---
const laEntrada = document.querySelector('#campo-texto');
laEntrada.oninput = (evento) => {
    // Para ver esto, debes tener abierta la CONSOLA (F12)
    console.log("Escribió: " + evento.target.value);
};

// --- 4. IMAGEN (DOBLE CLIC) ---
const laImagen = document.getElementById('foto-perfil');
laImagen.ondblclick = () => {
    laImagen.style.border = "5px solid red"; // Le pone un borde rojo
    laImagen.style.transform = "scale(1.2)"; // La hace un poquito más grande
};

// --- 5. CUADRO (CAMBIA COLOR Y TEXTO) ---
const laCaja = document.getElementById('caja-color');
laCaja.onclick = () => {
    laCaja.style.backgroundColor = 'yellow';
    laCaja.innerHTML = "<strong>¡Cambié!</strong>"; // Esto cambia el texto
};

// --- 6, 7 y 8. LISTA (USO DE TODOS) ---
const todosLosItems = document.querySelectorAll('.item-lista');
todosLosItems.forEach((item, posicion) => {
    item.onclick = () => {
        item.style.color = 'green';
        item.innerText = "Seleccionaste el #" + (posicion + 6);
    };
});


