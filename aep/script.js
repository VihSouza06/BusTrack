// Aparece a tabela, quando selecionar o estado de São Paulo
document.getElementById('estadoSelect').addEventListener('change', function () {
  const tabela = document.getElementById('mostrarTabela');
  const selecionado = this.options[this.selectedIndex].text;

  if (selecionado.includes('São Paulo')) {
    tabela.style.display = 'block';
  } else {
    tabela.style.display = 'none';
  }
});

// Confirmação de envio de avaliação
function enviarAvaliacao() {
  alert("Obrigado pela sua contribuição! Sua avaliação foi enviada.");
}