export default class Layout {
  constructor() {
    this.body = document.body;
  }

  renderApp() {
    this.renderContainer();
    this.renderButton();
    this.renderTextArea();
  }

  renderContainer() {
    this.container = document.createElement('div');
    this.container.className = 'container';
    this.body.insertAdjacentElement('afterbegin', this.container);
  }

  renderButton() {
    this.button = document.createElement('button');
    this.button.className = 'container__button';
    this.button.textContent = 'Collapse';
    this.container.append(this.button);
  }

  renderTextArea() {
    this.textArea = document.createElement('button');
    this.textArea.className = 'container__textarea';
    this.container.append(this.textArea);
  }
}
