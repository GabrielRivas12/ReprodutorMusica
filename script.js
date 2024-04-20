// Inicializar variables
// Inicializar variables
const audio = document.getElementById('audio');
const lista = document.getElementById('listaReproduccion');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const seleccionArchivoCancion = document.getElementById('seleccionArchivoCancion');




// Modificar el contenido de los botones con iconos de Font Awesome
// Modificar el contenido de los botones con iconos de Font Awesome
playBtn.innerHTML = '<i class="fas fa-play"></i>'; // Icono de reproducir
pauseBtn.innerHTML = '<i class="fas fa-pause"></i>'; // Icono de pausa


// Agregar eventos a los botones
playBtn.addEventListener('click', reproducir);
pauseBtn.addEventListener('click', pausar);


// Lista de canciones inicial (agregar más canciones aquí)
let canciones = [
    
   
    {
        titulo: "BELLAKEO - Peso Pluma, Anitta",
        src: "BELLAKEO Video Oficial Peso Pluma Anitta.mp3"
    },
    {
        titulo: "Peso Pluma Jasiel Nuñez Rosa Pastel",
        src: "Peso Pluma Jasiel Nuñez Rosa Pastel Video Oficial.mp3"
    },

    {
        titulo: "El El Belicon Peso Pluma Ella Baila Sola - Pesp Pluma",
        src: "El Belicon Peso Pluma Ella Baila Sola.mp3"
    },
    {
        titulo: "美波タイムグラム",
        src: "minami1.mp3.mp3"
    },
    {
        titulo: "Peso Pluma Grupo Frontera TULUM",
        src: "Peso Pluma Grupo Frontera TULUM Video Oficial.mp3"
    },

    {
        titulo: "NUEVA VIDA Lyric Video Peso Pluma",
        src: "NUEVA VIDA Lyric Video Peso Pluma.mp3"
    },

    {
        titulo: "LADY GAGA Video Oficial Peso Pluma Gabito Ballesteros Junior H.",
        src: "LADY GAGA Video Oficial Peso Pluma Gabito Ballesteros Junior H.mp3"
    },

    {
        titulo: "Kali Uchis Peso Pluma Igual Que Un Ángel",
        src: "Kali Uchis Peso Pluma Igual Que Un Ángel.mp3"
    },

   
    // Agregar más objetos con título y ruta de audio
];

// Cargar la primera canción en el reproductor
cargarCancion(0);

// Funciones para controlar la reproducción
function cargarCancion(indice) {
    audio.src = canciones[indice].src;
    audio.title = canciones[indice].titulo;
    mostrarLista();
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    
}

function reproducir() {
    if (audio.paused) {
        audio.play();
        playBtn.disabled = true;
        pauseBtn.disabled = false;
    } else {
        audio.pause();
        playBtn.disabled = false;
        pauseBtn.disabled = true;
    }
}

function pausar() {
    audio.pause();
    playBtn.disabled = false;
    pauseBtn.disabled = true;
    
}




// Mostrar la lista de canciones
function mostrarLista() {
    lista.innerHTML = ''; // Limpia la lista existente
  
    canciones.forEach((cancion, indice) => {
        const elemento = document.createElement('li'); // Crea un elemento 'li'
        elemento.textContent = cancion.titulo; // Establece el título de la canción
        elemento.dataset.indice = indice; // Asigna el índice como atributo 'data-indice'
  
        elemento.addEventListener('click', () => cargarCancion(indice)); // Agrega evento de clic
  
        lista.appendChild(elemento); // Agrega el elemento a la lista
    });
}

// Agregar eventos a los botones
playBtn.addEventListener('click', reproducir);
pauseBtn.addEventListener('click', pausar);


// Evento para seleccionar archivo de canción
seleccionArchivoCancion.addEventListener('change', function(event) {
    const archivoSeleccionado = event.target.files[0];
    const nuevaCancion = {
        titulo: archivoSeleccionado.name,
        src: URL.createObjectURL(archivoSeleccionado)
    };

    // Agregar la nueva canción a la lista de reproducción existente
    canciones.push(nuevaCancion);

    // Actualizar la interfaz de usuario para mostrar la nueva canción
    mostrarLista();
});