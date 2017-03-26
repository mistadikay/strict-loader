'use strict';

var loaderUtils = require('loader-utils');
var SourceMap = require('source-map');
var esprima = require('esprima');

var prefix = '\'use strict\';\n\n';

// used https://github.com/webpack/imports-loader/ as an example
module.exports = function(source, map) {
    if (this.cacheable) {
        this.cacheable();
    }

    var SourceMapGenerator = SourceMap.SourceMapGenerator;
    var defaultOptions = { generateSourceMapFromTokens: false };
    var loaderOptions = Object.assign(defaultOptions, loaderUtils.getOptions(this) || {});
    var currentRequest = loaderUtils.getCurrentRequest(this);

    if (loaderOptions.generateSourceMapFromTokens) {
        var prefixLineLength = 2;
        var output = prefix + source;
        var tokens = esprima.tokenize(output, { loc: true });
        var generator = new SourceMapGenerator({ name: currentRequest });

        generator.setSourceContent(currentRequest, source);

        for (var i = prefixLineLength; i < tokens.length; i++) {
            var token = tokens[i];

            generator.addMapping({
                source: currentRequest,
                original: { line: token.loc.start.line - prefixLineLength, column: token.loc.start.column },
                generated: { line: token.loc.start.line, column: token.loc.start.column }
            });
        }

        this.callback(null, output, generator.toJSON());

        return;
    } else if (map) {
        var SourceNode = SourceMap.SourceNode;
        var SourceMapConsumer = SourceMap.SourceMapConsumer;
        var node = SourceNode.fromStringWithSourceMap(source, new SourceMapConsumer(map));

        node.prepend(prefix);

        var result = node.toStringWithSourceMap({ file: currentRequest });

        this.callback(null, result.code, result.map.toJSON());

        return;
    }

    return prefix + source;
};
