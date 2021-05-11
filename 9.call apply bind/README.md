# call apply bind

## call

Call invokes the function and allows you to pass in arguments one by one.

```javascript
var car = { color: "blue" };

function getColor() {
  console.log(this.color);
}

getColor.call(car); // print "blue"
```

## apply

Apply invokes the function and allows you to pass in arguments as an array.

```javascript
var car = { color: "blue" };

function getColor() {
  console.log(this.color);
}

getColor.apply([car]); // print "blue"
```

## bind

Bind returns a new function, allowing you to pass in a this array and any number of arguments.

```javascript
var car = { color: "blue" };

function getColor() {
  console.log(this.color);
}

var printColor = getColor.bind(car);
printColor(); // print "blue"
```
