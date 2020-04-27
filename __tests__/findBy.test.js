/* eslint-disable import/extensions */
import findBy from '../src/main.js';


test('Функция показывает первую строку массива при поиске слова маг', () => {
  const arr = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];

  const findItem = findBy(arr, 'маг');
  expect(findItem).toEqual([{ name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' }]);
});

test('Функция показывает вторую строку массива при поиске заклинания', () => {
  const arr = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];

  const findItem = findBy(arr, 'заклинание');
  expect(findItem).toEqual([{ name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' }]);
});

test('Функция показывает третью строку массива при поиске слова урон', () => {
  const arr = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];

  const findItem = findBy(arr, 'урон');
  expect(findItem).toEqual([{ name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' }]);
});

test('При неверном поиске выдает ошибку', () => {
  const arr = [
    { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
    { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
  ];

  const findItem = findBy(arr, 'привет');
  expect(findItem).toEqual([]);
});
