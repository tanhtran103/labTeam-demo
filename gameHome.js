const gameData = [
    {
        thumbnail: 'Games/Archery/thumbnail.jpg',
        Title: 'Game Archery',
        Description: 'This is the game of Archery',
        Link: 'Games/Archery/index.html'
    },
    {
        thumbnail: 'Games/DinosaurMemory/thumbnail.jpg',
        Title: 'Dinosaur Memory',
        Description: 'This is the game of Dinosaur Memory',
        Link: 'Games/DinosaurMemory/index.html'
    },
    {
        thumbnail: 'Games/Menja/thumbnail.png',
        Title: 'Menja Game',
        Description: 'This is the game of Coloron Game',
        Link: 'Games/Menja/index.html'
    }
    ,
    {
        thumbnail: 'Games/BattleCityTANK/thumbnail.gif',
        Title: 'BattleCityTANK',
        Description: 'This is the game of Coloron Game',
        Link: 'Games/BattleCityTANK/index.html'
    },
    {
        thumbnail: 'Games/SnakeGame/thumbnail.png',
        Title: 'Snake Game',
        Description: 'This is the game of Sanke Game',
        Link: 'Games/SnakeGame/index.html'
    }
]

const renderCard = document.getElementById('renderCard');
const renderGame = () => {
    gameData.map((game) => {
        renderCard.innerHTML += `
            <div class="card col-lg-4">
                <img  src="${game.thumbnail}" alt="Game 1" class="card-img-top " style="height: 200px; object-fit: contain;">
                <div class="card-body">
                    <h5 class="card-title">${game.Title}</h5>
                    <p class="card-text">${game.Description}</p>
                    <a href="${game.Link}" class="btn btn-primary">Play</a>
                </div>
            </div>
        `
    }
    )
}
renderGame();