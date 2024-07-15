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
});

test('spare gives 28 points and there is juste ONE frame', () => {
    bowling.throwPins(5);
    bowling.throwPins(5);
    bowling.throwPins(5);
    bowling.throwPins(8);
    expect(bowling.score()).toBe(28);
});

test('strike gives 10 points with juste one throw', () => {
    bowling.throwPins(10);
    bowling.throwPins(5);
    bowling.throwPins(3);
    expect(bowling.score()).toBe(26);  
});  

test('10e frames is spare, gives one throw', () => {
    for (let i = 0; i < 21; i ++) {
        bowling.throwPins(5);
    }
    expect(bowling.score()).toBe(150);  
}); 

test('10e frames is strike, gives two throws', () => {
    for (let i = 0; i < 12; i ++) {
        bowling.throwPins(10);
    }
    expect(bowling.score()).toBe(300);  
})

