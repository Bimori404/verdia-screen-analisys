(function() {
    var dropContainer = document.getElementById('drop-container');
    var previewImage = document.getElementById('preview-image');
    var dropText = document.querySelector('.drop-text');
    var fileInput = document.getElementById('file-input');

    function showImage(imageUrl) {
        previewImage.src = imageUrl;
        previewImage.style.display = 'block';
        dropText.style.display = 'none';
    }

    dropContainer.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    dropContainer.addEventListener('dragenter', function (e) {
        e.preventDefault();
    });

    dropContainer.addEventListener('drop', function (e) {
        e.preventDefault();
        var file = e.dataTransfer.files[0];

        if (file) {
            var reader = new FileReader();

            reader.onload = function (e) {
                showImage(e.target.result);
            };

            reader.readAsDataURL(file);
        }
    });

    fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                showImage(e.target.result);
            };

            reader.readAsDataURL(fileInput.files[0]);
        }
    });
})();
