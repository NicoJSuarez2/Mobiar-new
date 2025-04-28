// Scripo para el registro del descuento
document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const data = {
      nombre: document.getElementById("nombre").value,
      correo: document.getElementById("correo").value,
      celular: document.getElementById("celular").value,
      servicio: document.getElementById("servicio").value,
    };
  
    try {
      const response = await fetch("https://backend-mobiart.onrender.com/contacto", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
  
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      alert("Error al enviar los datos");
      console.error(error);
    }
  });
  
  
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


