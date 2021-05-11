# localStorage and sessionStorage and cookie

## localStorage

Accessible from browser's new tab/Window and also accessible browser close.  
No expiration date.  
Storage limit is 5MB.

```javascript
localStorage.setItem(key, value);
localStorage.getItem(key);
localStorage.removeItem(key);
localStorage.length; // get numbers if all keys
localStorage.key(idx); // get key at index;
localStorage.clear(); // clear all items
```

## sessionStorage

Accessible from browser's new tab/Window but erased after browser close.  
No expiration date.  
Storage limit is 5MB.

```javascript
sessionStorage.setItem(key, value);
sessionStorage.getItem(key);
sessionStorage.removeItem(key);
sessionStorage.length; // get numbers if all keys
sessionStorage.key(idx); // get key at index;
sessionStorage.clear(); // clear all items
```

## cookie

Accessible from browser's new tab/Window and also accessible browser close.  
Has expiration date.  
Storage limit is 4KB.
Cookies are sent back to server with subsequent requests.

```javascript
document.cookie =
  "username=Nilav Patel; expires=Thu, 28 Oct 1992 12:00:00 UTC; path=/";
```

Use below function:

```javascript
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
```
