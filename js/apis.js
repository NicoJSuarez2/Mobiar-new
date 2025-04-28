const API_URL = "https://backend-mobiart.onrender.com"; // Cambia si tu FastAPI está en otro lado

// Crear un nuevo contacto
// Scripo para el registro del descuento

// Scripo para el registro del descuento YA FUNCIONA NO TOCAR NADA DE AQUÍ
document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData();
  formData.append("nombre", document.getElementById("nombre").value);
  formData.append("correo", document.getElementById("correo").value);
  formData.append("celular", document.getElementById("celular").value);
  formData.append("servicio", document.getElementById("servicio").value);

  try {
    const response = await fetch("https://backend-mobiart.onrender.com/enviardocumento/", {
      method: "PUT",
      body: formData, // No pongas Content-Type manualmente aquí
    });

    const result = await response.json();
    alert(result.message);
  } catch (error) {
    alert("Error al enviar los datos");
    console.error(error);
  }
});
// Scripo para el registro del descuento YA FUNCIONA NO TOCAR NADA DE AQUÍ

// Script para el formulario de documento sin descuento 
document.getElementById("sugerir").addEventListener('submit', async function(e) {
e.preventDefault(); // Evita que el formulario recargue la página

const email = document.querySelector('input[name="correo"]').value;

const formData = new FormData();
formData.append('correo', email); // Este nombre 'correo' debe coincidir con el parámetro de tu endpoint

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


  

// Obtener todos los contactos
async function obtenerContactos() {
    const response = await fetch(`${API_URL}/contactos`);
    const result = await response.json();
    return result;
}

// Borrar un contacto por ID
async function borrarContacto(id) {
    const response = await fetch(`${API_URL}/borrarcontacto/${id}`, {
        method: "DELETE",
    });
    const result = await response.json();
    return result;
}

// Enviar documento + guardar contacto
async function enviarDocumentoNormal(correo) {
  const formData = new FormData();
  formData.append('correo', correo);

  const response = await fetch(`${API_BASE}/enviardocumentonormal/`, {
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
    const response = await fetch(`${API_URL}/enviardocumentonormal/`, {
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

