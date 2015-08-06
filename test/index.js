var iconfontSass = require("../index")
var assert = require("assert")
var fs = require("fs")
var fixtrueGlyphs = require("./fixture/codepoint.json")


describe("sass rendering", function(){
  it("should rendering", function(){
    var expect = fs.readFileSync("./test/fixture/output.scss", "utf-8")
    var result = iconfontSass(fixtrueGlyphs, "myFont", "/path/to/font")
    assert.equal(expect, result);
  })
})