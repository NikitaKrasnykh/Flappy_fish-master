import { globalOptions } from "../utils/Options.js";

export default class Background {
    constructor() { }

    setScaleFactors() {
        globalOptions.background.imgScaleFactor = globalOptions.background.imgheight / globalOptions.canvas.height;
        globalOptions.background.imgScaleHeight = Math.floor(globalOptions.background.imgheight / globalOptions.background.imgScaleFactor);
        globalOptions.background.imgScaleWidth = Math.floor(globalOptions.background.imgwidth / globalOptions.background.imgScaleFactor)
    }

}