var iconfontSass = require("./index")
var assert = require("assert")
var fs = require("fs")


describe("sass rendering", function(){
  it("should rendering", function(){
    assert.equal(fs.readFileSync("./fixture/output.scss", iconfontSass()))
  })
})