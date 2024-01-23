// 1.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

class Movie {
  constructor(title, studio, rating = 'PG') {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movies) {
    return movies.filter((movie) => movie.rating === 'PG');
  }
}

const movie = new Movie('Casino Royal', 'Eon Productions', 'PG13');

let movie1 = new Movie('Pirates of the Caribbean', 'Guvi', 'R');
let movie2 = new Movie('Superman', 'WB', 'U/A');
let movie3 = new Movie('Batman', 'Guvi', 'PG');

let movies = [movie, movie1, movie2, movie3];

const getPGMovie = Movie.getPG(movies);
console.log(getPGMovie);

//2.https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
class Circle {
  constructor(radius = 1.0, color = 'red') {
    this._radius = radius;
    this._color = color;
  }

  set radius(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  set color(color) {
    this._color = color;
  }

  get color() {
    return this._color;
  }

  toString() {
    return `Circle [radius = ${this._radius} , color = ${this._color}]`;
  }

  getArea() {
    return Math.PI * Math.pow(this._radius, 2);
  }

  getCircumference() {
    return 2 * Math.PI * this._radius;
  }
}

const circle = new Circle(2, 'red');
const circle1 = new Circle(5, 'yellow');

console.log('Task 2 ' + circle.toString());
console.log('Area:', circle.getArea());
console.log('Circumference:', circle.getCircumference());

//3.Write a “person” class to hold all the details.

class Person {
  constructor(firstName, lastName, age, department, email, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.department = department;
    this.email = email;
    this.city = city;
  }
  getPersonalDetails() {
    return `Name: ${this.firstName} ${this.lastName}
      age: ${this.age}
      department: ${this.department}
      email: ${this.email}
      city: ${this.city}`;
  }
}
let person = new Person('AD', 'S', 24, 'cse', 'ad@gmail.com', 'coimbatore');

console.log('Task 3 ' + person.getPersonalDetails());

//4. write a class to calculate the Uber price.
class UberPrice {
  constructor(distance, duration, baseFare, costPerKM, costPerMinute) {
    this.distance = distance;
    this.duration = duration;
    this.baseFare = baseFare;
    this.costPerKM = costPerKM;
    this.costPerMinute = costPerMinute;
  }

  calculatePrice() {
    return (
      this.baseFare +
      this.distance * this.costPerKM +
      this.duration * this.costPerMinute
    );
  }
}

const uber = new UberPrice(2, 15, 30, 3, 2);
console.log('Task 4 ' + uber.calculatePrice());
