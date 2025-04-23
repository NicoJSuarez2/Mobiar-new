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
  