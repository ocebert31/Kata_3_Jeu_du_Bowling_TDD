const countPoints = require('./bowling');

test('0 points when the game has just started', () => {
    expect(countPoints(0)).toBe(0);
});

test('number of points when X pins fall', () => {
    expect(countPoints(5)).toBe(5);
});