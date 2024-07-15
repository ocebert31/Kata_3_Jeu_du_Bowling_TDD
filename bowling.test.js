const bowling = require('./bowling');

beforeEach(() => {
    bowling.reset();
});

test('0 points when the game has just started', () => {
    expect(bowling.score()).toBe(0);
});

test('number of points when X pins fall', () => {
    bowling.throwPins(5);
    expect(bowling.score()).toBe(5);
});

test('spare gives 10 points plus next throw', () => {
    bowling.throwPins(5);
    bowling.throwPins(5);
    bowling.throwPins(5);
    expect(bowling.score()).toBe(20);
    console.log(jeu)
});

test('spare gives 28 points and there is juste ONE frame', () => {
    bowling.throwPins(5);
    bowling.throwPins(5);
    bowling.throwPins(5);
    bowling.throwPins(8);
    expect(bowling.score()).toBe(28);
    console.log(jeu)
});

test('strike gives 10 points with juste one throw', () => {
    bowling.throwPins(10);
    bowling.throwPins(5);
    bowling.throwPins(3);
    console.log(jeu)
    expect(bowling.score()).toBe(26);
    
});


