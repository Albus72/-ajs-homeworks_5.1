import Character from '../character';

test('Character name - number', () => {
  const name = 1000;

  function characterFunc() {
    return new Character(name);
  }

  expect(characterFunc).toThrow('Имя не является строкой');
});

test('Character name 1 letter', () => {
  const name = 'P';

  function characterFunc() {
    return new Character(name);
  }

  expect(characterFunc).toThrow(
    'Минимальная длина имени 2 символа, макимальная до 10',
  );
});

test('Character name 11 letters', () => {
  const name = 'Мефистофель';

  function characterFunc() {
    return new Character(name);
  }

  expect(characterFunc).toThrow(
    'Минимальная длина имени 2 символа, макимальная до 10',
  );
});

test('Character appropriate', () => {
  const values = {
    type: 'Bowman'
    name: 'ALex',
    health: 100,
    level: 1,
  };

  const result = new Character('ALex');

  expect(result).toEqual(values);
});
