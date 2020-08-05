const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

//ScrollMagic
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
    duration: 7500,
    triggerElement: intro,
    triggerHook: 0
  })
    .setPin(intro)
    .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let text1 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    //turn this to seconds
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    //turn delay to seconds
    delay += (scrollpos - delay) * accelamount;

    video.currentTime = delay;
}, 33.3);




