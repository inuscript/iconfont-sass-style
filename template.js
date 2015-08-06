var fs = require("fs")
var path = require("path")
var partialNames = require("./partials")

var getPath = function(partial){
  var base = path.join(__dirname, "/scss/")
  return path.join(base, "/_" + partial + ".scss")
}

module.exports = function(partial){
  var path = getPath(partial)
  var scss = fs.readFileSync(path, "utf-8")
  return scss
}
