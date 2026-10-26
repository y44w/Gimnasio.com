document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Quitar clase activa de todos los enlaces
            navLinks.forEach(l => l.classList.remove('active'));
            // Agregar clase activa al seleccionado
            link.classList.add('active');

            // Ocultar todas las secciones
            sections.forEach(sec => sec.style.display = 'none');

            // Mostrar la sección correspondiente
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
});

// Función interactiva simple para los botones de acción
function mostrarAlerta(tipo) {
    if (tipo === 'Interiores') {
        alert('¡Gracias por tu interés en Diseño de Interiores! Un asesor te contactará pronto.');
    } else if (tipo === 'Gimnasio') {
        alert('¡Bienvenido al Gimnasio! Te hemos redirigido al formulario de registro.');
    }
}
