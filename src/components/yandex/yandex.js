let services = [
    {
        backgroundImage: 'url(//yastatic.net/s3/home/services/block/kartinki.svg)',
        title: 'Видео'
    },
    {
        backgroundImage: 'url(//yastatic.net/s3/home/services/block/news.svg)',
        title: 'Картинки'
    },
    {
        backgroundImage: 'url(//yastatic.net/s3/home/services/block/maps.svg)',
        title: 'Новости'
    },
    {
        backgroundImage: 'url(//yastatic.net/s3/home/services/block/market_new.svg)',
        title: 'Карты'
    },
    {
        backgroundImage: 'url(//yastatic.net/s3/home/services/block/translate.svg)',
        title: 'Маркет'
    },
    {
        backgroundImage: 'url(//yastatic.net/s3/home/services/block/music1.svg)',
        title: 'Переводчик'
    },
    {
        backgroundImage: 'url(//yastatic.net/s3/home/services/block/tv.svg)',
        title: 'Музыка'
    },
    {
        backgroundImage: 'url(//yastatic.net/s3/home/services/block/autoru.svg)',
        title: 'Программа'
    },
    {
        backgroundImage: 'url(//yastatic.net/s3/home/services/block/video.svg)',
        title: 'Авто.ру'
    },
    {
        backgroundImage: 'url(//yastatic.net/s3/home/services/block/kartinki.svg)',
        title: 'ещё'
    },
]
for(let i = 0; i < services.length; i++){
    let serviceItem = `<div class="services__item">
                            <div class="services__image" style="background-image: ${services[i].backgroundImage}"></div>
                            <div class="services__title">${services[i].title}</div>
                        </div>`
    let serviceParent = document.getElementsByClassName('services')[0];
    serviceParent.insertAdjacentHTML('beforeend', serviceItem);
}

