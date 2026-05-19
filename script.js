const gallery = document.getElementById("player-gallery");

/* LOOPS THROUGH ALL PLAYERS*/
for (const key in players) {
  /*STORES DATA*/
  const player = players[key];
/*CREATES A CARD DIV*/
  const card = document.createElement("div");
/*GIVES IT A CLASS FOR CSS*/
  card.classList.add("player-card");

  /* GOLD BORDER CONDITION FROM WEB */

  if (player.wins > 5) {
    card.classList.add("legend-card");

    const badge = document.createElement("div");

    badge.classList.add("legend-badge");

    badge.textContent = "Yankees Legend";

    card.appendChild(badge);
  }
  /*END OF GOLD BORDER FROM WEB */
  
  /*INSERTS HTML AND PLAYER VALUES INSIDE*/
  /*RUNS KEY WHEN BUTTON CLICKED*/  
  card.innerHTML = `
  
    <img src="${player.image}" alt="${player.name}">
  

    <h3>${player.name}</h3>
    <button onclick="showPlayer('${key}')">
      View Stats
    </button>

  `;
/*PUTS CARD IN THE GALLERY*/
  gallery.appendChild(card);
}

/*FROM DEMO*/
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

/*CLOSES MODAL WHEN CLICKED*/
function closeModal() {
  document.getElementById("player-modal").style.display = "none";
}

