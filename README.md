# css-content-loader

> CSS content loader for webpack

Why this loader?

We use `style-loader` as the last loader for style files and insert a `<style>` or `<link>` tag into the html doc. In most cases, it's enough and works perfectly. However, sometimes we just want to get the style content **as string** directly! This loader is for the corner case.

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

```js
var cssContent = require('css-content!./file.css');
// => returns css code as string from file.css

var cssContent2 = require('css-content!css!postcss!sass!./file.scss');
// recommend to use with css-loader and other style loaders.
// and css-content-loader will get the compiled css content as string.
```

### loader config

Currently no special config is needed for `css-content-loader`. It works well with `css-loader`.

```js
module.exports = {
    module: {
        loaders: [
            { test: /\.css$/, loader: "content-loader!css-loader" },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" }
        ]
    }
};
```

## License

[MIT](http://www.opensource.org/licenses/mit-license.php)
