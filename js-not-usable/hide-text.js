// OCULTAR TEXTO DENTRO DEL DROP
document.getElementById('file-input').addEventListener('change', function () {
    var fileInput = document.getElementById('file-input');
    var previewImage = document.getElementById('preview-image');
    var dropText = document.querySelector('.drop-text');

    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            // Muestra la imagen y oculta el texto y el contenedor
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
            dropText.style.display = 'none';

                var div = document.getElementById('dropText'); 
                    div.remove();
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
});