'use strict';
export default class SeriesInfoView {
  constructor(element, data) {
    this.element = element;
    this.data = data;

    this.renderMainImage();
    this.renderTitle();
    this.renderMainPicStartYear();
    this.renderMainPicEndYear();
    this.renderCreaters();
  }
  renderMainImage() {
    this.element.querySelector(`.main-pic`).innerHTML =
  `<img class="main-pic__image" src="${this.data.thumbnail.path}.${this.data.thumbnail.extension}" alt="">`};

  renderTitle() {
    this.element.querySelector(`.main-pic__heading`).innerText = this.data.title;
  }

}
