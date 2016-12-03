function showcss (dom, callback) {
  if(typeof dom=='string') dom = document.getElementById(dom)
  if(typeof dom=='object' && dom && dom.cssdom) dom = dom.cssdom
  if(!dom) dom = $0
  var sheet = dom.sheet || dom.styleSheet
  if (sheet.cssText) return sheet.cssText

  var str = ''
  var rules = sheet.cssRules || sheet.rules
  for (var i = 0, len = rules.length; i < len; i++) {
    str += rules[i].cssText + '\n'
  }
  if(!callback) console.log(str)
  else callback(str)
}
