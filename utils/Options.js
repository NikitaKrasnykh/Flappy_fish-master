export default class Options {
    constructor() { }

    loadImgAsset(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject;
            img.src = src;
        })
    }

    loadAudioAsset(src) {
        return new Promise((resolve) => {
            const sound = new Audio(src);
            resolve(sound);
        })
    }

    initialize(canvasWidth, canvasHeight) {

        this.fps = 60;

        this.canvas = {
            width: Math.max(canvasWidth, 360),
            height: Math.max(canvasHeight, 400)
        };

        this.canvasFreeSpaceHeight = this.canvas.height * 1 / 4;
        this.speedIndex = 2;

        this.fish = {
            src: './assets/whale.png',
            x: this.canvas.width / 6,
            y: this.canvas.height / 2,
            width: (this.canvasFreeSpaceHeight / 5) * 2,
            height: this.canvasFreeSpaceHeight / 5,
            sweemUpHeight: this.canvasFreeSpaceHeight / 2,
            frames: [
                {
                    x: 76,
                    y: 15,
                    width: 1264,
                    height: 615
                },
                {
                    x: 31,
                    y: 630,
                    width: 1303,
                    height: 584
                },
                {
                    x: 22,
                    y: 1214,
                    width: 1318,
                    height: 582
                },
                {
                    x: 25,
                    y: 1796,
                    width: 1323,
                    height: 580
                }
            ]
        };

        this.background = {
            src: './assets/background.png',
            x: 0,
            y: 0,
            imgheight: 1584,
            imgwidth: 4847
        };

        this.columns = {
            src: './assets/columns.png',
            speed: 3,
            aspectRatio: this.canvas.height / 728,
            width: this.fish.width * 2,
            height: 200,
            topColumn: {
                x: 334,
                y: 50,
                width: 152,
                height: 728
            },
            bottomColumn: {
                x: 103,
                y: 50,
                width: 152,
                height: 728
            }
        };

        this.menuAssets = {
            src: './assets/menu_assets.png',
            scorePanel: {
                x: 160,
                y: 18,
                width: 995,
                height: 1534,
                dislayWidth: this.canvasFreeSpaceHeight / 1.5,
                dislayHeight: this.canvasFreeSpaceHeight
            },
            scoreNumbers: {
                current: {
                    x: (this.canvasFreeSpaceHeight / 1.5) / 2,
                    y: this.canvasFreeSpaceHeight / 2.5,
                    width: (this.canvasFreeSpaceHeight / 6) / 2,
                    height: this.canvasFreeSpaceHeight / 10,
                },
                max: {
                    x: (this.canvasFreeSpaceHeight / 1.5) / 2,
                    y: this.canvasFreeSpaceHeight / 1.5,
                    width: (this.canvasFreeSpaceHeight / 6) / 2,
                    height: this.canvasFreeSpaceHeight / 10,
                }
            },
            startButton: {
                x: 1166,
                y: 936,
                width: 1188,
                height: 577,
                dislayWidth: this.canvas.width / 4,
                displayheight: this.canvasFreeSpaceHeight,
            },
            restartButton: {
                x: 1166,
                y: 316,
                width: 1188,
                height: 577,
                dislayWidth: this.canvas.width / 4,
                displayheight: this.canvasFreeSpaceHeight,
            }
        }

        this.numbers = [
            {
                sx: 2203,
                sy: 123,
                sWidth: 108,
                sheight: 163,
            },
            {
                sx: 1196,
                sy: 123,
                sWidth: 97,
                sheight: 163,
            },
            {
                sx: 1306,
                sy: 123,
                sWidth: 100,
                sheight: 163,
            },
            {
                sx: 1420,
                sy: 123,
                sWidth: 101,
                sheight: 163,
            },
            {
                sx: 1530,
                sy: 123,
                sWidth: 109,
                sheight: 163,
            },
            {
                sx: 1646,
                sy: 123,
                sWidth: 95,
                sheight: 163,
            },
            {
                sx: 1756,
                sy: 123,
                sWidth: 104,
                sheight: 163,
            },
            {
                sx: 1865,
                sy: 123,
                sWidth: 110,
                sheight: 163,
            },
            {
                sx: 1981,
                sy: 123,
                sWidth: 109,
                sheight: 163,
            },
            {
                sx: 2092,
                sy: 123,
                sWidth: 110,
                sheight: 163,
            }, 0
        ];

        this.sounds = {
            gameTheme: {
                src: './assets/game_theme.mp3'
            },
            impactSound: {
                src: './assets/impact.wav'
            },
            scoreGained: {
                src: './assets/score_gained.wav'
            }
        }
    }
}

let globalOptions = new Options()
export { globalOptions }