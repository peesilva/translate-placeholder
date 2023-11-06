document.addEventListener("DOMContentLoaded", function() {
    const toggleFormButton = document.getElementById("toggleFormButton");
    const formulario2 = document.getElementById("formulario2");
  
    toggleFormButton.addEventListener("click", function() {
      if (formulario2.classList.contains("formulario-hidden")) {
        formulario2.classList.remove("formulario-hidden");
      } else {
        formulario2.classList.add("formulario-hidden");
      }
    });
  });