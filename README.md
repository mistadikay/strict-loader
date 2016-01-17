# strict-loader

[![npm](https://img.shields.io/npm/v/strict-loader.svg?style=flat-square)](https://www.npmjs.com/package/strict-loader)
[![downloads](https://img.shields.io/npm/dm/strict-loader.svg?style=flat-square)](https://www.npmjs.com/package/strict-loader)
[![travis](http://img.shields.io/travis/mistadikay/strict-loader.svg?style=flat-square)](https://travis-ci.org/mistadikay/strict-loader)
[![deps](http://img.shields.io/david/mistadikay/strict-loader.svg?style=flat-square)](https://david-dm.org/mistadikay/strict-loader)

> Adds `use strict;` in the beginning of each source

Inspired by this gist https://gist.github.com/loganfsmyth/6f8520c7c96f61f0a5b8

Please note that if you use Babel, the strict transformer [automatically places](https://babeljs.io/docs/advanced/transformers/other/strict/) a "use strict"; directive at the top of your files. In this case you don't need strict-loader.

## Install

```
$ npm install --save strict-loader
```

## Usage

### inline

``` javascript
require('strict!./yourmom.js');
```

### webpack config

``` javascript
module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'strict'
      }
    ]
  }
};
```

### demo

```
npm install
npm start
```

Open `http://localhost:3000/` in browser — you should see text `strict-loader is working`

## License

MIT
