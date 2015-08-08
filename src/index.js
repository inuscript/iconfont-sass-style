var extend = require("extend")

var partials = require("./partials")
var params = require("./params")

var render = function(map, fontVariable, useDefaultFlag){
  var scss = [
    partials.map(map, fontVariable, useDefaultFlag),
    partials.mixins(),
    partials.loader(fontVariable)
  ]
  return scss.join("\n\n")
}

var initOptions = function(opts, append){
  var item = extend({
    iconPrefix: undefined,
    fontVariable: "font",
    useDefaultFlag: true
  }, opts)
  return extend(item, append)
}

var renderAll = function(glyphs, fontName, fontPath, opts){
  var options = initOptions(opts)
  var fontParam = params(glyphs, fontName, fontPath, options.iconPrefix)
  return render(fontParam, options.fontVariable, options.useDefaultFlag)
}

module.exports = renderAll