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
  listsSubjects(favSubjects) {
    const result = favSubjects.values();
    for (const value of result) {
      return value;
    }
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  springChallenge(subject) {
    return ` ${this.name} has begun sprint challenge on ${subject}`;
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
    return `${name} debugs ${student.name}'s code on ${subject}`;
  }
}

