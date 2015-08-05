var partials = require("./partials")

module.exports = function(map){
  var scss = [
    partials.map(map),
    partials.mixin(),
    partials.loader()
  ]
  return scss.join("\n\n")
}