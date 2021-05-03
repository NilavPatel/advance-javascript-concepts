# Async Await

## Async

The keyword `async` before a function makes the function return a promise:

```javascript
async function getMessage() {
  return "Hello";
}

getMessage().then(
  function (data) {
    alert(data);
  },
  function (error) {
    alert(error);
  }
);
```

## Await

The keyword `await` before a function makes the function wait for a promise:

```javascript
async function setMessage() {
  let promise = new Promise(function (myResolve, myReject) {
    setTimeout(() => {
      myResolve("Hello world");
    }, 3000);
  });
  var message = await promise;
  document.getElementById("div1").innerHTML = message;
}
setMessage();
```

Async and Await are used in ajax calls.

```javascript
async function doAjax(args) {
  return $.ajax({
    url: ajaxUrl,
    type: "GET",
  });
}

// Here async function is required to use await
(async function () {
  const result = await doAjax();
})();
```
