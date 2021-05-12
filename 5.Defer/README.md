# Defer

In javscript, scripts can't see DOM elements below them.  
So if script file is bulky and loaded in top of the page, then it will block the page untill whole script getting loaded.

```html
<p>...content before script...</p>

<script src="script.js"></script>

<!-- This isn't visible until the script loads -->
<p>...content after script...</p>
```

So here as a workaround scirpt needs to be loaded at the end of page. so whole page is visible to script.

```html
<html>
  <body>
    <!-- DOM content -->
    <script src="script.js"></script>
  </body>
</html>
```

The `defer` attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads in the background, and then runs when the DOM is fully built.

```html
<p>...content before script...</p>

<script defer src="script.js"></script>

<!-- visible to scirpt -->
<p>...content after script...</p>
```

# aysnc

The `sync` attribute tells browser not to wait for script to load, once it is loaded then browser stops untill its execution and then continue HTML parsing.

```html
<p>...content before script...</p>

<script async src="script.js"></script>

<!-- visible to scirpt -->
<p>...content after script...</p>
```
