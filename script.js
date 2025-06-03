const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Tercihi localStorage'a kaydet
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Sayfa açıldığında temayı geri yükle
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});
