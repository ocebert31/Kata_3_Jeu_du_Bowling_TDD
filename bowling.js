// 10 frames
// chaque frame a 2 lancés
// Faire tomber X quilles donnent X points
// Faire tomber 10 quilles en une frame rapporte 10 + lancer suivant
// Faire tomber 10 quilles au premier lancé d une frame rapporte 10 + 2 lancés suivants
// Si 10e frame fait un spare => un lancé supplémentaire
// Si 10e frame fait strike => deux lancés supplémentaire

// sum.js

function reset() {
    jeu = [];
}

function score() {
    let score = 0
    jeu.forEach((frame, index) => {
        score += frameScore(frame);
        let nextFrame = jeu[index + 1];
        if(frameIsSpare(frame) && nextFrame) {
            score += nextFrame.firstThrow;
        }
    });
    return score
}

function throwPins(pins) {
    let lastFrame = jeu[jeu.length - 1];
    if (!lastFrame || frameIsComplete(lastFrame)) {
        jeu.push({firstThrow: pins});
    } else {
        lastFrame.secondThrow = pins;
    }
}

function frameIsComplete(frame) {
    return frame.secondThrow;
}

function frameScore(frame) {
    return frame.firstThrow + (frame.secondThrow || 0);
}

function frameIsSpare(frame) {
    return frame.firstThrow < 10 && frameScore(frame) === 10;
}
 
module.exports = { score: score, throwPins: throwPins, reset: reset};