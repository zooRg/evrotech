import Popup from './popup';
// TODO: Как то получше все написать
// TODO: Расписать JS DOC
class popupHelper {
  constructor(popup) {
    this.modal = new Popup(popup);

    this.modal.el.addEventListener('close', () => {

    });

    this.modal.el.addEventListener('open', () => {

    });

    let initiators = document.querySelectorAll(`[data-modal]`);

    initiators.forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        let modifier = (el.dataset.modal) ? el.dataset.modal : false;
        this.modal.open(el.dataset.file, modifier);
      })
    });
  }

  open(file = false) {
    this.modal.open(file);
  }

  /**
   * Закрывает модальное окно в пространстве класса и инициализирует протокол закрытия
   */
  close() {
    this.modal.close();
  }

}

export default popupHelper;
