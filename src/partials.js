var template = require("./template")
var jsToSassString = require("json-sass/lib/jsToSassString") // TODO: Fix if json-sass bug

module.exports.map = function(params, fontName, asDefault){
  var prefix = "$" + fontName + ": "
  var suffix = (asDefault) ? " !default;" : ";"
  return prefix + jsToSassString(params) + suffix
}

module.exports.mixins = function(){
  return template("mixins")
}

module.exports.load = function(fontVariable, functionName){
  functionName = functionName || "iconfont-generate-font"
  fontVariable = "$" + fontVariable
  return "@include " + functionName + "(" + fontVariable + ");"
}