document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;

  const errorMessage = document.getElementById('error-message');

  const reloadButton = document.getElementById('reloadButton');

  errorMessage.style.display = 'none';

  if (username.length < 5) {
    errorMessage.textContent = 'O nome do usuário deve ter pelo menos 5 caracteres.'
    errorMessage.style.display = 'block'
    reloadButton.style.display = 'block'
  } else {
    alert('Formulário enviado com sucesso!')
  }
})