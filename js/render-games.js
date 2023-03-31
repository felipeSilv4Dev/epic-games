export default function renderGamer() {}

const home = document.querySelector(".home");
const windowHref = +window.location.href.split("=")[1];

async function fetchGamesApi(url) {
  const fetchGame = await fetch(url);
  const jsonGame = await fetchGame.json();

  return creatHome(jsonGame);
}

function creatHome(game) {
  home.innerHTML = /*html*/ `
	
  	<div class="home-menu flex">
  	<div class="input flex">
  		<img src="../img/home/lupa.svg" width="20" height="20" alt="lupa" />
  		<input type="text" name="search" placeholder="Search Store" />
  	</div>
  	<a href="#discover">Discover </a>
  	<a href="#browser">Browser</a>
  	<a href="#news">News</a>
  </div>

  <div class="jogo-h1 flex">
  	<h1>${game[windowHref].title}</h1>
  	<span class="jogo-span-intro">${game[windowHref].point}</span>
  </div>

  <div class="jogo">
  	<div>
  		<video
  			src="${game[windowHref].srcVideo}"
  			muted
  			poster="${game[windowHref].srcImgName}"
  			autoplay
  			loop
  		>
  			<source src="${game[windowHref].srcVideo}" />
  		</video>
  		<div class="jogo-texto flex">
  			<img
  				src="${game[windowHref].srcImg5}"
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
  				src="${game[windowHref].srcGif}"
  				width="1056"
  				height="594"
  				alt="${game[windowHref].title}"
  			/>
  		</div>
  		<div class="jogo-info-detalhe">
  			<span class="jogo-span-intro">Jogo Base</span>
  			<div class="detalhe-span flex">
  				<span>${game[windowHref].number}</span>
  				<span class="preco-antigo">₹${game[windowHref].oldPrice}</span>
  				<span>₹${game[windowHref].newPrice}</span>
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
  					<p>${game[windowHref].company}</p>
  				</div>
  				<div class="detalhe-extra flex">
  					<p>Desenvolvedor</p>
  					<p>${game[windowHref].developer}</p>
  				</div>
  				<div class="detalhe-extra flex">
  					<p>Data de lançamento</p>
  					<p>${game[windowHref].date}</p>
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
  	</div>
  </div>`;
}

fetchGamesApi("/gamesapi.json");
