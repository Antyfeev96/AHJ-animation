export default class CollapseController {
  constructor(layout) {
    this.layout = layout;
  }

  init() {
    this.layout.renderApp();
    this.container = document.querySelector('.container');
    this.button = this.container.querySelector('.container__button');
    this.textArea = null;
    this.buttonListeners();
  }

  buttonListeners() {
    this.button.addEventListener('click', () => {
      this.button.classList.toggle('container__button_active');
    });

    this.button.addEventListener('click', () => {
      switch (this.textArea) {
        case null:
          this.layout.renderTextArea();
          this.textArea = this.container.querySelector('.container__textarea');
          break;
        default:
          this.textArea.classList.add('inactive');
          this.textArea.addEventListener('animationend', () => {
            this.textArea.remove();
            this.textArea = null;
          });
      }
    });
  }
}
