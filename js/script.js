const gallery = document.getElementById("player-gallery");

/* CREATE PLAYER CARDS */

for (const key in players) {
  const player = players[key];

  const card = document.createElement("div");

  card.classList.add("player-card");

  card.innerHTML = `
  
    <img src="${player.image}" alt="${player.name}">

    <h3>${player.name}</h3>

    <button onclick="showPlayer('${key}')">
      View Stats
    </button>

  `;

  gallery.appendChild(card);
}

function showPlayer(playerKey) {
  const player = players[playerKey];

  document.getElementById("info-pic").src = player.image;
  document.getElementById("info-name").textContent = player.name;
  document.getElementById("info-position").textContent = player.position;
  document.getElementById("info-wins").textContent = player.wins;
  document.getElementById("info-selections").textContent = player.selections;
  document.getElementById("info-bs1").textContent = player.bs1;
  document.getElementById("info-bs2").textContent = player.bs2;
  document.getElementById("info-bs3").textContent = player.bs3;
  document.getElementById("info-hometown").textContent = player.hometown;
  document.getElementById("info-nickname").textContent = player.nickname;

  // SHOW MODAL
  document.getElementById("player-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("player-modal").style.display = "none";


  //GOT FROM WEB
  window.onclick = function(event) {

  const modal = document.getElementById("player-modal");

  if (event.target === modal) {

    modal.style.display = "none";
  }
}

}
