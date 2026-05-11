let playerList = document.getElementById("player-list");

playerList.onchange = function () {
  let selected = this.value;

  document.getElementById("info-name").textContent = playerData[selected].name;
  document.getElementById("info-position").textContent = playerData[selected].position;
  document.getElementById("info-wins").textContent = playerData[selected].wins;
  document.getElementById("info-selections").textContent = playerData[selected].selections;
  document.getElementById("info-bs1").textContent = playerData[selected].bs1;
  document.getElementById("info-bs2").textContent = playerData[selected].bs2;
  document.getElementById("info-bs3").textContent = playerData[selected].bs3;
  document.getElementById("info-hometown").textContent = playerData[selected].hometown;
  document.getElementById("info-nickname").textContent = playerData[selected].nickname;
  document.getElementById("info-pic").textContent = playerData[selected].nickname;
  document.getElementById("info-pic").src = "img/" + selected + ".jpg";
  document.getElementById("info-pic").alt = playerData[selected].name;
};
