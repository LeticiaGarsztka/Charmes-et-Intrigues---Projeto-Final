document.addEventListener("DOMContentLoaded", function () {
    const placeholder = document.getElementById("menu-placeholder");
  
    fetch("components/menu.html")
      .then(response => response.text())
      .then(data => {
        placeholder.innerHTML = data;
      })
      .catch(error => {
        console.error("Erro ao carregar o menu:", error);
      });
  });