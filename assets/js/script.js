$(function () {
    var item = document.querySelectorAll('.place-item');

    item.forEach((item)=>{

        let button = item.querySelector('.place-item-button');
        button.addEventListener('click', function () {

            window.coordX = button.dataset.coordsx;
            window.coordY = button.dataset.coordsy;

        });
    });
});
