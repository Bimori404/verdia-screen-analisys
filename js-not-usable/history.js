// // Función para mostrar la imagen analizada en el modal y crear una tarjeta en el historial.
// function displayImageAndAddToHistory(imageSrc, title, description) {
//     // Mostrar la imagen en el modal
//     document.getElementById("modal-preview-image").src = imageSrc;
//     document.querySelector("#imageModal h6").textContent = title;
//     document.querySelector("#imageModal p").textContent = description;

//     // Crear una nueva tarjeta en el historial
//     const imageHistoryContainer = document.getElementById("image-history-container");

//     const newCard = document.createElement("div");
//     newCard.classList.add("card", "card-elements");

//     const cardContent = `
//         <div class="row">
//             <div class="col-md-4">
//                 <img class="img-modal" src="${imageSrc}" alt="">
//             </div>
//             <div class="col-md-8">
//                 <h6 class="h6-card">${title}</h6>
//             </div>
//         </div>
//     `;

//     newCard.innerHTML = cardContent;
//     imageHistoryContainer.appendChild(newCard);
// }

// // Evento al hacer clic en "Analizar imagen"
// document.getElementById("analyze-button").addEventListener("click", function () {
//     const previewImage = document.getElementById("preview-image");
//     if (previewImage.src) {
//         const title = "Título de la imagen"; // Reemplaza con el título deseado
//         const description = "Descripción de la imagen"; // Reemplaza con la descripción deseada

//         displayImageAndAddToHistory(previewImage.src, title, description);
//     }
// });

// // Evento al cargar una imagen
// document.getElementById("file-input").addEventListener("change", function (event) {
//     const previewImage = document.getElementById("preview-image");
//     const dropText = document.getElementById("dropText");

//     if (event.target.files.length > 0) {
//         const file = event.target.files[0];
//         const reader = new FileReader();

//         reader.onload = function (e) {
//             previewImage.src = e.target.result;
//             previewImage.style.display = "block";
//             dropText.style.display = "none";
//         };

//         reader.readAsDataURL(file);
//     }
// });