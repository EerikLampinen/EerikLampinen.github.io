// Näytä vuosi footerissa
document.getElementById("year").textContent = new Date().getFullYear();

// Mobiilivalikko
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");
btn.addEventListener("click", () => nav.classList.toggle("show"));

// Lomake mailto-lähetys
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Täytä kaikki kentät!");
    return;
  }

  // Vaihda osoite omaan sähköpostiisi
  const mailto = `mailto:ekostartti@example.com?subject=Yhteydenotto Ekostartista&body=Nimi: ${name}%0D%0ASähköposti: ${email}%0D%0A%0D%0AViesti:%0D%0A${message}`;
  window.location.href = mailto;
});
