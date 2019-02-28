// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    return `Hello, my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(instrAttributes) {
    super(instrAttributes);
    this.specialty = instrAttributes.specialty;
    this.favLanguage = instrAttributes.favLanguage;
    this.catchPhrase = instrAttributes.catchPhrase;
  }
  demo(subject) {
    return `today we are learning about ${subject}`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }
}

class Student extends Person {
  constructor(studentAtributes) {
    super(studentAtributes);
    this.previousBackground = studentAtributes.previousBackground;
    this.className = studentAtributes.className;
    this.favSubjects = studentAtributes.favSubjects;
  }
  listsSubjects() {
    return this.favSubjects.join(', ');
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  springChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManager extends Instructor {
  constructor(pmAttributes) {
    super(pmAttributes);
    this.gradClassName = pmAttributes.gradClassName;
    this.favInstructor = pmAttributes.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}`;
  }
}

const cameron_macdonald = new Student({
  name: 'Cam',
  age: 58,
  location: 'Port Angeles, WA',
  gender: 'male',
  favLanguage: 'Javascript',
  className: 'WEB18',
  previousBackground: 'martial arts instructor, Honda tech, computer support tech',
  favSubjects: ['CSS', 'Javascript', 'golf', 'Scotland']
})

const joshz = new Student({
  name: "Josh Zieger",
  age: 35,
  gender: "Male",
  location: "Scranton, PA",
  previousBackground: "Food Safety Manager , Commercial Hydroponic Grower",
  className: "WEB15",
  favSubjects: ["CSS", "React", "Spaaaace!", "early american history"],
})

const brellin = new Student({
  name: 'Will Umstead',
  age: 26,
  location: 'Tuscola, Texas',
  gender: 'Male',
  previousBackground: 'Army',
  className: 'WEB18',
  favSubjects: ['PHP', 'CSS', 'JavaScript']
})


const bigKnell = new Instructor({
  name: 'Josh Knell',
  age: 35,
  location: 'USA',
  gender: 'male',
  favLanguage: 'Javascript',
  specialty: 'helping students understand',
  catchPhrase: 'Yeeessss!'
})

const joseph_thompson = new ProjectManager({
  name: 'Joseph Thompson',
  age: 32,
  location: 'deep south',
  gender: 'male',
  favLanguage: 'Javascript',
  specialty: 'keeping us calm',
  catchPhrase: 'Y\'all',
  gradClassName: 'WEBPT2',
  favInstructor: 'Josh Knell'
})


console.log(bigKnell.grade(cameron_macdonald, 'Javascript'));
console.log(joseph_thompson.standUp('WEB18'));
console.log(brellin.springChallenge('Javascript-IV'));
console.log(cameron_macdonald.listsSubjects());
console.log(joseph_thompson.debugsCode(joshz, 'Fortran'));