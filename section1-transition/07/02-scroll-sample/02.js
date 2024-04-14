import "./scroll-timeline.js";

const gallery = document.querySelector(".gallery");
const galleryTimelne = document.querySelector(".gallery-timeline");

gallery.animate(
  [
    {
      transform: "translateX(0)",
    },
    {
      transform: "translateX(calc(-100% + 100vh))",
    },
  ],
  {
    fill: "both",
    timeline: new ScrollTimeline({
      scollOffsets: [
        {
          target: galleryTimelne,
          edge: "start",
          threshold: 1,
        },
        {
          target: galleryTimelne,
          edge: "end",
          threshold: 1,
        },
      ],
    }),
  }
);
