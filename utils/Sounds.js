export default class Sounds {
    constructor() { }

    playGameTheme(gameTheme) {
        gameTheme.currentTime = 0;
        gameTheme.loop = true;
        gameTheme.volume = 0.5;
        gameTheme.play();
    }
}
