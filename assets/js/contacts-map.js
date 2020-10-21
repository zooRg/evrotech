document.addEventListener('DOMContentLoaded', function() {
    ymaps.ready(function() {
        
        var collection = new ymaps.GeoObjectCollection();
        
        const myMap = new ymaps.Map('index-map', {
            center: [52.623261, 39.359873],
            zoom: 14,
        });
        
        
        var placement = new ymaps.Placemark(
            [52.623261, 39.359873], {
                balloonContent: '398540 Липецкая обл., Липецкий р-н, с. Сенцово, ул. Молодежная, дом 1Н'
            }, {
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '/assets/img/map-marker.svg',
                // Размеры метки.
                iconImageSize: [51, 66],
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