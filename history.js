import "main.js";

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
        // const title = "Título de la imagen"; // Reemplaza con el título deseado
        // const description = "Descripción de la imagen..."; // Reemplaza con la descripción deseada
        switch (data.index) {
            //
            case 0:
                title = "Saludable"
                descripcion = "Esta planta se encuanta saludable ya que no precenta ninguna anomalia"
            break;
            // 
            case 1:
                title = "Mosaico"
                descripcion = "Esta planta presenta caracteristicas de mosaico"
            break;
           //
            case 2:
                title = "Raya Roja"
                descripcion = "Esta planta presenta caracteristicas de roya roja"
            break;
            //
            case 3:
                title = "Roya"
                descripcion = "Esta planta presenta caracteristicas de roya"
            break;
            //
            case 4:
                title = "Amarillamiento"
                descripcion = "Esta planta presenta caracteristicas de amarillamiento "
            break;
        }

        /*
            hola
            ya no supe que hacer
            en efecto no le se al jaivascript

            tiempo invertido -> 35min de puro estres
        */
        console.log(data.title);
        console.log(data.descripcion);

        displayImageAndAddToHistory(previewImage.src, data.title, data.descripcion);
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
