document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#formulario");

  form.addEventListener("submit", (e) => {
    // Coleta dos campos
    const nome = form.querySelector('input[name="nome"]');
    const email = form.querySelector('input[name="email"]');
    const mensagem = form.querySelector('textarea[name="mensagem"]');

    // Validação do nome
    if (nome.value.trim() === "") {
      alert("Por favor, informe seu nome.");
      nome.focus();
      e.preventDefault();
      return;
    }

    // Validação do e-mail
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email.value.trim())) {
      alert("Por favor, informe um e-mail válido.");
      email.focus();
      e.preventDefault();
      return;
    }

    // Validação da mensagem
    if (mensagem.value.trim() === "") {
      alert("Por favor, descreva o serviço que você precisa.");
      mensagem.focus();
      e.preventDefault();
      return;
    }

    // Redirecionamento para WhatsApp
    const textoWhatsApp = `Olá! Meu nome é ${nome.value.trim()}, meu e-mail é ${email.value.trim()}. Preciso do seguinte serviço: ${mensagem.value.trim()}`;
    const numero = "5511940090323";
    const urlWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(textoWhatsApp)}`;

    window.open(urlWhatsApp, "_blank");
    // O form ainda será enviado para o serviço de e-mail, como FormSubmit
  });

  // Rolagem suave para links do menu
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const alvo = document.querySelector(this.getAttribute("href"));
      if (alvo) {
        alvo.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#formulario");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nome = form.querySelector('input[name="nome"]').value.trim();
    const mensagem = form.querySelector('textarea[name="mensagem"]').value.trim();

    if (!nome || !mensagem) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const dados = {
      nome,
      mensagem
    };

    try {
      const resposta = await fetch("http://localhost:8080/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
      });

      const retorno = await resposta.text();
      alert(retorno);
      form.reset();
    } catch (erro) {
      console.error("Erro:", erro);
      alert("Erro ao enviar o formulário. Verifique a conexão com o servidor.");
    }
  });
});

