🚌 BusTrack
BusTrack é um site desenvolvido para auxiliar usuários de transporte público a consultarem horários de ônibus, visualizarem rotas e acompanharem a localização do ônibus em tempo real, promovendo melhorias na mobilidade urbana e alinhado aos princípios da ODS 11 (Cidades e Comunidades Sustentáveis).

📌 Funcionalidades
Consulta de linhas de ônibus por estado e município.

Exibição de tabela com horários e linhas disponíveis.

Página de detalhes com rota da linha.

Mapa com simulação em tempo real do deslocamento do ônibus.

Avaliação do ponto de ônibus pelo usuário.

Interface responsiva e amigável, utilizando Bootstrap.

Mapa interativo com Leaflet.js.

🛠️ Tecnologias Utilizadas
HTML5

CSS3

JavaScript

Bootstrap 5

Leaflet.js


📂 Estrutura do Projeto
pgsql
Copiar
Editar
/
├── index.html              → Página principal com seleção de estado/município e tabela de linhas
├── linha0034.html          → Página de detalhes de uma linha (exemplo)
├── script.js               → Scripts para carregar dados e simular localização
├── municipios.json         → Lista de municípios por estado (usado para preenchimento dinâmico)

▶️ Como Usar
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/bustrack.git
Navegue até o diretório:

bash
Copiar
Editar
cd bustrack
Abra o arquivo index.html no navegador.

💡 Recomendado: use uma extensão como Live Server no VS Code para abrir com servidor local, principalmente se o projeto carregar arquivos JSON.
