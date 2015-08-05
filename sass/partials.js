// var partialNames = [{
//   name: "map",
// }, {
//   name: "mixins",
// }, {
//   name: "loader",
// }]
// 
// module.exports = partialNames

module.exports.load = function(fontVariable, functionName){
  functionName = functionName || "iconfont-generate-font"
  return "@include " + functionName + "(" + fontVariable + ");"
}