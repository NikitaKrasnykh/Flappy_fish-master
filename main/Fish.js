import { globalOptions } from "../utils/Options.js";

export default class Fish {
    constructor() {
        this.y = globalOptions.fish.y;
        this.SweemUpDuration = 200;
        this.sweemUpHeight = globalOptions.fish.sweemUpHeight;
        this.fallingStartTime = Date.now();
        this.sqr = 1.3;
        this.quantizer = 800;
        this.FallingAcceleration = 2;
        this.JumpAcceleration = 0.5;
        this.rotationAngle = 0;
        this.rotationSpeed = 45 / this.SweemUpDuration;
    }

    drown() {
        this.falling = true;
    }

    sweemUp() {
        this.falling = false;
        this.sweemUpTime = Date.now();
        this.sweemUpEndTime = Date.now() + this.SweemUpDuration;
        this.fallingStartTime = Date.now();
    }

}