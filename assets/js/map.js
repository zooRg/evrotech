document.addEventListener('DOMContentLoaded', function() {
    ymaps.ready(function() {

        var collection = new ymaps.GeoObjectCollection();

        const myMap = new ymaps.Map('map', {
            center: [53.926329, 91.411099],
            zoom: 14,
        });


        var placement = new ymaps.Placemark(
            [53.926329, 91.411099], {
                balloonContent: 'ООО «Хакасская баранина»'
            }, {
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '/assets/img/map/icon.svg',
                // Размеры метки.
                iconImageSize: [34, 41],
                // Смещение левого верхнего угла иконки относительно её "ножки" (точки привязки).
                iconImageOffset: [-17, -41]
            });

        collection.add(placement);
        myMap.geoObjects.add(collection);


        myMap.behaviors.disable('scrollZoom');//убрать зум по скроллу
        myMap.controls.remove('typeSelector'); // убрать выбор карт
        myMap.controls.remove('trafficControl'); // убрать пробки
        myMap.controls.remove('fullscreenControl'); // убрать фуллскрин
        myMap.controls.remove('searchControl'); // убрать поиск
        myMap.controls.remove('rulerControl');
        myMap.behaviors.disable(['drag','multiTouch']);
    })
})