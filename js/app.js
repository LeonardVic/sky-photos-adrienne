document.addEventListener("DOMContentLoaded", function () {
    const loaderCont = document.getElementsByClassName('loader-cont')[0];
    const nextImage = document.getElementById('next-image');
    const previousImage = document.getElementById('previous-image');
    const imageContent = document.getElementById('image-content');
    const image = document.getElementById('image');
    const close = document.getElementById('close');
    const form = document.getElementById('form');
    const password = document.getElementById('password');
    const adri = document.getElementById('adri');
    const contenido = document.getElementById('contenido');
    const nono = document.getElementById('404');
    const galeria = document.getElementById('galeria');
    const download = document.getElementById('download');

    let position = 1;

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (password.value === 'TqmChaparro123') {
            toggleLoader(true);
            setTimeout(() => {
                toggleLoader(false);
            }, 3000);
            adri.style.display = 'none';
            galeria.style.display = 'grid';
        } else {
            alert('That is not the password 🤨🤨🤨🤨🤨🤨🤨🤨');
        }
    });

    nextImage.addEventListener('click', () => {
        position = position === 25 ? 1 : position + 1;
        updateImage();
    });

    previousImage.addEventListener('click', () => {
        position = position === 1 ? 25 : position - 1;
        updateImage();
    });

    close.addEventListener('click', () => {
        image.style.transform = 'scale(0)';
        imageContent.src = '';
    });

    const imageLinks = document.querySelectorAll('.galeria a');
    imageLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            position = index + 1;
            image.style.transform = 'scale(1)';
            updateImage();
        });
    });

    function updateImage() {
        imageContent.src = `/img/${position}.jpg`;
        download.href = `/img/${position}.jpg`;
    }

    // Función para mostrar u ocultar la página según el tamaño de la pantalla
    function togglePageVisibility() {
        // Obtener el ancho de la ventana del navegador
        const windowWidth = window.innerWidth;

        // Verificar si el ancho de la ventana es mayor que 768px (puedes ajustar este valor según tus necesidades)
        if (windowWidth > 1200) {
            // Mostrar la página
            nono.style.display = 'none';
            contenido.style.display = 'block';
        } else {
            contenido.style.display = 'none';
            nono.style.display = 'block';
        }
    }

    // Ejecutar la función togglePageVisibility cuando se carga la página
    togglePageVisibility();

    // Escuchar el evento 'resize' para detectar cambios en el tamaño de la pantalla
    window.addEventListener('resize', togglePageVisibility);

    // Función para mostrar u ocultar el loader
    function toggleLoader(show) {
        loaderCont.style.display = show ? 'flex' : 'none';
    }

    // Ocultar el loader después de 5 segundos
    setTimeout(() => {
        toggleLoader(false);
    }, 5000);
});