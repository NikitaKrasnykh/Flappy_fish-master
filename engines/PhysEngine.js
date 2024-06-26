export default class PhysEngine {
    constructor() { }

    moveFish(fish) {
        let deltaDown = fish.FallingAcceleration * Math.pow((Date.now() - fish.fallingStartTime) / fish.quantizer, fish.sqr);
        fish.y += deltaDown;
        fish.rotationAngle += (fish.rotationSpeed * deltaDown) * 2;
        if (fish.rotationAngle > 45) {
            fish.rotationAngle = 45;
        }
        if (!fish.falling) {
            if (Date.now() > fish.sweemUpEndTime) {
                fish.drown();
                return
            }
            let deltaUp = (Date.now() - fish.sweemUpTime) * (fish.sweemUpHeight / fish.SweemUpDuration);
            fish.sweemUpTime = Date.now();
            fish.y -= deltaUp;
            fish.rotationAngle -= (fish.rotationSpeed * deltaUp) * 2;
            if (fish.rotationAngle < -45) {
                fish.rotationAngle = -45;
            }
        }
        if (fish.y < 0) {
            fish.y = 0;
        }
    }

}