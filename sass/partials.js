var template = require("./template")
var jsToSassString = require("json-sass/lib/jsToSassString") // TODO: Fix if json-sass bug

module.exports.map = function(data, fontName, asDefault){
  var prefix = "$" + fontName + ": "
  var suffix = (asDefault) ? " !default;" : ";"
  return prefix + jsToSassString(data) + suffix
}

module.exports.mixin = function(){
  return template("mixin")
}

module.exports.load = function(fontVariable, functionName){
  functionName = functionName || "iconfont-generate-font"
  return "@include " + functionName + "(" + fontVariable + ");"
}