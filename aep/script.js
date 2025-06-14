/* Aparece a tabela, quando selecionar o estado de São Paulo
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
}*/

// Função que lê o json e apresenta os municipios ao estado correspondente na seleção
document.addEventListener('DOMContentLoaded', () => {
  const estadoSelect = document.getElementById('estadoSelect');
  const municipioSelect = document.getElementById('municipioSelect');
  const tabela = document.getElementById('mostrarTabela');
  let municipios = [];

  // Carregar JSON com estados e municípios
  fetch('municipios.json')
    .then(response => response.json())
    .then(data => {
      municipios = data;
    });

  estadoSelect.addEventListener('change', function () {
    const selecionado = this.options[this.selectedIndex].text;

    // Exibe a tabela somente se for São Paulo
    if (selecionado.includes('São Paulo')) {
      tabela.style.display = 'block';
    } else {
      tabela.style.display = 'none';
    }

    // Pega a sigla do estado (ex: "SP" de "São Paulo (SP)")
    const match = selecionado.match(/\((\w{2})\)/);
    if (!match) return;
    const uf = match[1];

    // Limpar opções antigas
    municipioSelect.innerHTML = '<option selected>Selecione um município</option>';

    // Filtrar municípios do estado selecionado
    const cidades = municipios
      .filter(m => m.UF === uf)
      .map(m => m.NmMunicipio)
      .sort();

    // Adicionar municípios ao <select>
    cidades.forEach(nome => {
      const option = document.createElement('option');
      option.value = nome;
      option.textContent = nome;
      municipioSelect.appendChild(option);
    });
  });
});

function enviarAvaliacao() {
  alert("Obrigado pela sua contribuição! Sua avaliação foi enviada.");
}

