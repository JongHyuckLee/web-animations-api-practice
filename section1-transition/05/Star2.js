export default class Star {
  constructor(index) {
    const element = document.createElement("div");
    element.classList.add("star");
    element.innerHTML = index;
    console.log({ x, y, z });
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    element.style.transform = `scale(${z})`;
    document.body.appendChild(element);
  }
}
