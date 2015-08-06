var extend = require("extend")
var glyphsMap = require("iconfont-glyphs-map")

var partials = require("./partials")
var sanitizeMap = require("./sanitize-map")

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
    partials.mixins(),
    partials.load(fontVariable)
  ]
  return scss.join("\n\n")
}

module.exports = function(glyphs, fontName, fontPath, opts){
  var options = extend({
    iconPrefix: ".icon-",
    fontVariable: "font",
    useDefaultFlag: true
  }, opts)
  var fontData = generateFontData(glyphs, fontName, fontPath, options.iconPrefix)
  return render(fontData, options.fontVariable, options.useDefaultFlag)
}