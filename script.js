/*--------------------Código da Barra de Nav--------------------*/
// Seleciona todos os itens do menu
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = '#135e8c';
        item.style.color = '#ffffff';
    });

    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = '';
        item.style.color = '#444444';
    });
});


/*--------------------Código do FAQ--------------------*/
document.querySelectorAll('.faq-pergunta').forEach(botao => {
  botao.addEventListener('click', () => {
    const item = botao.closest('.faq-item');
    const resposta = item.querySelector('.faq-resposta');

    const estaAberto = resposta.classList.contains('aberto');

    // Fecha todos
    document.querySelectorAll('.faq-resposta').forEach(r => {
      r.classList.remove('aberto');
      r.style.maxHeight = null;
    });

    // Abre apenas o clicado
    if (!estaAberto) {
      resposta.classList.add('aberto');
      resposta.style.maxHeight = resposta.scrollHeight + 'px';
    }
  });
});


/*--------------------Código do Formulario de Contato--------------------*/
document.getElementById("form-contato").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome.length < 2) {
    alert("O nome deve conter pelo menos 2 letras.");
    return;
  }

  if (!email.endsWith("@gmail.com")) {
    alert("O email precisa ser @gmail.com");
    return;
  }

  if (mensagem.length < 1) {
    alert("A mensagem não pode estar vazia.");
    return;
  }

  window.location.href = "obrigado.html";
});