import Game from "./game.js"
import { globalOptions } from "./utils/Options.js";

const canvas = document.getElementById("canvas");
const visibleScreenWidth = document.documentElement.clientWidth;
globalOptions.initialize(visibleScreenWidth, visibleScreenWidth / 2.5);
canvas.width = globalOptions.canvas.width;
canvas.height = globalOptions.canvas.height;

const game = new Game(canvas);

game.createLoadScreen();

const startGame = () => {
    canvas.removeEventListener('mousedown', startGame);
    game.displayLoad();
    game.loadGameAssets()
        .then(([background, fish, columns, menu, impactSound, scoreGainedSound, gameTheme]) => {
            game.backgroundImg = background;
            game.fishImg = fish;
            game.columnsImg = columns;
            game.scoreImg = menu;
            game.impactSound = impactSound;
            game.scoreGained = scoreGainedSound;
            game.gameTheme = gameTheme;
        })
        .then(() => {
            game.gameStart();
            
            document.addEventListener('keydown', (evt) => {
                if (evt.key === " " || evt.key === "Spacebar") {
                    game.sweemUp();
                }
            });
            
            canvas.addEventListener('click', () => {
                game.sweemUp();
            });
        })
}



canvas.addEventListener('mousedown', startGame);
