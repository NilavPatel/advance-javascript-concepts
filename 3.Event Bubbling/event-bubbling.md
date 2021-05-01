# Event Bubbling

Event bubbling is concept of event propagation in which most inner element's event handled first, then moving to outer element/elements.
<br>
Here in example, if user click on div3 then, first div3's click event will be handled, then div2's click event will be handled, and at last div1's click event will be handled.
<br>
So in short bubbling means, events handled from down to up.
<br>
Default event propagation type is Event bubbling.

## Code

```html
<html>
  <head>
    <title>Event Bubbling</title>
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
      document.getElementById("div1").addEventListener("click", function () {
        console.log("div1");
      });
      document.getElementById("div2").addEventListener("click", function () {
        console.log("div2");
      });
      document.getElementById("div3").addEventListener("click", function () {
        console.log("div3");
      });
    </script>
  </body>
</html>
```
