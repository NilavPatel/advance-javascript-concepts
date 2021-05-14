# Prototypes

All JavaScript objects inherit properties and methods from a prototype.

```javascript
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");
```

Now adding new property to object constructor is not possible

```javascript
Person.nationality = "English";
```

The JavaScript prototype property also allows you to add new methods to objects constructors:

```javascript
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.name = function () {
  return this.firstName + " " + this.lastName;
};
```

## Prototypal inheritance

When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”.

```javascript
let animal = {
  eats: true,
};
let rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

rabbit.eats; // true
rabbit.jumps; // true
```
