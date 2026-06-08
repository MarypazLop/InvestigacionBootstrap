const btnEnviar = document.getElementById('btnEnviar');
const modalContacto = document.getElementById('modalContacto');

btnEnviar.addEventListener('click', () => {
  const nombre = document.getElementById('nombre').value.trim();

  if (!nombre) {
    alert('Por favor ingresa tu nombre.');
    return;
  }

  bootstrap.Modal.getInstance(modalContacto)?.hide();
  alert(`Mensaje enviado. Gracias, ${nombre}!`);
});