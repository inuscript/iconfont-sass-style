// Map sanitizing util func.
var quote = require("quote")

module.exports = function(data){
  return Object.keys(data).reduce(function(obj, key){
    var item = data[key]
    if(item === undefined){
      return obj
    }
    obj[key] = quote(item)
    return obj
  }, {})
}