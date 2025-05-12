document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#formulario");

  form.addEventListener("submit", (e) => {
    const nome = form.querySelector('input[name="nome"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const mensagem = form.querySelector('textarea[name="mensagem"]').value.trim();

    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      e.preventDefault();
      return;
    }

    // Mensagem para WhatsApp
    const textoWhatsApp = `Olá! Meu nome é ${nome}, meu e-mail é ${email}. Preciso do seguinte serviço: ${mensagem}`;
    const numero = "5511940090323"; // seu número com DDI + DDD
    const urlWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(textoWhatsApp)}`;

    window.open(urlWhatsApp, "_blank");
    // O form continua sendo enviado para o e-mail via FormSubmit
  });

  // Rolagem suave
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const alvo = document.querySelector(this.getAttribute("href"));
      alvo.scrollIntoView({ behavior: "smooth" });
    });
  });
});
