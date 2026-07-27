document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const servicio = document.getElementById("servicio").value;
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !correo || !mensaje) {
      alert("Por favor, completá los campos obligatorios (nombre, correo y mensaje).");
      return;
    }

    // Acá podrían agregar lógica real de envío (fetch, backend, etc.)
    form.innerHTML = `
      <div style="text-align:center; padding: 20px;">
        <h3 style="color: var(--primary-dark); margin-bottom: 10px;">¡Gracias por tu mensaje!</h3>
        <p style="color: var(--muted);">
          Te respondemos lo antes posible a ${correo} con una propuesta para tu proyecto.
        </p>
      </div>
    `;

    // Opcional: enviar datos a un servicio externo más adelante.
  });
});