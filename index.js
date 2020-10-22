const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname)))
    .set('views', path.join(__dirname, 'src/views'))
    .get('/', (req, res) => res.sendfile('src/views/index.html'))
    .get('/my-checkbox', (req, res) => res.sendfile('src/views/checkbox.html'))
    .get('/fake-yandex', (req, res) => res.sendfile('src/views/yandex.html'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))