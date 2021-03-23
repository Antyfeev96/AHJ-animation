export default class CollapseApp {
  constructor(layout, controller) {
    this.layout = layout;
    this.controller = controller;
  }

  init() {
    this.layout.renderApp();
    this.controller.init();
  }
}
