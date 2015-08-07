var assert = require("assert")
var params = require("../src/params")
var fixtrueGlyphs = require("./fixture/codepoint-simple.json")

describe("params", function(){
  it("shoud return object", function(){
    var result = params(fixtrueGlyphs)
    var expect = result
    console.log(result)
    assert.deepEqual(expect, result)
  })
})