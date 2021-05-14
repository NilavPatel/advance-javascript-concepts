# Array Manipulation

## join()

join array with given string in parameter.
`join()` returns string.

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(","));
// Banana,Orange,Apple,Mango
```

## push()

Add new element to array.  
`push()` returns new array length.

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); //  Adds a new element ("Kiwi") to fruits
```

## pop()

Remove last element from array.  
`pop()` returns removed element.

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var element = fruits.pop();
console.log(element); // Mango
```

## shift()

Remove first element from array.  
`shift()` returns removed element.

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var element = fruits.shift();
console.log(element); // Banana
```

## unshift()

Add new element at first index.  
`unshift()` returns new array length.

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Kiwi"); // ["Kiwi", "Banana", "Orange", "Apple", "Mango"]
```

## length

Returns length of array.

## delete

Delete element from array. On delete that element changes to `undefined`.

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0]; // Changes the first element in fruits to undefined
```

## splice()

The `splice()` method can be used to add new items to an array or remove items.  
The first parameter defines the position where new elements should be added or removed.  
The second parameter defines how many elements should be removed.  
The rest of the parameters define the new elements to be added.  
The `splice()` method returns an array with the deleted items.

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
```

## slice()

The `slice()` will returns sub array of full array.
The first parameter defines the position where to start.  
The second parameter defines how many elements should be added in sub array.  
If only 1 parameter passed then it's starting from index 0.

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.slice(1, 2); // ["Orange", "Apple"]
```

## map()

Returns new array according to function

```javascript
var arr = [1, 2, 3, 4];
arr.map((x) => {
  return x + 1;
}); // [2, 3, 4, 5]
```

## reduce()

The `reduce()` method runs a function on each array element to produce (reduce it to) a single value.  
Not affecting to original array.

```javascript
var numbers1 = [1, 2, 3, 4];
var sum = numbers1.reduce((total, value) => {
  return total + value;
}); // 10
```

## filter()

The `filter()` method creates a new array with array elements that passes a test.
Not affecting to original array.

```javascript
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter((value) => {
  return value > 18;
}); // [45, 25]
```

## forEach()

The `forEach()` method calls a function (a callback function) once for each array element.
This will affect original array.

```javascript
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach((value) => {
  txt = txt + value + "<br>";
});
```

## every()

The `every()` method check if all array values pass a test.
Returns true or false.

```javascript
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every((value) => {
  return value > 18;
}); // false
```

## some()

The `some()` method check if any one array value pass a test.
Returns true or false.

```javascript
var numbers = [45, 4, 9, 16, 25];
var anyOneOver18 = numbers.some((value) => {
  return value > 18;
}); // true
```

## find()

Returns first array element that passes a test function.

```javascript
var numbers = [45, 4, 9, 16, 25];
var first = numbers.find((value) => {
  return value < 18;
}); // 4
```

## findIndex()

Returns index of first array element that passes a test function.

```javascript
var numbers = [45, 4, 9, 16, 25];
var firstIdx = numbers.findIndex((value) => {
  return value < 18;
}); // 1
```
