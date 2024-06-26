import { globalOptions } from "../utils/Options.js";

export default class Columns {
    constructor() {
        this.x = 0;
        this.width = globalOptions.columns.width;
        this.columns = [];
        this.startTime = Date.now();
        this.columnCreationPeriod = 1000;
    }

    createColumns() {
        if ((Date.now() - this.startTime) > this.columnCreationPeriod) {
            let topColumndHeight = Math.random() * (globalOptions.canvas.height - globalOptions.canvasFreeSpaceHeight);
            let topColumnSHeight = topColumndHeight / globalOptions.columns.aspectRatio;

            let bottomColumndHeight = (globalOptions.canvas.height - globalOptions.canvasFreeSpaceHeight) - topColumndHeight;
            let bottomColumnSHeight = bottomColumndHeight / globalOptions.columns.aspectRatio;

            let newColumn = {
                topColsy: globalOptions.columns.topColumn.height - topColumnSHeight + globalOptions.columns.topColumn.y,
                topColsHeight: topColumnSHeight,
                topColdHeight: topColumndHeight,

                bottomColsy: globalOptions.columns.bottomColumn.y,
                bottomColsHeight: bottomColumnSHeight,
                bottomColdHeight: bottomColumndHeight,
            }
            newColumn.x = globalOptions.canvas.width;
            this.columns.push(newColumn);
            this.startTime = Date.now();
        }

    }

    moveColumns() {
        for (let i = this.columns.length - 1; i >= 0; i--) {
            this.columns[i].x -= (globalOptions.columns.width * 4) / globalOptions.fps;
            if ((this.columns[i].x + globalOptions.columns.width) < 0) {
                this.columns.shift();
            }
        }
    }


}