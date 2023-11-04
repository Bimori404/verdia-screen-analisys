document.getElementById('analyze-button').addEventListener('click', function () {
  const fileInput = document.getElementById('file-input');
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
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer');
      }
    });
  }
});
