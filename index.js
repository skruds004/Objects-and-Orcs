// const adventurer = {
// 	name: "Timothy",
// 	hitpoints: 10,
// 	belongings: ["sword", "potion", "Tums"],
//     companion: {
// 		name: "Velma",
// 		type: "Bat",
//         companion: {
// 			name: "Tim",
// 			type: "Parasite",
//             belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
// 		}  
// 	}
// };

// console.log(adventurer.belongings);
// console.log(adventurer.belongings[0]);

// for (let i=0; i < adventurer.belongings.length; i++) {
// 	console.log(adventurer.belongings[i]);
// }

// console.log(adventurer.companion);
// console.log(adventurer.companion.name);
// console.log(adventurer.companion.type);
// console.log(adventurer.companion.companion.type);
// console.log(adventurer.companion.companion.belongings[2]);

// const movies = [ { title: "Tokyo Story" },  { title: "Paul Blart: Mall Cop" }, { title: "L'Avventura" } ];
// console.log(movies[0]);
// console.log(movies[0].title);
// for (let i=0; i < movies.length; i++) {
// 	console.log(movies[i].title);
// }

// const foo = {
//     someArray:[1,2,3],
//     someObject: {
//         someProperty: 'oh hai!'
//     },
//     someMethod:()=>{
//         console.log('oh hai');
//     }
// };
// foo.someArray[0]; // 1
// foo.someObject.someProperty;
// foo.someMethod();
//^ Just a bunch of copy pasta

class Character {
    static eyeColors() {
        return ['blue', 'green', 'brown'];
    }
    constructor(name, age, eyes = 'green', hair = 'brown', lovesCats=true, lovesDogs) {
        this.legs = 2;
        this.arms = 2;
        this.name = name;
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
        this.lovesCats = lovesCats;
        this.lovesDogs = lovesDogs || false;
    }
    greet(otherCharacter) {
        console.log('Hi ' + otherCharacter + '!');
    }
    classyGreeting (otherClassyCharacter) {
        console.log('Greetings ' + otherClassyCharacter + '!');
    }
    setHair (hairColor) {
        this.hair = hairColor;
    }
    smite () {
        console.log('I smite thee you vile dude!');
    }
}

class Hobbit extends Character {
    constructor(name, age, eyes, hair) {
        super(name, age, eyes, hair);
        this.skills = ["Eating", "Luck", "Bravery"];
    }
    steal () {
        console.log('Wow assuming I\'m stealing...');
    }
    greet (otherCharacter) {
        console.log(`Hello  ${otherCharacter} .`);
    }
    smite () {
        super.smite();
        this.steal();
    }
}

class Dwarf extends Character {
    constructor(name, age, eyes, hair) {
        super(name, age, eyes, hair);
        this.skills = ["Fortitude", "Mining", "Grudging"];
    }
    drink () {
        console.log('*Glug Glug Glug*');
    }
    greet () {
        console.log('ROCK AND STONE');
    }
    smite () {
        super.smite();
        this.greet();
        this.drink();
    }
}

class Grippli extends Character {
    constructor(name, age, eyes) {
        super(name, age, eyes, 'no hair');
        this.skills = ["Jumping", "Camoflauge", "Scouting"];
    }
    jump () {
        console.log('*BOING*');
    }
    greet (otherCharacter) {
        console.log('Ribbit ' + otherCharacter.name + '.');
    }
    smite () {
        this.jump();
        super.smite();
    }
}

class Tome {
    constructor (maker, spellType, serialNum) {
      this.maker = maker;
      this.spellType = spellType || "burny";
      this.serialNum = serialNum;
    }
    cast () {
      console.log('Casting a spell!');
    }
  }

  class Factory {
    constructor (maker) {
      this.maker = maker;
      this.tomes = [];
    }
    generateTome (spellType) {
      const newTome = new Tome(this.maker, spellType, this.tomes.length);
      this.tomes.push(newTome);
    }
    findTome (index) {
      return this.tomes[index];
    }
  }
  
  const merlin = new Factory('Merlin');
  merlin.generateTome('Fire');
  merlin.generateTome('Water');
  merlin.generateTome('Earth');
  merlin.generateTome('Air');
  console.log(merlin);
  console.log(merlin.findTome(1));
  
  const gandalf = new Factory('Gandalf');
  gandalf.generateTome('Light');
  gandalf.generateTome('Dark');
  console.log(gandalf);
  console.log(gandalf.findTome(0));


  const stonyRock = new Dwarf('Stony Rock', 160, Character.eyeColors[1],'Rock');
  console.log(stonyRock);