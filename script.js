// Teste 1
/*let num = 1;
try {
  num.toUpperCase();
}
catch (err) {
  alert(err.name);
}
finally {
  console.log("Terminei o código")
}
*/


// Teste 2
/*try {
  const valor = 10 / 2;
  console.log("Valor:", valor);
} catch (erro) {
  console.error("Ocorreu um erro:", erro.message);
} finally {
  console.log("Este código é executado indepentemente de exceções.")
}
*/

// Teste 3
/*try {
  let nome = document.getElementById("nome").value
  cadastroUsuario(nome)
} catch (e) {
  alert("Algo deu errado" + e.message)
}
*/

// Teste 4
/*function dividir(a,b) {
  if (b === 0) {
    throw "Divisão por zero não é permitida.";
  }
  return a / b;
}

try {
  const resultado = dividir(10, 0);
  console.log("Resultado:", resultado);
} catch (erro) {
  console.error("Ocorreu um erro:", erro);
}
*/

// Teste 5
/*function validarIdade(idade) {
  if (typeof idade !== 'number' || idade < 0) {
    throw "A idade deve ser um número inteiro positivo.";
  } 
  if (idade < 18) {
    throw "Você é menor de idade e não pode acessar esse conteúdo.";
  }
  console.log("Acesso permitido. Bem-vindo!");
}

try {
  validarIdade(19);
} catch (erro) {
  console.error("Ocorreu um erro:", erro);
}
*/

// Atividade 1 
document.getElementById('userForm').addEventListener('submit', function (e) {
  e.preventDefault();

try {
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const email = document.getElementById('email').value;
  const idade = document.getElementById('idade').value;

if (!nome || !sobrenome || !email || !idade) {
  throw new Error('Todos os campos são obrigatórios.');
}

if (idade < 18) {
  throw new Error('Você é menor de idade e não pode acessar esse conteúdo.');
}

document.getElementById('message').classList.remove('error');
document.getElementById('message').classList.add('success');
document.getElementById('message').innerText = 'Formulário enviado com sucesso!';

document.getElementById('nome').value = '';
document.getElementById('sobrenome').value = '';
document.getElementById('email').value = '';
document.getElementById('idade').value = '';

console.log("Formulário enviado com sucesso!");

} catch (error) {
  document.getElementById('message').classList.remove('success');
  document.getElementById('message').classList.add('error');
  document.getElementById('message').innerText = error.message;
  console.error("Ocorreu um erro:", error);
}
});


