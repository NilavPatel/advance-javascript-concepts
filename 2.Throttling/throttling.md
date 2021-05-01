# Throttling
Throttling is a concept to stop execution of same function for certain period of time.
## Real world scenario
For 'Add To Cart' button, user will click on button and after that user will not be able to click on button 
untill certain period of time.  
Here once item is added to cart, then addToCart function will not be called again for certain period of time.  
<br>
**Another Example:**  
If there is any method called on page resize event then that method needs to be called with throttling concept, which will reduce the function execution numbers.
## Code
````html
<html>
  <head>
    <title>Throttling</title>
  </head>
  <body>
    <input type="button" id="addToCart" value="Add To Cart" />
    <div id="itemsCount"></div>
    <script>
      var timeout;
      var itemsCount = 0;

      document
        .getElementById("addToCart")
        .addEventListener("click", function (event) {
          if (timeout) {
            return;
          }
          addItemToCart();
          timeout = setTimeout(() => {
            timeout = undefined;
          }, 3000);
        });

      function addItemToCart(keyword) {
        itemsCount++;
        document.getElementById("itemsCount").innerHTML = itemsCount;
      }
    </script>
  </body>
</html>
````