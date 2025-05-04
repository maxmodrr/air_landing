import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({
  once: true,
});

const lenis = new Lenis({
  duration: 1.3,
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
