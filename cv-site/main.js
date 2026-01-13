// Ano no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Menu mobile
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  const isOpen = mobileMenu.style.display === "flex";
  mobileMenu.style.display = isOpen ? "none" : "flex";
  hamburger.setAttribute("aria-expanded", String(!isOpen));
});

// Fechar menu ao clicar em um link
[...mobileMenu.querySelectorAll("a")].forEach((a) => {
  a.addEventListener("click", () => {
    mobileMenu.style.display = "none";
    hamburger.setAttribute("aria-expanded", "false");
  });
});

// Feedback do formulário (sem impedir o envio real)
const form = document.getElementById("contactForm");
const hint = document.getElementById("formHint");

if (form && hint) {
  form.addEventListener("submit", () => {
    hint.textContent = "Enviando mensagem...";
  });
}
