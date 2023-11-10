function enviarImagen() {
    var fileInput = document.getElementById('analyze-button');
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