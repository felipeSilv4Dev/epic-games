export default function renderGamer() {}

const creatHome = (games) => {
  const home = document.querySelector(".jogo");
  const homeH1 = document.querySelector(".jogo-h1 h1");
  const body = document.querySelector("body");
  const gameId = +window.location.href.split("=")[1];

  const game = games.find((item) => item.id === gameId);

  if (game) {
    body.className = game.class;
    homeH1.innerHTML = /*html*/ game.title;
    home.innerHTML = /*html*/ `
			<div>
							<video
								src="../${game.srcVideo}"
								muted
								poster="../${game.srcNome}"
								autoplay
								loop
							>
								<source src="../${game.srcVideo}" />
							</video>
							<div class="jogo-texto flex">
								<img
									src="../${game.srcName}"
									width="348"
									height="196"
									alt="jogo ${game.title}"
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
									src="../${game.srcGif}"
									width="1056"
									height="594"
									alt="jogo ${game.title}"
								/>
							</div>
		
							<div class="jogo-info-detalhe">
								<span class="jogo-span-intro">Jogo Base</span>
								<div class="detalhe-span flex">
									<span>-${game.percentage}%</span>
									<span class="preco-antigo">₹${game.oldPrice}</span>
									<span>₹${game.newPrice}</span>
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
										<p>${game.company}</p>
									</div>
									<div class="detalhe-extra flex">
										<p>Desenvolvedor</p>
										<p>${game.company}</p>
									</div>
									<div class="detalhe-extra flex">
										<p>Data de lançamento</p>
										<p>${game.date}</p>
									</div>
									<div class="detalhe-extra flex">
										<p>Plataforma</p>
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
};

const fetchGamesApi = async (url) => {
  const fetchGame = await fetch(url);
  const gamesData = await fetchGame.json();

  if (gamesData.length) {
    creatHome(gamesData);
  }
};

await fetchGamesApi("../gamesapi.json");
