// Cargar videos dinámicamente
document.addEventListener('DOMContentLoaded', function() {
    const galeria = document.querySelector('.galeria');
    // Aquí se agregará el código para cargar los videos
});

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


