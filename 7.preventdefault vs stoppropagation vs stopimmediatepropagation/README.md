# preventDefault vs stopPropagation vs stopImmediatePropagation

## preventDefault

Stop browser's default behaviour.  
In below example, on click of link it will not open new tab with test.html page.

```html
<a href="/test.html" target="_blank" id="link1">Link 1</a>

<script>
  document.getElementById("link1").addEventListener("click", function (e) {
    e.preventDefault();
  });
</script>
```

## stopPropagation

Stop event propagation in event bubling/capturing.  
In below example when click on link, it will not propogate event to parent div.

```html
<div id="div2">
  <a id="link2">Link 2</a>
</div>
<script>
  document.getElementById("link2").addEventListener("click", function (e) {
    console.log("from link2");
    e.stopPropagation();
  });
  document.getElementById("div2").addEventListener("click", function (e) {
    console.log("from div2");
  });
</script>
```

## stopImmediatePropagation

Stop event listners on the same dom, when DOM element have multiple listners on the same element.  
In below example when click on link, it will not propogate event to another function.

```html
<a id="link3">Link 3</a>
<script>
  document.getElementById("link3").addEventListener("click", function (e) {
    console.log("from link13---1");
    e.stopImmediatePropagation();
  });
  document.getElementById("link3").addEventListener("click", function (e) {
    console.log("from link3---2");
  });
</script>
```
