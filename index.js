'use strict';

var loaderUtils = require('loader-utils');
var SourceMap = require('source-map');

var SourceNode = SourceMap.SourceNode;
var SourceMapConsumer = SourceMap.SourceMapConsumer;
var prefix = '\'use strict\';\n\n';

// used https://github.com/webpack/imports-loader/ as an example
module.exports = function(source, map) {
    if (this.cacheable) {
        this.cacheable();
    }

    if (map) {
        var currentRequest = loaderUtils.getCurrentRequest(this);
        var node = SourceNode.fromStringWithSourceMap(source, new SourceMapConsumer(map));

        node.prepend(prefix);

        var result = node.toStringWithSourceMap({
            file: currentRequest
        });

        this.callback(null, result.code, result.map.toJSON());

        return;
    }

    return prefix + source;
};
