function fixCovid(){
    let covid = document.querySelector('.covid');
    covid.classList.toggle('_fixed');
    let covidIcon = document.querySelector('.covid__fix-icon');
    covidIcon.classList.toggle('_visible');
    
    if(covidIcon.children[0].classList.contains('fa-lock-open')){
        covidIcon.children[0].classList.remove('fa-lock-open');
        covidIcon.children[0].classList.add('fa-lock');
    }
    else{
        covidIcon.children[0].classList.add('fa-lock-open');
        covidIcon.children[0].classList.remove('fa-lock');
    }
}

let services = [
    {
        backgroundImage: 'url(//yastatic.net/s3/home/services/block/video.svg)',
        title: 'Видео'
    },
    {
        backgroundImage: 'url(//yastatic.net/s3/home/services/block/kartinki.svg)',
        title: 'Картинки'
    },
    {
        backgroundImage: 'url(//yastatic.net/s3/home/services/block/news.svg)',
        title: 'Новости'
    },
    {
        backgroundImage: 'url(//yastatic.net/s3/home/services/block/maps.svg)',
        title: 'Карты'
    },
    {
        backgroundImage: 'url(//yastatic.net/s3/home/services/block/market_new.svg)',
        title: 'Маркет'
    },
    {
        backgroundImage: 'url(//yastatic.net/s3/home/services/block/translate.svg)',
        title: 'Переводчик'
    },
    {
        backgroundImage: 'url(//yastatic.net/s3/home/services/block/music1.svg)',
        title: 'Музыка'
    },
    {
        backgroundImage: 'url(//yastatic.net/s3/home/services/block/tv.svg)',
        title: 'Программа'
    },
    {
        backgroundImage: 'url(//yastatic.net/s3/home/services/block/autoru.svg)',
        title: 'Авто.ру'
    },
    {
        backgroundImage: 'url(//yastatic.net/s3/home/services/block/kartinki.svg)',
        title: 'ещё'
    },
]
for(let i = 0; i < services.length; i++){
    let serviceItem = `<a href="">
                        <div class="services__item">
                            <div class="services__image" style="background-image: ${services[i].backgroundImage}"></div>
                            <div class="services__title">${services[i].title}</div>
                        </div>
                        </a>`
    let serviceParent = document.getElementsByClassName('services__container')[0];
    serviceParent.insertAdjacentHTML('beforeend', serviceItem);
}

