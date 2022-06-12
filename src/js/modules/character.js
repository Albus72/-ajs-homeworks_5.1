export default class Character {
  constructor(name) {
    if (typeof name !== 'string') {
      throw new Error('Тип имени не является строкой');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('Минимальная длина имени 2 символа, макимальная до 10');
    }

    this.name = name;
    this.health = 100;
    this.level = 1;
  }
}
