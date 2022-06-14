export default class Character {
  constructor(name) {
    const type = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (typeof name !== 'string') {
      throw new Error('Имя не является строкой');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('Минимальная длина имени 2 символа, макимальная до 10');
    }
    if (type.includes(values) === false) {
      throw new Error('Такого типа воина не существует');
    }
    this.type = type;
    this.name = name;
    this.health = 100;
    this.level = 1;
  }
}
