var extend = require("extend")

var partials = require("./partials")
var params = require("./params")

var render = function(map, includes, fontVariable, useDefaultFlag){
  var scss = []
  if(includes.indexOf("map") !== -1){
    scss.push(partials.map(map, fontVariable, useDefaultFlag))
  }
  if(includes.indexOf("mixins") !== -1){
    scss.push(partials.mixins())
  }
  if(includes.indexOf("loader") !== -1){
    scss.push(partials.loader(fontVariable))
  }
  return scss.join("\n\n")
}

var initOptions = function(opts, append){
  var item = extend({
    iconPrefix: ".icon-",
    fontVariable: "font",
    useDefaultFlag: true,
    includes: ["map", "mixins", "loader"]
  }, opts)
  return extend(item, append)
}

var renderAll = function(glyphs, fontName, fontPath, opts){
  var options = initOptions(opts)
  var fontParam = params(glyphs, fontName, fontPath, options.iconPrefix)
  return render(fontParam, options.includes, options.fontVariable, options.useDefaultFlag)
}

module.exports = renderAll