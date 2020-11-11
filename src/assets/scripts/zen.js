let postsCount = 0;

const URL = 'http://thevyshka.styleru.org/api/post/published/';
const BIG_CARD_INDEXES = [0,1,3,4]

function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}

let data = [
    {
        "id": 1120,
        "title": "Личный опыт: студенты-асексуалы",
        "description": "Студенты нескольких российских вузов рассказали о том, как их асексуальная ориентация повлияла на их отношения и студенчество",
        "image": "http://thevyshka.styleru.org/uploads/2020/10/oblozhka-1-1050x500.jpg",
        "categories": [
            {
                "id": 1,
                "name": "Мнения",
                "linkName": "opinions",
                "postCategory": null
            },
        ],
    },
    {
        "id": 1119,
        "title": "Панда)))",
        "description": "Панда бело-черная и очень милая",
        "image": "http://thevyshka.styleru.org/uploads/2020/10/20171109677.jpg",
        "categories": [
            {
                "id": 1,
                "name": "Мнения",
                "linkName": "opinions",
                "postCategory": null
            },
        ],
    },
    {
        "id": 1115,
        "title": "Свайп влево, свайп вправо",
        "description": "Тиндер помогает многим найти друзей, партнера или компанию на любое мероприятие. Мы поговорили со студентами разных вузов об образах университетов в Тиндере и об их опыте использования приложения.",
        "image": "http://thevyshka.ru/wp-content/uploads/2019/12/sxuuhtqnxr8.jpg",
        "categories": [
            {
                "id": 6,
                "name": "Спецпроекты",
                "linkName": "special",
                "postCategory": null
            }
        ],
    },
    {
        "id": 1113,
        "title": "Щас бы тяночку, да пива баночку",
        "description": "Это мы тестим, потом удалим(наверное)",
        "image": "http://thevyshka.styleru.org/uploads/2020/10/E48C40F3-3B75-47F8-A370-779D48083D73.jpeg",
        "categories": [
            {
                "id": 7,
                "name": "Фотопроекты",
                "linkName": "photo",
                "postCategory": null
            }
        ]
    },
    {
        "id": 1112,
        "title": "Не кодом единым: какие приложения разрабатывают студенты",
        "description": "Рассказываем про студентов, которые решили сами разработать приложения для смартфонов.",
        "linkName": "coding-apps",
        "image": "https://thevyshka.ru/wp-content/uploads/2020/02/oblozka.gif",
        "categories": [
            {
                "id": 1,
                "name": "Мнения",
                "linkName": "opinions",
                "postCategory": null
            }
        ]
    }
]

async function generateZen(){
    let bigCardIndex = BIG_CARD_INDEXES[randomInt(0,3)];
    let zenContent = document.querySelector('.zen__content');

    data.forEach((post, i) => {
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

(async () => {
    await generateZen();
})();

function offsetX(el){
    let rect = el.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop
}

async function scrollCheck() {
    let zenCards = document.querySelectorAll('.zen__card');
    let lastZenCard = zenCards[zenCards.length - 5];

    let scrollTop = window.pageYOffset ? window.pageYOffset : document.documentElement.scrollTop;
    if (scrollTop >= offsetX(lastZenCard) - window.innerHeight) {
        window.removeEventListener('scroll', scrollCheck);
        await setTimeout(generateZen, 1000);
    }
};
