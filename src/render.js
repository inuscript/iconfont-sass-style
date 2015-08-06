var extend = require("extend")

var partials = require("./partials")
var params = require("./params")

var render = function(map, fontVariable, useDefaultFlag){
  var scss = [
    partials.map(map, fontVariable, useDefaultFlag),
    partials.mixins(),
    partials.load(fontVariable)
  ]
  return scss.join("\n\n")
}

module.exports = function(glyphs, fontName, fontPath, opts){
  var options = extend({
    iconPrefix: undefined,
    fontVariable: "font",
    useDefaultFlag: true
  }, opts)
  var fontParam = params(glyphs, fontName, fontPath, options.iconPrefix)
  return render(fontParam, options.fontVariable, options.useDefaultFlag)
}