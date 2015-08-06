var glyphsMap = require("iconfont-glyphs-map")
var sanitizeMap = require("./sanitize-map")

module.exports = function(glyphs, fontName, fontPath, iconPrefix){
  // default value
  var map = {
    iconPrefix: iconPrefix,
    fontName: fontName,
    fontPath: fontPath
  }
  var data = sanitizeMap(map)
  data.glyphs = glyphsMap(glyphs, true, true)
  return data
}
