(function () {
    $('.js-phone').inputmask({mask: "+7 (999) 999-99-99", showMaskOnHover: false });

    var formBlock = document.querySelectorAll('.form-file');
    formBlock.forEach((item)=>{
        if (formBlock) {
            var inputFileElem = item.querySelector(".js-question-file-input");
            var appendFileBlock = item.querySelector(".question-file-list");
            var blockBody = item.querySelector(".popup-file__body");


            var fileRegExp = "image.*|jpeg.*|jpg.*|png.*|svg.*|txt.*|pdf.*|doc.*|word.*";

            inputFileElem.addEventListener("change", function (evt) {
                checkUploadMethod(evt, renderFiles);
            });
            var checkUploadMethod = function (event, callback) {
                var files = event.dataTransfer
                    ? event.dataTransfer.files
                    : event.target.files;

                callback(files);
            };

            var renderFilePreviewElem = function (name) {
                return function (e) {
                    var nameBlock = document.createElement("div");
                    nameBlock.classList.add("question-file__item");
                    nameBlock.textContent = name;
                    appendFileBlock.appendChild(nameBlock);
                };
            };

            var renderFiles = function (files) {
                Array.from(files).forEach(function (file) {

                    if (!file.name.match(fileRegExp)) {
                        return;
                    }
                    var reader = new FileReader();

                    reader.addEventListener("load", renderFilePreviewElem(file.name));
                    reader.readAsDataURL(file);
                });
            };
        }
    })
})();