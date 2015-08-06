var assert = require("assert")
var partials = require("../src/partials")

describe("scss", function(){
  describe("map", function(){
    it("should set fontname", function(){
      assert.equal(partials.map({foo: "baz"}, "valueName" ), "$valueName: (\n  foo: baz\n);")
    })
    it("should set asDefault", function(){
      assert.equal(partials.map({foo: "baz"}, "valueName", true ), "$valueName: (\n  foo: baz\n) !default;")
    })
  })
})
