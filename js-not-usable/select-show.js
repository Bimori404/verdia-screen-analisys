// SELECCIONAR Y MOSTRAR IMAGEN
const dropContainer = document.getElementById('drop-container');
const fileInput = document.getElementById('file-input');
const previewImage = document.getElementById('preview-image');

// Prevenir comportamiento predeterminado de arrastrar y soltar en la ventana
window.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
});

window.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
});

// Habilitar la funcionalidad de arrastrar y soltar
dropContainer.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropContainer.style.border = '2px dashed #333';
});

dropContainer.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropContainer.style.border = '2px dashed #ccc';
});

dropContainer.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropContainer.style.border = '2px dashed #ccc';

    const file = e.dataTransfer.files[0];
    if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
            previewImage.src = event.target.result;
            previewImage.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa una imagen válida',
        })
    }
});

// Habilitar la funcionalidad de carga de imagen al hacer clic en el contenedor
dropContainer.addEventListener('click', () => {
    fileInput.click();
});

// Mostrar la imagen cargada al seleccionar un archivo
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
            previewImage.src = event.target.result;
            previewImage.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa una imagen válida',
        })
    }
});
