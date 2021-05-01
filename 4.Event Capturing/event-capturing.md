# Event Capturing

Event capturing is concept of event propagation in which most outer element's event handled first, then moving to inner element/elements.
<br>
Here in example, if user click on div3 then, first div1's click event will be handled, then div2's click event will be handled, and at last div3's click event will be handled.
<br>
So in short capturing means, event handled from up to down.

## How to add useCapture?

To add event capturing pass parameter `useCapture` as true in `addEventListener`.

```javascript
addEventListener(event, function, useCapture);
```

## Code

```html
<html>
  <head>
    <title>Event Capturing</title>
  </head>
  <body>
    <div
      id="div1"
      style="
        height: 150px;
        width: 150px;
        border: 1px solid black;
        padding-left: 25px;
      "
    >
      div1
      <div
        id="div2"
        style="
          height: 100px;
          width: 100px;
          border: 1px solid black;
          padding-left: 25px;
        "
      >
        div2
        <div
          id="div3"
          style="
            height: 50px;
            width: 50px;
            border: 1px solid black;
            padding-left: 25px;
          "
        >
          div3
        </div>
      </div>
    </div>
    <script>
      document.getElementById("div1").addEventListener(
        "click",
        function () {
          console.log("div1");
        },
        true
      );
      document.getElementById("div2").addEventListener(
        "click",
        function () {
          console.log("div2");
        },
        true
      );
      document.getElementById("div3").addEventListener(
        "click",
        function () {
          console.log("div3");
        },
        true
      );
    </script>
  </body>
</html>
```
