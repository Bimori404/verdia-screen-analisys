document.getElementById('analyze-button').addEventListener('click', function () {
    var previewImage = document.getElementById('preview-image');
    var modalPreviewImage = document.getElementById('modal-preview-image');
    modalPreviewImage.src = previewImage.src;
});
