'use strict';

const fetch = require("node-fetch");

async function loadJson(url) {
    let response = await fetch(url);
    if(response.ok)
        return await response.json()
    throw new Error(String(response.status));
}

(async() => {
    let data = await loadJson('http://thevyshka.styleru.org/api/post/all/1-10')
        .catch(console.log);
    console.log(data);
})();