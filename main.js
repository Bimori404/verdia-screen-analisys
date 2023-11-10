(function () {
    // D R O P - I M A G E - & - H I D E - T E X T
    var dropContainer = document.getElementById('drop-container');
    var fileInput = document.getElementById('file-input');
    var previewImage = document.getElementById('preview-image');
    var dropText = document.querySelector('.drop-text');

    function showImage(imageUrl) {
        previewImage.src = imageUrl;
        previewImage.style.display = 'block';
        dropText.style.display = 'none';
    }

    // Prevenir comportamiento predeterminado de arrastrar y soltar en la ventana
    dropContainer.addEventListener('dragover', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

    dropContainer.addEventListener('dragenter', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

    // Habilitar la funcionalidad de arrastrar y soltar
    dropContainer.addEventListener('drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
        dropContainer.style.border = '2px dashed #ccc';

        const file = e.dataTransfer.files[0];
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (event) => {
                showImage(event.target.result);
            };
            reader.readAsDataURL(file);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingresa una imagen válida',
            });
        }
    });

    // Habilitar la funcionalidad de carga de imagen al hacer clic en el contenedor
    dropContainer.addEventListener('click', () => {
        fileInput.click();
    });

    // Mostrar la imagen cargada al seleccionar un archivo
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg') {
            const reader = new FileReader();
            reader.onload = (event) => {
                // Muestra la imagen y oculta el texto
                previewImage.src = event.target.result;
                previewImage.style.display = 'block';
                dropText.style.display = 'none';

                // Remueve el elemento con id 'dropText'
                var div = document.getElementById('dropText');
                if (div) {
                    div.remove();
                }
            };
            reader.readAsDataURL(file);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ingresa una imagen válida',
            });
        }
    });

    // A N A L Y Z E - & - P R E V I E W - I M A G E
    document.getElementById('analyze-button').addEventListener('click', function () {
        const fileInput = document.getElementById('file-input');
        var previewImage = document.getElementById('preview-image');
        var modalPreviewImage = document.getElementById('modal-preview-image');

        // lógica para analizar la imagen
        if (fileInput.files.length === 0) {
            console.log('if null');
            Swal.fire({
                title: 'Por favor, carga una imagen para analizarla....',
                timer: 4000,
            });
        } else {
            // Coloca aquí la lógica para analizar la imagen
            console.log('if not null');
            let timerInterval;
            Swal.fire({
                title: 'Estamos analizando tu imagen. Espera un momento...',
                html: 'Faltan <b></b> segundos.',
                timer: 4000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const b = Swal.getHtmlContainer().querySelector('b');
                    timerInterval = setInterval(() => {
                        b.textContent = Math.round(Swal.getTimerLeft() / 1000);
                    }, 100);
                },
                willClose: () => {
                    clearInterval(timerInterval);

                    // Cuando se completa el análisis, se abre el modal
                    modalPreviewImage.src = previewImage.src;
                    $('#imageModal').modal('show');
                }
            });
            //Esta es la parte de la API
            var file = fileInput.files[0];

            if (file) {
                var formData = new FormData();
                formData.append('imagen', file);

                fetch('http://127.0.0.1:5000/api/subir-imagen', {
                    method: 'POST',
                    body: formData
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log('Respuesta de la API:', data);
                    })
                    .catch(error => {
                        console.error('Error al enviar la imagen:', error);
                    });
            } else {
                console.error('Selecciona una imagen antes de hacer clic en "Enviar Imagen".');
            }
        }
    });

})();