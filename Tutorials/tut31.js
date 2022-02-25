console.log("es 6 classes and inheritance.js");

// class is the blueprint or template

class Employee {
  constructor(givenName, givenExperience, givenDivision) {
    this.name = givenName;
    this.experience = givenExperience;
    this.division = givenDivision;
  }

  slogan() {
    return `I am ${this.name} and this company is the best`;
  }

  joiningYear() {
    return 2020 - this.experience;
  }

  static add(a, b) {
    return a + b;
  }
}
// if you want to create new template with some same properties that you mentioned in 1 st template than create new class extends 1st template name got the point
class Programmer extends Employee {
  constructor(givenName, givenExperience, givenDivision, language, github) {
    // what super is do that it run the  1st constructor that we inheritaed from parent and do rest of work it is imp you have to include it in react also.
    super(givenName, givenExperience, givenDivision);
    this.language = language;
    this.github = github;
  }

  favoriteLanguage() {
    if (this.division === "Lays") {
      return true;
    } else {
      return false;
    }
  }

  static multiply(a, b) {
    return a * b;
  }
}

// harry = new Employee("Harry", 56, "Division");
// console.log(harry.joiningYear());
// console.log(Employee.add(34, 5));
rohan = new Programmer("Rohan", 3, "Lays", "Go", "Rohan420", "bts");
console.log(rohan);
// console.log(rohan.favoriteLanguage());
// console.log(Programmer.multiply(5, 7));
