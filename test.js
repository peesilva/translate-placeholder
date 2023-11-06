document.addEventListener("DOMContentLoaded", function() {
  const formulario2 = document.getElementById("formulario2");
  const toggleLanguage = document.getElementById("language-switch");


  toggleLanguage.addEventListener("click", function() {
    if (formulario2.classList.contains("formulario-hidden")) {
      formulario2.classList.remove("formulario-hidden");
    } else {
      formulario2.classList.add("formulario-hidden");
    }
  });
});