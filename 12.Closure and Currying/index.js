function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  
  var add5 = makeAdder(5);
  
  console.log(add5(2)); // 7
  console.log(makeAdder(10)(5)); // 15