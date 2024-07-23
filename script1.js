function gerenciarClique() {
      console.log(minhaVariável);
    }

    document.getElementById('meuButton').addEventListener('click', function() {
      try {
        gerenciarClique();
      } catch (error) {
        console.error('Ocorreu um erro:', error.message);
        alert('Algo deu errado. Por favor, tente novamente.');
      }
    });