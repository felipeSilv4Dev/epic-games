export default function gamesId() {}
const gamesEl = document.querySelectorAll(".produtos-games");

async function fetchGamesApi() {
  const response = await fetch("./gamesapi.json");
  const gamesData = await response.json();

  function renderDicount() {
    gamesEl.forEach((element) => {
      if (element.classList.contains("discount")) {
        element.innerHTML = gamesData
          .filter((item) => !!item.discount)
          .map((game) => {
            return (game = ` <div class="games">
	
					<a href="./jogos/games.html?id=${game.id}">
	
					 <img
						 src="${game.src}"
						 width="213"
						 height="284"
						 alt="${game.title}"
					 />
	
					</a>
	
					<h2>${game.title}</h2>
					
					<div class="games-preco flex">
	
					 <span>-${game.discount}%</span> <span class="preco-antigo">₹${game.oldPrice}</span>
					 <span>₹${game.newPrice}</span>
	
					</div>
	
					</div> `);
          });
      }
    });
  }
  renderDicount();

  function renderPopular() {
    gamesEl.forEach((element) => {
      if (element.classList.contains("popular")) {
        element.innerHTML = gamesData
          .filter((item) => !!item.popular)
          .map((game) => {
            return (game = ` 
						<div class="games">
					<a href="./jogos/games.html?id=${game.id}">
					 <img
						 src="${game.src}"
						 width="213"
						 height="284"
						 alt="${game.title}"
					 />
					</a>
					<h2>${game.title}</h2>
					<div class="games-preco flex">
					 <span>-${game.percent}%</span> <span class="preco-antigo">₹${game.oldPrice}</span>
					 <span>₹${game.newPrice}</span>
					</div>
					</div> `);
          });
      }
    });
  }
  renderPopular();

  function renderOrder() {
    gamesEl.forEach((element) => {
      if (element.classList.contains("order")) {
        element.innerHTML = gamesData
          .filter((item) => !!item.order)
          .map((game) => {
            return (game = ` 
						<div class="games">
						<a href="./jogos/games.html?id=${game.id}">
						<img
						src="./${game.src}"
						width="213"
						height="284"
						alt="${game.title}"
						/>
						</a>
						<h2>${game.title}</h2>
						<div class="games-preco flex">
						<span>-${game.order}%</span> <span class="preco-antigo">₹${game.oldPrice}</span>
						<span>₹${game.newPrice}</span>
						</div>
						</div> `).replace(",", "");
          });
      }
    });
  }
  renderOrder();
}
fetchGamesApi();
