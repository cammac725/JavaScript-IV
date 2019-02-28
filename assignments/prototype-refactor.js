/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


class GameObject {
  constructor(attrs) {
    this.createdAt = attrs.createdAt;
    this.name = attrs.name;
    this.dimensions = attrs.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}


class CharacterStats extends GameObject {
  constructor(charAttrs) {
    super(charAttrs);
    this.healthPoints = charAttrs.healthPoints;
  }
  takeDamage() {
    return `${this.name} took damage`;
  }
}


class Humanoid extends CharacterStats {
  constructor(humanAttrs) {
    super(humanAttrs);
    this.team = humanAttrs.team;
    this.weapons = humanAttrs.weapons;
    this.language = humanAttrs.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}


class Hero extends Humanoid {
  constructor(heroAttrs) {
    super(heroAttrs);
    this.damage = heroAttrs.damage;
  }
  attack() {
    villain.healthPoints = villain.healthPoints - hero.damage;
    return `${this.name} attacked ${villain.name} for ${this.damage}`;
  }
}


class Villain extends Humanoid {
  constructor(villAttrs) {
    super(villAttrs);
    this.damage = villAttrs.damage;
  }
  attack() {
    hero.healthPoints = hero.healthPoints - hero.damage;
    return `${this.name} attacked ${hero.name} for ${this.damage}`;
  }
}


// Test you work by un-commenting these 3 objects and the list of console logs below:

const villain = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 1,
    height: 2,
  },
  healthPoints: 10,
  name: 'Gooby',
  team: 'Black Deal',
  weapons: [
    'Black Cudgel',
  ],
  damage: 2,
  language: 'Goblin',
});

const hero = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 3,
  },
  healthPoints: 15,
  name: 'Carver',
  team: 'Green Patrol',
  weapons: [
    'Tickling Knife',
  ],
  damage: 3,
  language: 'Common Tongue',
});

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});



console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.\

console.log(hero.attack(villain));
console.log(villain.healthPoints);


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
