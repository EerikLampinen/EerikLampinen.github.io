// Päivitä vuosi footerissa
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Mobiilivalikko
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

// Yhteydenottolomake -> mailto
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Täytä kaikki kentät.");
      return;
    }

    // VAIHDA tämä osoite omaan sähköpostiisi
    const targetEmail = "ekostartti@example.com";

    const body =
      `Nimi: ${name}%0D%0A` +
      `Sähköposti: ${email}%0D%0A%0D%0A` +
      `Viesti:%0D%0A${message}`;

    const mailtoLink = `mailto:${targetEmail}?subject=Yhteydenotto Ekostartista&body=${body}`;

    window.location.href = mailtoLink;
  });
}
