# var vs let vs const

## var

`var` are globally scoped or function/locally scoped.  
`var` can be declared again.

```javascript
var tester = "hey hi";

function newFunction() {
  var hello = "hello";
  var tester = "hello instead";
}

console.log(tester); // hello instead
console.log(hello); // error: hello is not defined
```

## let

`let` has block scope. So a variable declared in a block with let is only available for use within that block.

```javascript
if (true) {
  let hello = "say Hello";
  console.log(hello); // "say Hello instead"
}
console.log(hello); // hello is not defined
```

## const

`const` has block scope.
Value can be assinged only once.

```javascript
const greeting = "say Hi";
greeting = "say Hello instead"; // error: Assignment to constant variable.
```
