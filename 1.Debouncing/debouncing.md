# Debouncing
Debouncing is a concept to delay function execution for some time.
## Real world scenario
In search text box, API call will be only fired when user finished writing.  
Here API call function is delayed for some time, and if there will be no input from user during that time frame, API call will be executed.
## Code
````html
<html>
  <head>
    <title>Debouncing</title>
  </head>
  <body>
    <input type="text" id="autoCompleteText" />
    <script>
      var timeout;

      document
        .getElementById("autoCompleteText")
        .addEventListener("keypress", function (event) {
          if (timeout) {
            clearTimeout(timeout);
          }
          let keyword = event.target.value + event.key;
          timeout = setTimeout(() => {
            search(keyword);
            timeout = undefined;
          }, 3000);
        });

      function search(keyword) {
        console.log(keyword);
      }
    </script>
  </body>
</html>
````