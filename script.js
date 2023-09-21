function saludar() {
    var nombre = document.getElementById("nombre").value;
    var mensaje = "¡Hola, " + nombre + "! Bienvenido a mi página de presentación.";
    document.getElementById("mensaje").textContent = mensaje;
  }
  