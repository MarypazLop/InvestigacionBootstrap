document.getElementById('btnEnviar').addEventListener('click', function () {
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const inputNombre = document.getElementById('nombre');
  const inputCorreo = document.getElementById('correo');

  // Limpiar estados anteriores
  inputNombre.removeAttribute('aria-invalid');
  inputCorreo.removeAttribute('aria-invalid');

  if (nombre === '') {
    inputNombre.setAttribute('aria-invalid', 'true');
    inputNombre.focus();
    alert('Por favor ingresa tu nombre.');
    return;
  }

  if (correo === '') {
    inputCorreo.setAttribute('aria-invalid', 'true');
    inputCorreo.focus();
    alert('Por favor ingresa tu correo.');
    return;
  }

  const modal = bootstrap.Modal.getInstance(document.getElementById('modalContacto'));
  modal.hide();
  alert('Mensaje enviado. Gracias, ' + nombre + '!');
});