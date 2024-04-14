import "./scroll-timeline.js";

const progress = document.querySelector(".progress");
// const scrollBox = document.querySelector(".scroll-box");
const targetImages = document.querySelectorAll(".target-image");

progress.animate(
  [
    {
      transform: "scaleX(0)",
    },
    {
      transform: "scaleX(1)",
    },
  ],
  {
    timeline: new ScrollTimeline({
      scrollOffsets: [
        { target: document.body, edge: "start", threshold: 1 },
        { target: document.body, edge: "end", threshold: 1 },
        // { target: scrollBox, edge: "start", threshold: 1 },
        // { target: scrollBox, edge: "end", threshold: 1 },
      ],
    }),
  }
);
console.log(targetImages);
targetImages.forEach((image) => {
  const imageTop = image.offsetTop;
  const imageHeight = image.offsetHeight;
  const offset1 = imageTop + imageHeight - window.innerHeight;
  console.log(imageTop + imageHeight, offset1);
  const offset2 = imageTop - 200;
  console.log(offset1, offset2);
  image.animate([{ opacity: 0 }, { opacity: 1 }], {
    timeline: new ScrollTimeline({
      scrollOffsets: [
        new CSSUnitValue(offset1, "px"),
        new CSSUnitValue(offset2, "px"),
      ],
    }),
  });
});
