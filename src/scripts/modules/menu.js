import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';


class menu {
  constructor() {
    this.$burger = $('.header-burger');
    this.$menu = $('.header-menu-mobile');
    this.$close = $('.js-menu-close');
    this.opened = false;

    this.init();
  }

  open() {
    if (!this.opened) {
      this.$burger.addClass('header-burger_open');
      this.$menu.addClass('header-menu-mobile_open');
      window.showOverlay();
      disableBodyScroll(this.$menu.get(0));
      this.opened = true;
    }
  }

  close() {
    if (this.opened) {
      this.$burger.removeClass('header-burger_open');
      this.$menu.removeClass('header-menu-mobile_open');
      window.hideOverlay();
      enableBodyScroll(this.$menu.get(0));
      this.opened = false;
    }
  }

  toggle() {
    if (!this.$menu.is(':animated')) {
      if (this.opened) {
        this.close();
      } else {
        this.open();
      }
    }
  }

  init() {
    this.$burger.get(0).onclick = (event) => {
      event.preventDefault();
      this.toggle();
    };
    
    this.$close.get(0).onclick = (event) => {
      event.preventDefault();
      this.toggle();
    };

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        this.close();
      }
    });

    document.querySelector('.overlay').addEventListener('click', (event) => {
      event.preventDefault();
      this.close();
    });



  }

}

document.addEventListener('DOMContentLoaded', () => {
  new menu();
});
