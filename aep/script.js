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

    // Oculta a tabela até que município também seja selecionado
    tabela.style.display = 'none';
  });

  // Mostra a tabela quando ambos forem selecionados
  municipioSelect.addEventListener('change', function () {
    const estadoSelecionado = estadoSelect.value;
    const municipioSelecionado = this.value;

    if (estadoSelecionado !== "Selecione seu estado" && municipioSelecionado !== "Selecione um município") {
      tabela.style.display = 'block';
    }
  });
});

// Função que simula a localização do onibus
function localizacaoOnibus() {
  // Inicializa o mapa
  const map = L.map('map').setView([-23.55052, -46.633308], 13);

  // Camada do OpenStreetMap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Ícone do ônibus
  const busIcon = L.icon({
    iconUrl: 'images/iconeLocalizacao.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  // Simulação de rota com coordenadas fictícias
  const route = [
    [-23.55052, -46.633308],
    [-23.55100, -46.632000],
    [-23.55200, -46.631000],
    [-23.55300, -46.630000],
    [-23.55400, -46.629000],
    [-23.55500, -46.628000],
    [-23.55600, -46.627000]
  ];

  let index = 0;
  let busMarker = L.marker(route[0], { icon: busIcon }).addTo(map)
    .bindPopup('Ônibus em movimento')
    .openPopup();

  // Função para mover o onibus
  function moveBus() {
    if (index < route.length - 1) {
      index++;
      busMarker.setLatLng(route[index]);
      map.panTo(route[index]); // Centraliza o mapa
    } else {
      clearInterval(moveInterval);
      busMarker.bindPopup("Ônibus chegou ao destino.").openPopup();
    }
  }

  const moveInterval = setInterval(moveBus, 2000); // Move a cada 2 segundos
}

function enviarAvaliacao() {
  alert("Obrigado pela sua contribuição! Sua avaliação foi enviada.");
  document.getElementById('avaliacaoTexto').value = '';
}