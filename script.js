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
document.getElementById("formulario").addEventListener("submit", function(event) {
  // Validação do nome
  const nome = document.querySelector('input[name="nome"]');
  if (nome.value.trim() === "") {
    alert("Por favor, informe seu nome.");
    nome.focus();
    event.preventDefault();
    return;
  }

  // Validação do e-mail
  const email = document.querySelector('input[name="email"]');
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email.value)) {
    alert("Por favor, informe um e-mail válido.");
    email.focus();
    event.preventDefault();
    return;
  }

  // Validação da mensagem
  const mensagem = document.querySelector('textarea[name="mensagem"]');
  if (mensagem.value.trim() === "") {
    alert("Por favor, descreva o serviço que você precisa.");
    mensagem.focus();
    event.preventDefault();
    return;
  }
});

