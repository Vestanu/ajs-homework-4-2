/* eslint-disable import/extensions */
import findBy from '../src/findBy.js';


test('Функция показывает первую строку массива при поиске слова маг', () => {
  const arr = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];

  const findItem = findBy('name', 'маг');
  expect(arr.filter(findItem)).toEqual([{ name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' }]);
});

test('Функция показывает вторую строку массива при поиске заклинания', () => {
  const arr = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];

  const findItem = findBy('name', 'заклинание');
  expect(arr.filter(findItem)).toEqual([{ name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' }]);
});

test('Функция показывает третью строку массива при поиске слова урон', () => {
  const arr = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];

  const findItem = findBy('name', 'урон');
  expect(arr.filter(findItem)).toEqual([{ name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' }]);
});

test('При неверном поиске выдает пустой массив', () => {
  const arr = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];

  const findItem = findBy('name', 'привет');
  expect(arr.filter(findItem)).toEqual([]);
});
