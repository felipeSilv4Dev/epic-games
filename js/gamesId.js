// export default function gamesId() {}

const gamesEl = document.querySelectorAll(".produtos-games");
const ItensEl = document.querySelectorAll(".itens");
const freeImgEl = document.querySelector(".free-img");
const produtosItemEl = document.querySelector(".produtos-item-2");
const freeImg2El = document.querySelector(".free-img-2");

async function fetchGamesApi() {
  // const response = await fetch("./gamesapi.json");
  // const gamesData = await response.json();
  // function renderDicount() {
  //   gamesEl.forEach((element) => {
  //     if (element.classList.contains("discount")) {
  //       element.innerHTML = gamesData
  //         .filter((item) => !!item.discount)
  //         .map((game) => {
  //           // return /*html */ ` <div class="games">
  //           // 	<a href="./jogos/games.html?id=${game.id}">
  //           // 	<img
  //           // 	src="${game.src}"
  //           // 	width="213"
  //           // 	height="284"
  //           // 	alt="${game.title}"
  //           // 	/>
  //           // 	</a>
  //           // 	<h2>${game.title}</h2>
  //           // 	<div class="games-preco flex">
  //           //  <span>-${game.discount}%</span> <span class="preco-antigo">₹${game.oldPrice}</span>
  //           //  <span>₹${game.newPrice}</span>
  //           //  </div>
  //           // </div> `;
  //         })
  //         .join("");
  //     }
  //   });
  // }
  //   renderDicount();
  //   function renderPopular() {
  //     gamesEl.forEach((element) => {
  //       if (element.classList.contains("popular")) {
  //         element.innerHTML = gamesData
  //           .filter((item) => !!item.popular)
  //           .map((game) => {
  //             return /*html */ `
  // 						<div class="games">
  // 					<a href="./jogos/games.html?id=${game.id}">
  // 					 <img
  // 						 src="${game.src}"
  // 						 width="213"
  // 						 height="284"
  // 						 alt="${game.title}"
  // 					 />
  // 					</a>
  // 					<h2>${game.title}</h2>
  // 					<div class="games-preco flex">
  // 					 <span>-${game.percent}%</span> <span class="preco-antigo">₹${game.oldPrice}</span>
  // 					 <span>₹${game.newPrice}</span>
  // 					</div>
  // 					</div> `;
  //           })
  //           .join("");
  //       }
  //     });
  //   }
  //   renderPopular();
  //   function renderOrder() {
  //     gamesEl.forEach((element) => {
  //       if (element.classList.contains("order")) {
  //         element.innerHTML = gamesData
  //           .filter((item) => !!item.order)
  //           .map((game) => {
  //             return /*html */ `
  // 						<div class="games">
  // 						<a href="./jogos/games.html?id=${game.id}">
  // 						<img
  // 						src="./${game.src}"
  // 						width="213"
  // 						height="284"
  // 						alt="${game.title}"
  // 						/>
  // 						</a>
  // 						<h2>${game.title}</h2>
  // 						<div class="games-preco flex">
  // 						<span>-${game.order}%</span> <span class="preco-antigo">₹${game.oldPrice}</span>
  // 						<span>₹${game.newPrice}</span>
  // 						</div>
  // 						</div> `;
  //           })
  //           .join("");
  //       }
  //     });
  //   }
  //   renderOrder();
  //   function renderItens() {
  //     ItensEl.forEach((item) => {
  //       item.innerHTML = gamesData
  //         .filter((item) => !!item.item)
  //         .map((game) => {
  //           return /*html */ `
  // 				 <div class="itens-conteudo">
  // 				 <a href="./jogos/games.html?id=${game.id}">
  // 						<img
  // 							src="./${game.srcFree}"
  // 							width="353"
  // 							height="198"
  // 							alt="imagem do jogo need for speed"
  // 						/>
  // 					</a>
  // 					<h2>${game.title}</h2>
  // 					<p>
  // 					${game.description}
  // 					</p>
  // 					<span>₹${game.newPrice}</span>
  // 				</div>
  // 				`;
  //         })
  //         .join("");
  //     });
  //   }
  //   renderItens();
  //   function renderImgFree() {
  //     freeImgEl.innerHTML = gamesData
  //       .filter((item) => !!item.free)
  //       .map((game) => {
  //         return /*html */ `
  // 				<div class="img-conteudo">
  // 				<div>
  // 					<img
  // 						src="./${game.srcFree}"
  // 						width="450"
  // 						height="253"
  // 						alt="imagem do jogo ${game.title}"
  // 					/>
  // 				</div>
  // 				<a class="free-btn-1" href="./jogos/games.html?id=${game.id}">Saiba Mais</a>
  // 				<div class="img-info">
  // 					<h3>${game.title}</h3>
  // 					<p>23:00 prazo final</p>
  // 				</div>
  // 			</div>
  // 			<div class="img-conteudo">
  // 				<div>
  // 					<img
  // 						src="./${game.srcFree2}"
  // 						width="450"
  // 						height="253"
  // 						alt="imagem do jogo boderlands"
  // 					/>
  // 				</div>
  // 				<a class="free-btn" href="./jogos/games.html?id=${game.id}">Saiba Mais</a>
  // 				<div class="img-info">
  // 					<h3 class="img-info-h3">Desbloquea em 9:30 Am</h3>
  // 				</div>
  // 			</div>
  // 				`;
  //       })
  //       .join("");
  //   }
  //   renderImgFree();
  //   function renderProdutosItem2() {
  //     produtosItemEl.innerHTML = gamesData
  //       .filter((item) => !!item.produtosItem)
  //       .map((game) => {
  //         return (
  //           /*html */
  //           `<div class="item-2">
  // 	 <div>
  // 		 <a href="./jogos/games.html?id=${game.id}">
  // 			 <img
  // 				 src="./${game.srcProdutos}"
  // 				 width="704"
  // 				 height="396"
  // 				 alt="imagem do jogo ${game.title}"
  // 			 />
  // 		 </a>
  // 	 </div>
  // 	 <h2>${game.title}</h2>
  // 	 <p>${game.description}</p>
  //  </div>
  //  <div class="item-2">
  // 	 <div>
  // 		 <a href="./jogos/games.html?id=${game.id}">
  // 			 <img
  // 				 src="./${game.srcProdutos2}"
  // 				 width="704"
  // 				 height="396"
  // 				 alt="imagem do jogo fortnite"
  // 			 />
  // 		 </a>
  // 	 </div>
  // 	 <h2>${game.title}</h2>
  // 	 <p>${game.description}</p>
  //  </div>`
  //         );
  //       })
  //       .join("");
  //   }
  //   renderProdutosItem2();
  //   function renderFree() {
  //     freeImg2El.innerHTML = gamesData
  //       .filter((item) => !!item.forFree)
  //       .map((game) => {
  //         return /*html*/ `
  // 				<div class="img-conteudo-2">
  // 				<div>
  // 				<a href="./jogos/games.html?id=${game.id}">
  //               <img
  //                 src="./${game.src}"
  //                 width="220"
  //                 height="315"
  //                 alt="imagem do jogo ${game.title}"
  //               />
  // 							</a>
  // 							</div>
  // 							<div class="img-info-2">
  //               <h3>${game.title}</h3>
  //               <p>Grátis ${game.date}</p>
  // 							</div>
  // 							</div>
  // 					`;
  //       })
  //       .join("");
  //   }
  //   renderFree();
}
// fetchGamesApi();
