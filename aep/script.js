
  document.getElementById('estadoSelect').addEventListener('change', function () {
    const tabela = document.getElementById('mostrarTabela');
    const selecionado = this.options[this.selectedIndex].text;

    if (selecionado.includes('São Paulo')) {
      tabela.style.display = 'block';
    } else {
      tabela.style.display = 'none';
    }
  });



/*const map = L.map('map').setView([-23.55052, -46.633308], 13); // Coordenadas iniciais: São Paulo

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Ícone personalizado para ônibus (opcional)
  const busIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/61/61212.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  // Obter localização em tempo real
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      // Adiciona o marcador ou move ele
      L.marker([lat, lon], { icon: busIcon })
        .addTo(map)
        .bindPopup('Você está aqui (simulando ônibus).')
        .openPopup();

      map.setView([lat, lon], 15); // Aproxima o mapa para a posição
    }, error => {
      alert("Não foi possível obter sua localização.");
    });
  } else {
    alert("Geolocalização não suportada pelo seu navegador.");
  }

    const map = L.map('map').setView([-23.55052, -46.633308], 13); // São Paulo como ponto inicial

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  // Ícone do ônibus
  const busIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/61/61212.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  // Coordenadas simuladas (trajeto fictício)
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

  // Função para mover o ônibus
  function moveBus() {
    if (index < route.length - 1) {
      index++;
      busMarker.setLatLng(route[index]);
      map.panTo(route[index]); // opcional: centraliza o mapa
    } else {
      clearInterval(moveInterval);
      busMarker.bindPopup("Ônibus chegou ao destino.").openPopup();
    }
  }

  const moveInterval = setInterval(moveBus, 2000); // Move a cada 2 segundos*/

   let lat = -23.5505;
    let lng = -46.6333;

    const map = L.map('map').setView([lat, lng], 16);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
    }).addTo(map);

    const marker = L.marker([lat, lng]).addTo(map)
      .bindPopup("Onibus")
      .openPopup();

    // Função que simula movimentação do carro
    function simularMovimento() {
      // Move o carro aleatoriamente
      lat += (Math.random() - 0.5) * 0.0005;
      lng += (Math.random() - 0.5) * 0.0005;

      marker.setLatLng([lat, lng]);
      map.panTo([lat, lng]);
    }

    // Atualiza a cada 2 segundos
    setInterval(simularMovimento, 2000);

function enviarAvaliacao() {
  alert("Obrigado pela sua contribuição! Sua avaliação foi enviada.");
}