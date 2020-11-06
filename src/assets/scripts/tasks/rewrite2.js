'use strict';

const fetch = require("node-fetch");

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

async function loadJson(url) {
    let response = await fetch(url);
    if(response.ok)
        return await response.json();
    throw new HttpError(response);
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
function demoGithubUser() {
    while(true){
        try{
            let name = 'vladusha2423';
            let user = loadJson(`https://api.github.com/users/${name}`);
            console.log(`Полное имя: ${user.name}.`);
            return user;
        }
        catch(error){
            if(error instanceof HttpError && error.response.status == 404){
                console.log("Такого пользователя не существует, пожалуйста, повторите ввод.");
            }
            else{
                throw error;
            }
        }
    }

    // let name = prompt("Введите логин?", "iliakan");
    //
    // return loadJson(`https://api.github.com/users/${name}`)
    //     .then(user => {
    //         alert(`Полное имя: ${user.name}.`);
    //         return user;
    //     })
    //     .catch(err => {
    //         if (err instanceof HttpError && err.response.status == 404) {
    //             alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
    //             return demoGithubUser();
    //         } else {
    //             throw err;
    //         }
    //     });
}

(async () => {
    let user = await demoGithubUser();
    console.log(user);
})();
