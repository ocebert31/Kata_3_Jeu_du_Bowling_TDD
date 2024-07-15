// 10 frames
// chaque frame a 2 lancés
// Faire tomber X quilles donnent X points
// Faire tomber 10 quilles en une frame rapporte 10 + lancer suivant
// Faire tomber 10 quilles au premier lancé d une frame rapporte 10 + 2 lancés suivants
// Si 10e frame fait un spare => un lancé supplémentaire
// Si 10e frame fait strike => deux lancés supplémentaire

function reset() {
    jeu = [];
}

function score() {
    let score = 0;
    jeu.forEach((frame, index) => {
        if (index >= 10) {
            return;
        }
        score += frameScore(frame);
        score += addBonus(frame, index);
    });
    return score;
}

function addBonus(frame, index) {
    let nextFrame = jeu[index + 1];
    let afterNextFrame = jeu[index + 2];
    let bonus = 0;
    if(frameIsStrike(frame) && nextFrame) {
        bonus += frameScore(nextFrame);
        bonus += consecutiveStrike(nextFrame, afterNextFrame);
    } else if(frameIsSpare(frame) && nextFrame) {
        bonus += nextFrame.firstThrow;
    }
    return bonus;
}

function consecutiveStrike(nextFrame, afterNextFrame) {
    if(frameIsStrike(nextFrame) && afterNextFrame) {
        return afterNextFrame.firstThrow;
    }
    return 0;
}

function throwPins(pins) {
    let lastFrame = jeu[jeu.length - 1];
    if (!lastFrame || frameIsComplete(lastFrame)) {
        let newFrame = { firstThrow: pins };
        jeu.push(newFrame);
        scoreFrameWhenIsStrike(newFrame);
    } else {
        lastFrame.secondThrow = pins;
    }
}

function scoreFrameWhenIsStrike(newFrame) {
    if (frameIsStrike(newFrame)) {
        newFrame.secondThrow = 0;
    }
}

function frameIsComplete(frame) {
    return frame.secondThrow || frameIsStrike(frame);
}

function frameScore(frame) {
    return frame.firstThrow + (frame.secondThrow || 0);
}

function frameIsSpare(frame) {
    return frame.firstThrow < 10 && frameScore(frame) === 10;
}

function frameIsStrike(frame) {
    return frame.firstThrow === 10;
}
 
module.exports = { score: score, throwPins: throwPins, reset: reset};