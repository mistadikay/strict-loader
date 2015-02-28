# strict-loader

> Adds `use strict;` in the beginning of each source

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

## License

MIT
