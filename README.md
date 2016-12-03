# cssobj-helper-showcss
Show css text from style tag, style id, chrome dev tools, or cssobj result.


## **Use in DevTools**

- include below script into html head:

``` html
<script src="https://rawgit.com/cssobj/cssobj-helper-showcss/master/showcss.js"></script>
```

- or paste below code into console:

``` javascript
function showcss(s,e){"string"==typeof s&&(s=document.getElementById(s)),"object"==typeof s&&s&&s.cssdom&&(s=s.cssdom),s||(s=$0);var t=s.sheet||s.styleSheet;if(t.cssText)return t.cssText;for(var o="",c=t.cssRules||t.rules,n=0,l=c.length;n<l;n++)o+=c[n].cssText+"\n";e?e(o):console.log(o)}
```

Then can show css for any `<style>` tag:

``` javascript
showcss()  // show last selected style
showcss($0)  // show last selected style

showcss('styleTagId')  // using ID of style tag

// show css from cssobj result
cssobj(obj, {onUpdate: showcss})

```

