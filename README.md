# cssobj-helper-showcss
Show css text from style tag, style id, chrome dev tools, or cssobj result.


## **Use in DevTools**

- include below script into html head:

``` html
<script src="https://unpkg.com/cssobj-helper-showcss@1.0.1/showcss.js"></script>
```

- or paste below code into console:

``` javascript
function showcss(e){return function(s){"string"==typeof s&&(s=document.getElementById(s)),"object"==typeof s&&s&&s.cssdom&&(s=s.cssdom),s||(s=$0);var t=s.sheet||s.styleSheet;if(t.cssText)return t.cssText;for(var n="",o=t.cssRules||t.rules,c=0,r=o.length;c<r;c++)n+=o[c].cssText+"\n";return e?e(n):console.log(n)}}
```

Then can show css for any `<style>` tag:

``` javascript
showcss()()  // show last selected style
showcss()($0)  // show last selected style

showcss()('styleTagId')  // using ID of style tag

// show css from cssobj result
cssobj(obj, {onUpdate: showcss( csstext => textID.innerHTML = csstext )})

```

## API

### showcss (callback: (string)->any ) (source: dom|string|result|any) -> any

Display css text from **source**, and call **callback** with the text.

### **callback** can be

  - empty: will use `console.log` as callback, means output css text into console.

  - function: will call the function with `callback(str)`, and return the result

#### **source** can be

  - empty: last selected style tag from DevTools

  - string: style tag ID

  - dom: style tag dom

  - result: cssobj result object

