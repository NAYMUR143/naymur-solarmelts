let tl = gsap.timeline();

tl.to(".nav-overlay", {
  opacity: 1,
  duration: 0.3,
  pointerEvents: "auto",
  x: 0,
  scale: 1,
});

tl.to(".stagger", {
  opacity: 1,
  stagger: 0.2,
  x: 0,
});

tl.pause();

document.querySelector(".bar-div").addEventListener("click", () => {
  tl.play();
});

document.querySelector(".close-nav-overlay").addEventListener("click", () => {
  tl.reverse();
});
