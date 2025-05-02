
// Crear un nuevo contacto
// Scripo para el registro del descuento
// Script para el formulario de documento sin descuento  YA FUNCIONA NO TOCAR NADA DE AQUÍ
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("sugerir").addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = document.querySelector('input[name="correo"]').value;

    const formData = new FormData();
    formData.append('correo', email);

    try {
      const response = await fetch('https://backend-mobiart.onrender.com/enviardocumentonormal/', {
        method: 'POST',
        body: formData
      });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      alert("Error al enviar los datos");
      console.error(error);
    }
  });
});
// Script para el formulario de documento sin descuento  YA FUNCIONA NO TOCAR NADA DE AQUÍ


// Borrar un contacto por ID
async function borrarContacto(id) {
    const response = await fetch(`https://backend-mobiart.onrender.com/borrarcontacto/${id}`, {
        method: "DELETE",
    });
    const result = await response.json();
    return result;
}

// Enviar documento + guardar contacto
async function enviarDocumentoNormal(correo) {
  const formData = new FormData();
  formData.append('correo', correo);

  const response = await fetch(`https://backend-mobiart.onrender.com/enviardocumentonormal/`, {
      method: 'POST',
      body: formData
  });

  if (!response.ok) {
      throw new Error('Error al enviar documento normal');
  }

  const result = await response.json();
  console.log(result);
}
// Enviar solo el documento normal (sin guardar contacto)
async function enviarDocumentoNormal(formData) {
    const response = await fetch(`https://backend-mobiart.onrender.com/enviardocumentonormal/`, {
        method: "POST",
        body: formData,
    });
    const result = await response.json();
    return result;
}
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('sugerir');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();  // Evita que se recargue la página

    const correo = form.correo.value; // Capturamos el valor del input

    try {
      await enviarDocumentoNormal(correo);  // Llamamos a la función que hace el POST
      alert('Correo enviado exitosamente. ¡Revisa tu bandeja!');
    } catch (error) {
      console.error(error);
      alert('Hubo un error al enviar el correo.');
    }
  });
});



// Ver un newsletter (descarga)
function verNewsletter() {
    window.open(`${API_URL}/view_newsletter/`, "_blank");
}

// Ver newsletter normal (descarga)
function verNewsletterNormal() {
    window.open(`${API_URL}/view_newsletternormal/`, "_blank");
}

