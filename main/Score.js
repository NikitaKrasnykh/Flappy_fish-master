export default class Score {
    constructor(storedScore, context) {
        this.maxScore = storedScore;
        this.context = context;
        this.score = 0;
    }

    scoreIncrease() {
        this.score += 1;
        if (this.score > this.maxScore) {
            this.maxScore = this.score;
            localStorage.setItem('max_score', this.maxScore);
        }
    }

    resetScore() {
        this.score = 0;
    }

}