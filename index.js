'use strict';

module.exports = function(source) {
	this.cacheable && this.cacheable();
    var callback = this.async();
    var value = source.toString();
    // is css-loader output
    if (/module\.exports\s*=\s*require\s*\(/.test(value)) {
        value = this.exec(source, this.resource).toString();
    }
    value = JSON.stringify(value);
    this.value = [value];
    callback(null, "module.exports = " + value + ";");
};
