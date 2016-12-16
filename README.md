# cssobj-helper-showcss
Show css text from style tag, style id, chrome dev tools, or **cssobj result**.


## **Install**

- **include in html**

``` html
<script src="https://unpkg.com/cssobj-helper-showcss"></script>
// showcss function is now available
```

- **bookmarklet**

In Chrome, press <kbd>Ctrl+D</kbd>, popup the favorite dialog, click **Modify**, paste in **URL** as below:

``` javascript
javascript:showcss=function(){function e(e){return function(s){'string'==typeof s&&(s=document.getElementById(s)),'object'==typeof s&&s&&s.cssdom&&(s=s.cssdom),s||(s=$0);var t=s.sheet||s.styleSheet;if(t.cssText)return t.cssText;for(var n='',o=t.cssRules||t.rules,r=0,c=o.length;r<c;r++)n+=o[r].cssText+'\n';return e?e(n):console.log(n)}}return e}();
```

## **Usage**

Then can show CSS in any `<style>` tag:

``` javascript
showcss()()  // console.log the last selected style

showcss(console.log)($0)  // totally same as above

showcss(alert)('tagID')  // alert style of tagID

// write the css into html
showcss(csstext => div.innerHTML = csstext )(dom)

// show css from cssobj, with each UPDATE
cssobj(obj, {onUpdate: showcss( csstext => div.innerHTML = csstext )})

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

