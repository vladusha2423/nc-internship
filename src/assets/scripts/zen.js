let postsCount = 0;

const URL = 'http://thevyshka.styleru.org/api/post/published/';
const BIG_CARD_INDEXES = [0,1,3,4]

function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}

// async function getGeneralColor(url){
//     let generalColor = 'kek';
//     await RGBaster.colors(url, {
//         // Не учитывать белый цвет
//         exclude: ['rgb(255,255,255)'],
//         success: function(payload) {
//             console.log(generalColor + 1)
//             generalColor = payload.dominant;
//             console.log(generalColor + 2)
//         }
//     });
//     console.log(generalColor + 3)
//     return generalColor;
// }


async function generateZen(){
    let response = await fetch(URL + `${postsCount + 1}-${postsCount + 5}`);
    if(response.ok){
        let data = await response.json();
        let bigCardIndex = BIG_CARD_INDEXES[randomInt(0,3)];
        let zenContent = document.querySelector('.zen__content');

        data.posts.forEach((post, i) => {
            let backgroundImage = `linear-gradient(${i === bigCardIndex ? '9' : ''}0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7931547619047619) 7%, rgba(255,255,255,0) 100%), url(\'${post.image}\') center center / cover`
            console.log(backgroundImage);



            let zenCard = `
<div class="zen__card ${i !== bigCardIndex ? '_small' : '_big'}">
    <div class="zen__card-content">
        <div class="zen__card-footer">
            <div class="zen__card-category">
                ${post.categories.length !== 0 ? post.categories[0].name : ''}
            </div>
            <div class="zen__card-controls">
                <div class="zen__icon zen__icon_comment"></div>
                <div class="zen__icon zen__icon_like">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" id="mitten--inline" width="18" height="18">
                        <path d="M16.85 7.49c.64 0 1.17.49 1.17 1.09v.05a17.87 16.6 0 01-.87 4.18 17.84 16.58 0 01-2.88 5l-.17.2H5.22V8.74L10.37 3a5.06 4.7 0 00.82-1.42 5.13 4.77 0 00.25-1.22c.2-.2.5-.31.82-.31.6 0 1.02.37 1.27 1 .3.76.26 1.63.26 1.63a5.12 4.76 0 01-1.1 2.95l-1.7 1.87h5.85zM.01 18.03v-9.3h3.47v9.3H0z"></path>
                    </svg>
                </div>
                <div class="zen__icon zen__icon_like _reverse">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" id="mitten--inline" width="18" height="18">
                        <path d="M16.85 7.49c.64 0 1.17.49 1.17 1.09v.05a17.87 16.6 0 01-.87 4.18 17.84 16.58 0 01-2.88 5l-.17.2H5.22V8.74L10.37 3a5.06 4.7 0 00.82-1.42 5.13 4.77 0 00.25-1.22c.2-.2.5-.31.82-.31.6 0 1.02.37 1.27 1 .3.76.26 1.63.26 1.63a5.12 4.76 0 01-1.1 2.95l-1.7 1.87h5.85zM.01 18.03v-9.3h3.47v9.3H0z"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="zen__card-text">
            <div class="zen__card-title">
                ${post.title}
            </div>
            <div class="zen__card-desc">
                ${post.description}    
            </div>
        </div>
    </div>
    <div class="zen__card-image" style="background: ${backgroundImage}"></div>
</div>
            `;
            zenContent.insertAdjacentHTML('beforeend', zenCard);
        });


        window.addEventListener('scroll', scrollCheck);
        postsCount += 5;
    }
    else{
        alert('Ошибка загрузки статей');
    }
}

(async () => {
    await generateZen();
})();

function offsetX(el){
    let rect = el.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop
}

let scrollCheck = async function() {
    let zenCards = document.querySelectorAll('.zen__card');
    let lastZenCard = zenCards[zenCards.length - 5];

    let scrollTop = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop;
    if (scrollTop >= offsetX(lastZenCard) - window.innerHeight) {
        window.removeEventListener('scroll', scrollCheck);
        await generateZen();
    }
};
