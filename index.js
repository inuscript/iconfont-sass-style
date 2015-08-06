var partials = require("./partials")
var extend = require("extend")

var sanitizeMap = function(data){
  return Object.keys(data).reduce(function(obj, key){
    var item = data[key]
    if(item === undefined){
      return obj
    }
    obj[key] = quote(item)
    return obj
  }, {})
}

var generateFontData = function(glyphs, fontName, fontPath, iconPrefix){
  // default value
  iconPrefix = iconPrefix || ".icon-"
  var map = {
    iconPrefix: iconPrefix,
    fontName: fontName,
    fontPath: fontPath
  }
  var data = sanitizeMap(map)
  data.glyphs = glyphsMap(glyphs, true, true)
  return data
}

var render = function(map, fontVariable, useDefaultFlag){
  var scss = [
    partials.map(map, fontVariable, useDefaultFlag),
    partials.mixin(),
    partials.loader(fontVariable)
  ]
  return scss.join("\n\n")
}

module.exports = function(glyphs, fontName, fontPath, opts){
  var options = extend({
    iconPrefix: ".icon-",
    fontVariable: "font",
    useDefaultFlag: true
  }, opt)
  var fontData = generateFontData(glyphs, fontName, fontPath, options.iconPrefix)
  return render(fontData, options.fontVariable, options.useDefaultFlag)
}