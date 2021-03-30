export default class Layout {
  constructor() {
    this.body = document.body;
    this.lorem = `
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nemo aliquam consequatur ea? Dolores assumenda architecto deserunt facere, magnam quod magni et omnis optio. Quis hic nostrum laboriosam eum magnam?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nemo aliquam consequatur ea? Dolores assumenda architecto deserunt facere, magnam quod magni et omnis optio. Quis hic nostrum laboriosam eum magnam?
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nemo aliquam consequatur ea? Dolores assumenda architecto deserunt facere, magnam quod magni et omnis optio. Quis hic nostrum laboriosam eum magnam?
    `;
  }

  renderApp() {
    this.renderContainer();
    this.renderButton();
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
    this.textArea = document.createElement('div');
    this.textArea.className = 'container__textarea';
    this.textArea.textContent = this.lorem;
    this.container.append(this.textArea);
  }
}
