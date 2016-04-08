require('should');
var path = require('path');
var fs = require('fs');
var runLoaders = require('loader-runner').runLoaders;

var root = process.cwd();
var exportRe = /\s*module\.exports\s*=\s*/;
var semiRe = /\;\s*$/;

describe('css-content-loader', function() {
    it('should get original css content if used alone', function(done) {
        runLoaders({
            resource: path.join(root, 'test/res/test.css'),
            loaders: [path.join(root, 'index.js')],
            context: {},
            readResource: fs.readFile.bind(fs)
        }, function(err, data) {
            if (err) done(err);
            else {
                var source = JSON.stringify(fs.readFileSync(path.join(root, 'test/res/test.css'), {
                    encoding: 'utf8'
                }));
                data.result[0].replace(exportRe, '').replace(semiRe, '').should.equal(source);
                done();
            }
        });
    });
});
