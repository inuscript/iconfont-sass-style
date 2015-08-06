var iconfontSass = require("../index")
var assert = require("assert")
var fs = require("fs")
var fixtrueGlyphs = require("./fixture/codepoint.json")
var compiler = require("node-sass")


describe("sass rendering", function(){
  it("should rendering", function(){
    var expect = fs.readFileSync("./test/fixture/output.scss", "utf-8")
    var result = iconfontSass(fixtrueGlyphs, "myFont", "/path/to/font")
    assert.equal(expect, result)
  })
  it("should compilable", function(){
    var expect = fs.readFileSync("./test/fixture/output.css", "utf-8")
    var scss = iconfontSass(fixtrueGlyphs, "myFont", "/path/to/font", {
      iconPrefix: ".myIcon-"
    })
    var css = compiler.renderSync({
      data: scss
    }).css.toString()
    assert.equal(expect, css)
  })
})