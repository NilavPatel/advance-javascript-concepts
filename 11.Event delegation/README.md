# Event delegation

Capturing and bubbling allow us to implement one of most powerful event handling patterns called event delegation.

The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common parent.

In the handler we get event.target to see where the event actually happened and handle it.

```html
<html>
  <head>
    <title>Event Delegation</title>
  </head>
  <body>
    <div id="menu">
        <button data-action="save">Save</button>
        <button data-action="load">Load</button>
        <button data-action="search">Search</button>
    </div>
    </table>
    <script>
      document.getElementById("menu").addEventListener("click", function (e) {
        if (e.target.tagName.toLowerCase() == "button") {
          alert(e.target.dataset.action);
        }
      });
    </script>
  </body>
</html>
```

Another Example:

```html
<html>
  <head>
    <title>Event Delegation</title>
  </head>
  <body>
    <div id="container">
      <div class="pane">
        <h3>A</h3>
        <p>AAAA</p>
        <button class="remove-button">[x]</button>
      </div>
      <div class="pane">
        <h3>B</h3>
        <p>BBBB</p>
        <button class="remove-button">[x]</button>
      </div>
      <div class="pane">
        <h3>C</h3>
        <p>CCCC</p>
        <button class="remove-button">[x]</button>
      </div>
    </div>

    <script>
      container.onclick = function (event) {
        if (event.target.className != "remove-button") return;

        let pane = event.target.closest(".pane");
        pane.remove();
      };
    </script>
  </body>
</html>
```
