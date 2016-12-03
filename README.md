# cssobj-helper-showcss
Show css text from style tag, style id, chrome dev tools, or cssobj result.


## **Use in DevTools**

- include below script into html head:

``` html
<script src="https://rawgit.com/cssobj/cssobj-helper-showcss/master/showcss.js"></script>
```

- or paste below code into console:

``` javascript
function showcss(e,s){"string"==typeof e&&(e=document.getElementById(e)),"object"==typeof e&&e&&e.cssdom&&(e=e.cssdom),e||(e=$0);var t=e.sheet||e.styleSheet;if(t.cssText)return t.cssText;for(var o="",c=t.cssRules||t.rules,n=0,r=c.length;n<r;n++)o+=c[n].cssText+"\n";return s?s(o):console.log(o)}
```

Then can show css for any `<style>` tag:

``` javascript
showcss()  // show last selected style
showcss($0)  // show last selected style

showcss('styleTagId')  // using ID of style tag

// show css from cssobj result
cssobj(obj, {onUpdate: showcss})

```

## API

### showcss(source: dom|string|result|any, callback: (string)->any ) -> any

Display css text from **source**, and call **callback** with the text.

#### **source** can be

  - empty: last selected style tag from DevTools

  - string: style tag ID

  - dom: style tag dom

  - result: cssobj result object

### **callback** can be

  - empty: will use `console.log` as callback, means output css text into console.

  - function: will call the function with `callback(str)`, and return the result
