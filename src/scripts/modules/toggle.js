class toggle {
  constructor($button, $area, text = false) {
    this.button = {
      el: $button,
      pressed: ($button.attr('aria-pressed') === 'true'),
      expanded: ($button.attr('aria-expanded') === 'true'),
      text: {
        opened: $button.data('otext'),
        closed: $button.data('ctext')
      }
    };

    this.showText = text;

    this.$area = $area;
    this.opened = this.button.pressed || this.button.expanded;

    this.$parent = $button.parentsUntil('[data-toggle]').parent();

    this.button.el.data('toggle', this);

    this.button.el.get(0).onclick = (event) => {
      event.preventDefault();
      this.toggle();
    }
  }

  open() {
    if (!this.opened) {
      if (this.$area.is('tr')) {
        this.$area.show();
      } else {
        this.$area.slideDown();
      }
      this.opened = true;
      if (this.button.text.opened && this.showText) {
        this.button.el.text(this.button.text.opened);
      }
    }
  }

  close() {
    if (this.opened) {
      if (this.$area.is('tr')) {
        this.$area.hide();
      } else {
        this.$area.slideUp();
      }

      this.opened = false;
      if (this.button.text.closed && this.showText) {
        this.button.el.text(this.button.text.closed);
      }
    }
  }

  setStatus() {
    this.button.el.attr('aria-pressed', this.opened);
    this.button.el.attr('aria-expanded', this.opened);
    this.$parent.attr('data-toggle', this.opened);
  }

  toggle() {
    if (!this.$area.is(':animated')) {
      if (this.opened) {
        this.close();
      } else {
        this.open();
      }
      this.setStatus();
    }
  }
}

export default toggle;
