'use strict';

var OriginalSource = require('webpack/lib/OriginalSource');

module.exports = function(source, sourceMap){
    var injection = '\'use strict\';\n\n';
    var injectedSource = injection + source;
    var identifier;
    var origMap;

    if (this.cacheable) {
        this.cacheable();
    }

    if (sourceMap) {
        identifier = this._module.identifier();
        origMap = new OriginalSource(source, identifier, sourceMap);

        origMap.node().prepend(injection);

        return this.callback(null, injectedSource, origMap.map());
    }

    return injectedSource;
};
