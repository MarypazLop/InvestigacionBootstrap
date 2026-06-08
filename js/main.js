// Feedback visual al enviar el formulario del modal
document.getElementById('btnEnviar').addEventListener('click', function () {
  const nombre = document.getElementById('nombre').value.trim();

  if (nombre === '') {
    alert('Por favor ingresa tu nombre.');
    return;
  }

  // Cerrar el modal usando la API de Bootstrap
  const modal = bootstrap.Modal.getInstance(document.getElementById('modalContacto'));
  modal.hide();

  alert('Mensaje enviado. Gracias, ' + nombre + '!');
});