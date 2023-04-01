export default function renderGamer() {}

const gameId = +window.location.href.split("=")[1];
const home = document.querySelector(".jogo");

async function fetchGamesApi(url) {
  const fetchGame = await fetch(url);
  const gamesData = await fetchGame.json();

  creatHome(gamesData);
}
if (gameId) {
  await fetchGamesApi("../gamesapi.json");
}
function creatHome(games) {
  const game = games.find((item) => item.id === gameId);
  if (game) {
    home.innerHTML = /*html*/ `
	<div>
          <video
            src="${game.srcVideo}"
            muted
            poster="${game.srcNome}"
            autoplay
            loop
          >
            <source src="${game.srcVideo}" />
          </video>
          <div class="jogo-texto flex">
            <img
              src="../${game.srcName}"
              width="348"
              height="196"
              alt="imgem do jogo"
            />
            <div>
              <h2>${game.title}</h2>
              <p>Trailer</p>
            </div>
          </div>
        </div>

        <div class="jogo-info">
          <div>
            <img
              class="nome-jogo"
              src="../${game.srcName}"
              width="1056"
              height="594"
              alt="${game.title}"
            />
          </div>

          <div class="jogo-info-detalhe">
            <span class="jogo-span-intro">Jogo Base</span>
            <div class="detalhe-span flex">
              <span>${game.title}</span>
              <span class="preco-antigo">${game.title}</span>
              <span>${game.title}</span>
            </div>

            <div class="detalhe-btn">
              <a href="#Baixe">Baixe Agora</a>
              <a href="#Baixe">Adicionar ao Carrinho</a>
              <a href="#Baixe" class="btn-detalhe-list flex"
                ><img
                  src="../img/produtos/mais.svg"
                  width="24"
                  height="25"
                  alt="mais"
                />
                Adicionar a Lista</a
              >
            </div>

            <div>
              <div class="detalhe-extra flex">
                <p>Empresa</p>
                <p>${game.title}</p>
              </div>
              <div class="detalhe-extra flex">
                <p>Desenvolvedor</p>
                <p>${game.title}</p>
              </div>
              <div class="detalhe-extra flex">
                <p>Data de lançamento</p>
                <p>${game.title}</p>
              </div>
              <div class="detalhe-extra flex">
                <p>${game.title}</p>
                <img
                  src="../img/produtos/logo-w.svg"
                  width="24"
                  height="25"
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>`;
  }
}
