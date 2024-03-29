const flightPath = {
  curviness: 1.23,
  autoRotate: true,
  values: [
    { x: 100, y: -20 },
    { x: 300, y: 10 },
    { x: 500, y: 100 },
    { x: 750, y: -100 },
    { x: 550, y: -200 },
    { x: 350, y: -100 },
    { x: 600, y: 100 },
    { x: 800, y: 0 },
    { x: innerWidth + 120, y: -250 },
  ],
};

const tween = new TimelineLite();

tween.add(
  TweenLite.to(".plane", 2, {
    bezier: flightPath,
    ease: Power1.easeInOut
    
  })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: '.animation',
  duration:2000,
  triggerHook:0
})
.setTween(tween)
// .addIndicators()
.setPin('.animation')
.addTo(controller);
