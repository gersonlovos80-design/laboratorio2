# laboratorio2
# Proyecto de Interacción Dinámica - Cómputo 1

**Nombre:** Gerson Azael Chica Lovos
**Materia:** Programación Computacional IV

## 1. Descripción del Proyecto
Este proyecto demuestra el uso de JavaScript para manipular el DOM (Document Object Model). La página permite interactuar con diversos elementos mediante eventos de clic, doble clic, paso del mouse y teclado, cambiando estilos y contenido en tiempo real.

## 2. Tabla de Elementos e Interacciones
A continuación se detallan los selectores utilizados y la acción que realiza cada uno:

| Tipo de Selector | Elemento Afectado | Descripción de la Tarea |
| :--- | :--- | :--- |
| `getElementById` | Botón (`#boton-alerta`) | Muestra una alerta con un mensaje al hacer clic. |
| `querySelector` | Párrafo (`.texto-cambiante`) | Cambia el color del texto al entrar y salir el mouse. |
| `querySelector` | Input (`#campo-texto`) | Captura el texto escrito y lo muestra en la consola. |
| `getElementById` | Imagen (`#foto-perfil`) | Aplica un borde y aumenta el tamaño con doble clic. |
| `getElementById` | Div (`#caja-color`) | Cambia el color de fondo y el texto al hacer clic. |
| `querySelectorAll` | Items de Lista (`.item-lista`) | Cambia el color y texto de múltiples elementos. |

## 3. Preguntas de Reflexión

### a) ¿Cuál es la ventaja de utilizar getElementById en lugar de querySelector?
La ventaja principal es el **rendimiento**. `getElementById` es un método más rápido y directo porque el navegador busca específicamente un ID único, mientras que `querySelector` tiene que procesar la sintaxis de selectores CSS (puntos para clases, almohadillas para IDs, etc.), lo cual consume un poco más de recursos.

### b) ¿En qué situaciones es más adecuado utilizar querySelectorAll en lugar de querySelector?
Es adecuado cuando necesitamos aplicar una misma acción a **varios elementos simultáneamente** que comparten la misma clase o etiqueta (como una lista de tareas o una galería de imágenes). `querySelector` solo devuelve el primer elemento que encuentra, mientras que `querySelectorAll` nos permite trabajar con todos.

### Explique qué tipo de dato devuelve cada uno.
- `getElementById` y `querySelector` devuelven un **Objeto de Elemento (Element)**, que representa un solo nodo del HTML.
- `querySelectorAll` devuelve una **NodeList**, que es una colección o lista de nodos que podemos recorrer (como un array).

