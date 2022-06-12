import Character from '../character';

test('Character name number', () => {
  const name = 1000;

  function characterFunc() {
    return new Character(name);
  }

  expect(characterFunc).toThrow('Имя должно быть строкой');
});

test('Character name 1 letter', () => {
  const name = 'P';

  function characterFunc() {
    return new Character(name);
  }

  expect(characterFunc).toThrow('Имя менее 2 символов');
});

test('Character name 11 letters', () => {
  const name = 'Мефистофель';

  function characterFunc() {
    return new Character(name);
  }

  expect(characterFunc).toThrow('Имя более 10 символов');
});

test('Character name 11 letters', () => {
  const values = {
    name: 'ALex',
    health: 100,
    level: 1,
  };

  const result = new Character('ALex');

  expect(result).toEqual(values);
});
