const games = [
  {
    name: "Minecraft",
    image: "https://picsum.photos/300/180?random=1",
    description: "بازی جهان‌باز و ساخت‌وساز"
  },
  {
    name: "GTA San Andreas",
    image: "https://picsum.photos/300/180?random=2",
    description: "بازی اکشن و جهان‌باز"
  },
  {
    name: "Counter Strike 2",
    image: "https://picsum.photos/300/180?random=3",
    description: "بازی تیراندازی آنلاین"
  },
  {
    name: "Valorant",
    image: "https://picsum.photos/300/180?random=4",
    description: "بازی شوتر تاکتیکی"
  },
  {
    name: "FIFA 23",
    image: "https://picsum.photos/300/180?random=5",
    description: "بازی فوتبال"
  },
  {
    name: "Roblox",
    image: "https://picsum.photos/300/180?random=6",
    description: "ساخت و تجربه بازی‌های مختلف"
  }
];

const gamesContainer = document.getElementById("games");
const search = document.getElementById("search");

function showGames(list) {
  gamesContainer.innerHTML = "";

  list.forEach(game => {
    gamesContainer.innerHTML += `
      <div class="card">
        <img src="${game.image}" alt="${game.name}">
        <h2>${game.name}</h2>
        <p>${game.description}</p>
      </div>
    `;
  });
}

showGames(games);

search.addEventListener("input", function () {
  const value = this.value.toLowerCase();

  const filtered = games.filter(game =>
    game.name.toLowerCase().includes(value)
  );

  showGames(filtered);
});
