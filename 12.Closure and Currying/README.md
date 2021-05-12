# Closure and Currying

## Closure

A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

```javascript
function a() {
  var x = 5;
  function b() {
    console.log(x);
  }
  b();
}
a();

// Output:
// 5
```

Here function b() has access to variable x.

## Currying

Currying means that the closure does not have to receive all of it's arguments at once, but separately.

```javascript
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}

var add5 = makeAdder(5);

console.log(add5(2)); // 7
console.log(makeAdder(10)(5)); // 15
```
