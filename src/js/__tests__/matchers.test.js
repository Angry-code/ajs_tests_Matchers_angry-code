import { sortHeroes } from '../matchers';

const heroesInput = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
];
const heroesExpected = [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
];

test('sort heroes', () => {
    const heroesSort = sortHeroes(heroesInput);
    expect(heroesSort).toEqual(heroesExpected);
});