let StaticServer = require('static-server');

let server = new StaticServer({
    rootPath: '.',
    port: 5000,
    name: 'nc-internship-static-server',
    host: 'localhost',
    cors: '*',
    followSymlink: true,
    templates: {
        index: 'src/views/index.html',
    }
});

server.start(function () {
    console.log('Server listening to', server.port);
});

server.on('request', function (req, res) {

});

server.on('symbolicLink', function (link, file) {
    console.log('File', link, 'is a link to', file);
});

server.on('response', function (req, res, err, file, stat) {

});