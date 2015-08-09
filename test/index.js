var fs = require("fs")
var assert = require("assert")

var iconfontSass = require("../src/")
var fixtrueGlyphs = require("./fixture/codepoint.json")
var compiler = require("node-sass")

describe("rendering", function(){
  describe("sass rendering", function(){
    it("should rendering with default values", function(){
      var expect = fs.readFileSync("./test/fixture/scss/default.scss", "utf-8")
      var result = iconfontSass(fixtrueGlyphs, "myFont", "/path/to/font")
      assert.equal(expect, result)
    })
    it("should rendering with fontVariable option", function(){
      var expect = fs.readFileSync("./test/fixture/scss/fontVariable.scss", "utf-8")
      var result = iconfontSass(fixtrueGlyphs, "myFont", "/path/to/font", {
        fontVariable: "foobazFont"
      })
      assert.equal(expect, result)
    })
    it("should rendering only rendering", function(){
      var expect = fs.readFileSync("./test/fixture/scss/includes-only-map.scss", "utf-8")
      var result = iconfontSass(fixtrueGlyphs, "myFont", "/path/to/font", {
        includes : ["map"]
      })
      assert.equal(expect, result)
    })
  })
  describe("css rendering", function(){
    it("should enable compile to css", function(){
      var expect = fs.readFileSync("./test/fixture/output.css", "utf-8")
      var scss = iconfontSass(fixtrueGlyphs, "myFont", "/path/to/font", {
        iconPrefix: ".myIcon-"
      })
      var css = compiler.renderSync({
        data: scss
      }).css.toString()
      expect = css
      assert.equal(expect, css)
    })
  })
})