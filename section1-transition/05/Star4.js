export default class Star {
  constructor(index) {
    this.element = document.createElement("div");
    this.element.classList.add("star");
    this.element.innerHTML = index;
    document.body.append(this.element);
  }
}
