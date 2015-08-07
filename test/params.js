var assert = require("assert")
var params = require("../src/params")
var fixtrueGlyphs = require("./fixture/codepoint-simple.json")

describe("params", function(){
  it("shoud return object", function(){
    var result = params(fixtrueGlyphs, "foo", "/path/to/baz", ".my-icon-prefix-")
    var expect = { 
      fontName: '"foo"',
      fontPath: '"/path/to/baz"',
      iconPrefix: '".my-icon-prefix-"',
      glyphs: { account: '"\\E001"', 'arrow-down': '"\\E002"' } 
    }

    assert.deepEqual(expect, result)
  })
  it("shoud return object when not throw param", function(){
    var result = params(fixtrueGlyphs, "foo", "/path/to/baz")
    var expect = { 
      fontName: '"foo"',
      fontPath: '"/path/to/baz"',
      glyphs: { account: '"\\E001"', 'arrow-down': '"\\E002"' } 
    }

    assert.deepEqual(expect, result)
  })
})