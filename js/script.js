// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const chismeForm = document.getElementById('chismeForm');
    const chismeTexto = document.getElementById('chismeTexto');
    const chismesEnviados = document.getElementById('chismesEnviados');

    // Función para mostrar los chismes enviados
    function mostrarChisme(chisme) {
        const chismeDiv = document.createElement('div');
        chismeDiv.classList.add('chisme');
        chismeDiv.textContent = chisme;
        chismesEnviados.appendChild(chismeDiv);
    }

    // Evento para enviar un chisme
    chismeForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar que se envíe el formulario automáticamente

        const nuevoChisme = chismeTexto.value.trim();

        if (nuevoChisme !== '') {
            mostrarChisme(nuevoChisme);
            chismeTexto.value = ''; // Limpiar el campo de texto
        }
    });
});


¡Por supuesto! A continuación, te proporciono más funciones en el script para mejorar la funcionalidad del sitio web, como agregar validación y almacenamiento local de los chismes enviados.

index.html (Página de Inicio):

html
Copy code
<!-- ... Código HTML anterior ... -->

<main>
    <section id="reseñas">
        <!-- ... Código HTML de las reseñas de vecindarios ... -->
    </section>

    <section id="chismes">
        <h2>Envía tu chisme</h2>
        <form id="chismeForm">
            <textarea id="chismeTexto" placeholder="Escribe tu chisme aquí"></textarea>
            <button type="submit">Enviar</button>
        </form>
        <div id="chismesEnviados">
            <!-- Aquí se mostrarán los chismes enviados por los usuarios -->
        </div>
    </section>
</main>

<!-- ... Código HTML posterior ... -->
script.js (Script en JavaScript):

js
Copy code
// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const chismeForm = document.getElementById('chismeForm');
    const chismeTexto = document.getElementById('chismeTexto');
    const chismesEnviados = document.getElementById('chismesEnviados');

    // Función para mostrar los chismes enviados
    function mostrarChisme(chisme) {
        const chismeDiv = document.createElement('div');
        chismeDiv.classList.add('chisme');
        chismeDiv.textContent = chisme;
        chismesEnviados.appendChild(chismeDiv);
    }

    // Función para guardar los chismes en el almacenamiento local
    function guardarChismeEnLocalStorage(chisme) {
        let chismes = obtenerChismesDeLocalStorage();
        chismes.push(chisme);
        localStorage.setItem('chismes', JSON.stringify(chismes));
    }

    // Función para obtener los chismes del almacenamiento local
    function obtenerChismesDeLocalStorage() {
        let chismes;
        const chismesGuardados = localStorage.getItem('chismes');
        if (chismesGuardados === null) {
            chismes = [];
        } else {
            chismes = JSON.parse(chismesGuardados);
        }
        return chismes;
    }

    // Cargar los chismes almacenados en el almacenamiento local al cargar la página
    function cargarChismes() {
        const chismes = obtenerChismesDeLocalStorage();
        chismes.forEach((chisme) => {
            mostrarChisme(chisme);
        });
    }

    // Evento para enviar un chisme
    chismeForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar que se envíe el formulario automáticamente

        const nuevoChisme = chismeTexto.value.trim();

        if (nuevoChisme !== '') {
            mostrarChisme(nuevoChisme);
            guardarChismeEnLocalStorage(nuevoChisme);
            chismeTexto.value = ''; // Limpiar el campo de texto
        }
    });

    // Cargar los chismes almacenados en el almacenamiento local al cargar la página
    cargarChismes();
});