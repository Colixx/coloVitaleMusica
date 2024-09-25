function showScreen(pantallaId) {
    // Ocultamos todas las pantallas
    var pantallas = document.querySelectorAll('div');
    pantallas.forEach(function(pantalla) {
        pantalla.style.display = 'none';
    });

    // Mostramos solo la pantalla seleccionada
    var pantalla = document.getElementById(pantallaId);
    pantalla.style.display = 'block';
}

function cerrarPantalla() {
    window.location.href = 'index.html'; // Redirige a index.html
}
