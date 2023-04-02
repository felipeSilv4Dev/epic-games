export default function renderGamer() {}

const creatHome = (games) => {
  const html = document.querySelector("html title");
  const home = document.querySelector(".jogo");
  const body = document.querySelector("body");
  const homeH1 = document.querySelector(".jogo-h1");
  const gameId = +window.location.href.split("=")[1];

  const game = games.find((item) => item.id === gameId);

  if (game) {
    html.innerText = game.title;
    body.className = game.class;
    homeH1.innerHTML = /*html*/ `	
		<h1>${game.title}</h1>
		<span class="jogo-span-intro">${game.point}</span>
		`;
    home.innerHTML = /*html*/ `
		<div>
		<video
		src="../${game.srcVideo}"
		muted
		poster="../${game.srcName}"
		autoplay
		loop
		>
		<source src="../${game.srcVideo}" />
		</video>
		<div class="jogo-texto flex">
		<img
		src="../${game.srcImg5}"
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

const creatStory = (games) => {
  const gameId = +window.location.href.split("=")[1];
  const game = games.find((item) => item.id === gameId);
  const storypIntro = document.querySelector(".story-p-intro");
  const storyTexto = document.querySelector(".story-texto");

  storypIntro.innerHTML = /*html*/ ` <p>
	Vencedor de mais de 175 prêmios de Jogo do Ano e avaliado com mais de
	250 notas máximas, ${game.title} esse jogo  é uma
	história épica de honra e lealdade no alvorecer dos tempos modernos.
	Inclui Modo História e ${game.title} Online.
</p>

<div class="story-p-info flex">
	<div class="story-info">
		<p>Gêneros</p>
		<div class="story-info-caracteristicas flex">
			<span>Ação</span>
			<span>${game.characteristics}</span>
			<span>Mundo Aberto</span>
		</div>
	</div>

	<div class="story-info">
		<p>Características</p>
		<div class="story-info-caracteristicas flex">
		<span>Divertido</span>
		<span>História</span>
		<span>Mundo Aberto</span>
		<span> Jogos para Um Jogador</span>
		</div>
	</div>
</div>`;
  console.log(storyTexto);
  storyTexto.innerHTML = /*html*/ `
<h2>${game.title}</h2>
<p>Inclui ${game.title}: Modo História.</p>
<p>
	Vencedor de mais de 175 prêmios de Jogo do Ano e avaliado com mais de
	250 notas máximas,${game.title} é uma história épica de
	honra e lealdade no alvorecer dos tempos modernos.
</p>
<p>
	${game.title} é um RPG de ação e aventura em mundo aberto
	ambientado na megalópole de Night City, onde você é um mercenário
	cyberpunk envolvido em uma intensa luta pela sobrevivência. Com
	diversas melhorias e conteúdo adicional gratuito, personalize o seu
	personagem e o seu estilo de jogo conforme aceita trabalhos, construa
	uma reputação e desbloqueie melhorias. Seus relacionamentos e suas
	escolhas moldarão a história e o mundo ao seu redor. Aqui nascem as
	lendas. Qual será a sua?
</p>
<p>
	${game.title} também inclui o mundo compartilhado Receba
	uma coleção de itens gratuitos, incluindo novas armas de fogo e corpo
	a corpo, personalizações adicionais e muito mais. fronteira dos
	Estados Unidos. Monte um acampamento, cavalgue com ou sem um bando e
	explore tudo, das montanhas nevadas no norte aos pântanos do sul, de
	postos remotos a fazendas agitadas e cidades vibrantes. Vá atrás de
	recompensas, cace, pesque e negocie, procure tesouros exóticos, toque
	sua própria destilaria clandestina de Moonshine ou se torne
	Naturalista para aprender os segredos do reino animal e muito mais num
	mundo rico em detalhes. Inclui todos os recursos, conteúdos e
	melhorias adicionados desde o lançamento.
</p>

<div class="story-texto-img">
	<div>
		<img
			src="../${game.srcImg1}"
			width="518"
			height="295"
			alt="imagem do jogo ${game.title}"
		/>
	</div>
	<div>
		<img
			src="../${game.srcImg2}"
			width="518"
			height="295"
			alt="imagem do jogo ${game.title}"
		/>
	</div>
	<div>
		<img
			src="../${game.srcImgp}"
			width="1056"
			height="594"
			alt="imagem do jogdo ${game.title}"
		/>
	</div>
	<div>
		<img
			src="../${game.srcImg3}"
			width="518"
			height="295"
			alt="imagem do jogo ${game.title}"
		/>
	</div>
	<div>
		<img
			src="../${game.srcImg4}"
			width="518"
			height="295"
			alt="imagem do jogo ${game.title}"
		/>
	</div>
</div>
`;
};

const fetchGamesApi = async (url) => {
  const fetchGame = await fetch(url);
  const gamesData = await fetchGame.json();

  if (gamesData.length) {
    creatHome(gamesData);
    creatStory(gamesData);
  }
};

await fetchGamesApi("../gamesapi.json");
