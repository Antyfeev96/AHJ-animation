export default class CollapseController {
  constructor() {
    this.container = document.querySelector('.container');
    this.button = this.container.querySelector('.container__button');
    this.textArea = this.container.querySelector('.container__textarea');
    this.init();
  }

  init() {
    this.buttonListener();
  }

  buttonListener() {
    this.button.addEventListener('click', () => {
      this.button.classList.toggle('container__button_active');
    });
  }
}
