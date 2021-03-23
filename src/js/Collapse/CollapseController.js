export default class CollapseController {
  constructor(layout) {
    this.layout = layout;
  }

  init() {
    this.layout.renderApp();
    this.container = document.querySelector('.container');
    this.button = this.container.querySelector('.container__button');
    this.textArea = this.container.querySelector('.container__textarea');
    this.buttonListener();
  }

  buttonListener() {
    this.button.addEventListener('click', () => {
      this.button.classList.toggle('container__button_active');
    });
  }
}
