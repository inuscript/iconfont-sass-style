# iconfont-sass-style
Sass generator for [gulp-iconfont](https://github.com/nfroidure/gulp-iconfont/)

## Simple Usage

```js
// You can get scss for libsass < 3.2 or ruby-sass < 3.4.
var scss = iconfontSass(iconfontGlyphs, "myFontName", "/path/to/font", {
  iconPrefix: ".myIcon-"
})

// And if you want get css, you can compile like this
var nodeSass = require("node-sass")
var css = nodeSass.renderSync({
  data: scss
}).css.toString()
```

## API

### `iconfontSass(glyphs, fontName, fontPath, options)`

#### `glyphs`
Iconfont codepoint glyphs

#### `fontName`
Font name.

#### `fontPath`
Font path.

#### `options`
Enable below options

- `iconPrefix`
  - default `.icon-`
  - You can set icon css selector prefix.
  - Icon selector output like `.icon-foo`
- `fontVariable`
  - default `font`
  - You can set font variable name like `$font`
- `useDefaultFlag`
  - default `true`
  - Append variable `!defualt`
- `includes`
  - default: `["map", "mixins", "loader"]`
  - Output css partials
    - `map`
      - Map variables
    - `mixins`
      - Font generator mixins
    - `loader`
      - Font mixin loader
