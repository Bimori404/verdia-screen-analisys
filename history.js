// mostrar la imagen y la información en el modal
function displayImageInModal(imageSrc, title, description) {
    document.getElementById("modal-preview-image").src = imageSrc;
    document.querySelector("#imageModal h6").textContent = title;
    document.querySelector("#imageModal p").textContent = description;
}

// mostrar la imagen analizada en el modal y crear una tarjeta en el historial.
function displayImageAndAddToHistory(imageSrc, title, description) {
    displayImageInModal(imageSrc, title, description);

    // Crear una nueva tarjeta en el historial
    const imageHistoryContainer = document.getElementById("image-history-container");

    const newCard = document.createElement("div");
    newCard.classList.add("card", "card-elements");

    const cardContent = `
        <div class="row">
            <div class="col-md-4">
                <img class="img-modal" src="${imageSrc}" alt="">
            </div>
            <div class="col-md-8">
                <h6 class="h6-card">${title}</h6>
            </div>
        </div>
    `;

    newCard.innerHTML = cardContent;
    imageHistoryContainer.appendChild(newCard);
}

// Evento al hacer clic en "Analizar imagen"
document.getElementById("analyze-button").addEventListener("click", function () {
    const previewImage = document.getElementById("preview-image");
    if (previewImage.src) {
        const title = "Título de la imagen"; // Reemplaza con el título deseado
        const description = "Descripción de la imagen..."; // Reemplaza con la descripción deseada

        displayImageAndAddToHistory(previewImage.src, title, description);
    }
});

// Evento al hacer clic en una tarjeta en el historial
const imageHistoryContainer = document.getElementById("image-history-container");
imageHistoryContainer.addEventListener("click", function (event) {
    const card = event.target.closest(".card-elements");
    if (card) {
        const imageSrc = card.querySelector(".img-modal").src;
        const title = card.querySelector(".h6-card").textContent;
        const description = "Descripción de la imagen dentro del historial";

        displayImageInModal(imageSrc, title, description);
        $('#imageModal').modal('show'); // Abre el modal
    }
});
