import { globalOptions } from "../utils/Options.js";

export default class DrawEngine {
    constructor(context) {
        this.context = context;
        this.index = 0;
        this.timeStamp = 0;
    }

    drawBackground(image, backgroundX) {
        this.context.drawImage(
            image,
            backgroundX + globalOptions.background.imgScaleWidth,
            0,
            globalOptions.background.imgScaleWidth,
            globalOptions.background.imgScaleHeight);

        this.context.drawImage(
            image,
            backgroundX,
            0,
            globalOptions.background.imgScaleWidth,
            globalOptions.background.imgScaleHeight);
    }

    drawFish(fish, image, frameId) {
        if (fish.falling) {
            this.context.save();
            this.context.translate(globalOptions.fish.x + globalOptions.fish.width / 2, fish.y + globalOptions.fish.height / 2);
            this.context.rotate(fish.rotationAngle * Math.PI / 360);
            this.context.drawImage(
                image,
                globalOptions.fish.frames[frameId].x,
                globalOptions.fish.frames[frameId].y,
                globalOptions.fish.frames[frameId].width,
                globalOptions.fish.frames[frameId].height,
                -(globalOptions.fish.width / 2),
                -(globalOptions.fish.height / 2),
                globalOptions.fish.width,
                globalOptions.fish.height)
            this.context.restore();
        } else {
            this.context.save();
            this.context.translate(globalOptions.fish.x + globalOptions.fish.width / 2, fish.y + globalOptions.fish.height / 2);
            this.context.rotate(fish.rotationAngle * Math.PI / 360);
            this.context.drawImage(
                image,
                globalOptions.fish.frames[frameId].x,
                globalOptions.fish.frames[frameId].y,
                globalOptions.fish.frames[frameId].width,
                globalOptions.fish.frames[frameId].height,
                -(globalOptions.fish.width / 2),
                -(globalOptions.fish.height / 2),
                globalOptions.fish.width,
                globalOptions.fish.height)
            this.context.restore();
        }

    }

    drawColumns(columnsArray, image) {
        for (let i = 0; i < columnsArray.length; i++) {

            this.context.drawImage(
                image,
                globalOptions.columns.topColumn.x,
                columnsArray[i].topColsy,
                globalOptions.columns.topColumn.width,
                columnsArray[i].topColsHeight,
                columnsArray[i].x,
                0,
                globalOptions.columns.width,
                columnsArray[i].topColdHeight)

            this.context.drawImage(
                image,
                globalOptions.columns.bottomColumn.x,
                columnsArray[i].bottomColsy,
                globalOptions.columns.bottomColumn.width,
                columnsArray[i].bottomColsHeight,
                columnsArray[i].x,
                globalOptions.canvas.height - columnsArray[i].bottomColdHeight,
                globalOptions.columns.width,
                columnsArray[i].bottomColdHeight);
        }
    }

    displayScore(scoreObj, image) {
        const scoreArr = scoreObj.score.toString().split('');
        const maxScoreArr = scoreObj.maxScore.toString().split('');

        this.context.drawImage(
            image,
            globalOptions.menuAssets.scorePanel.x,
            globalOptions.menuAssets.scorePanel.y,
            globalOptions.menuAssets.scorePanel.width,
            globalOptions.menuAssets.scorePanel.height,
            10,
            10,
            globalOptions.menuAssets.scorePanel.dislayWidth,
            globalOptions.menuAssets.scorePanel.dislayHeight);

        let currentScoreX = globalOptions.menuAssets.scoreNumbers.current.x;

        for (let i = 0; i < scoreArr.length; i++) {
            let number = scoreArr[i];
            this.context.drawImage(
                image,
                globalOptions.numbers[number].sx,
                globalOptions.numbers[number].sy,
                globalOptions.numbers[number].sWidth,
                globalOptions.numbers[number].sheight,
                currentScoreX,
                globalOptions.menuAssets.scoreNumbers.current.y,
                globalOptions.menuAssets.scoreNumbers.current.width,
                globalOptions.menuAssets.scoreNumbers.current.height,);

            currentScoreX += globalOptions.menuAssets.scoreNumbers.current.width;
        }

        let maxScoreX = globalOptions.menuAssets.scoreNumbers.max.x;

        for (let i = 0; i < maxScoreArr.length; i++) {
            let number = maxScoreArr[i];
            this.context.drawImage(
                image,
                globalOptions.numbers[number].sx,
                globalOptions.numbers[number].sy,
                globalOptions.numbers[number].sWidth,
                globalOptions.numbers[number].sheight,
                maxScoreX,
                globalOptions.menuAssets.scoreNumbers.max.y,
                globalOptions.menuAssets.scoreNumbers.max.width,
                globalOptions.menuAssets.scoreNumbers.max.height,);

            maxScoreX += globalOptions.menuAssets.scoreNumbers.max.width;
        }
    }

    drawButton(image, buttonType, canvas) {
        this.context.drawImage(
            image,
            buttonType.x,
            buttonType.y,
            buttonType.width,
            buttonType.height,
            (canvas.width / 2) - (buttonType.dislayWidth / 2),
            (canvas.height / 2) - (buttonType.displayheight / 2),
            buttonType.dislayWidth,
            buttonType.displayheight);
    }

    drawLoading() {
        this.context.fillStyle = "black";
        this.context.font = "bold 48px serif"
        this.context.fillText('Loading...', (globalOptions.canvas.width / 2) - 100, (globalOptions.canvas.height / 2), 200);
    }

}