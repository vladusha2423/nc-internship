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