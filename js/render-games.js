export default function renderGamer() {}

const home = document.querySelector(".jogo");
const windowHref = +window.location.href.split("=")[1];

async function fetchGamesApi(url) {
  const fetchGame = await fetch(url);
  const jsonGame = await fetchGame.json();

  creatHome(jsonGame);
}

fetchGamesApi("../gamesapi.json");

function creatHome(game) {
  home.innerHTML = /*html*/ `
	<div>
          <video
            src="${game[windowHref].srcVideo}"
            muted
            poster="${game[windowHref].srcNome}"
            autoplay
            loop
          >
            <source src="${game[windowHref].srcVideo}" />
          </video>
          <div class="jogo-texto flex">
            <img
              src="../${game[windowHref].srcName}"
              width="348"
              height="196"
              alt="imgem do jogo"
            />
            <div>
              <h2>${game[windowHref].title}</h2>
              <p>Trailer</p>
            </div>
          </div>
        </div>

        <div class="jogo-info">
          <div>
            <img
              class="nome-jogo"
              src="../${game[windowHref].srcName}"
              width="1056"
              height="594"
              alt="${game[windowHref].title}"
            />
          </div>

          <div class="jogo-info-detalhe">
            <span class="jogo-span-intro">Jogo Base</span>
            <div class="detalhe-span flex">
              <span>${game[windowHref].title}</span>
              <span class="preco-antigo">${game[windowHref].title}</span>
              <span>${game[windowHref].title}</span>
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
                <p>${game[windowHref].title}</p>
              </div>
              <div class="detalhe-extra flex">
                <p>Desenvolvedor</p>
                <p>${game[windowHref].title}</p>
              </div>
              <div class="detalhe-extra flex">
                <p>Data de lançamento</p>
                <p>${game[windowHref].title}</p>
              </div>
              <div class="detalhe-extra flex">
                <p>${game[windowHref].title}</p>
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
