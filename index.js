/** @format */

function bigImg(x) {
  x.classList.add("hovereffect");
}
function normalImg(x) {
  x.classList.remove("hovereffect");
}
// carousel

var carousel = document.querySelector(".carousel");
var flkty = new Flickity(carousel, {
  imagesLoaded: true,
  percentPosition: false,
});

var imgs = carousel.querySelectorAll(".carousel-cell img");

var docStyle = document.documentElement.style;
var transformProp =
  typeof docStyle.transform == "string" ? "transform" : "WebkitTransform";

flkty.on("scroll", function () {
  flkty.slides.forEach(function (slide, i) {
    var img = imgs[i];
    var x = ((slide.target + flkty.x) * -1) / 3;
    img.style[transformProp] = "translateX(" + x + "px)";
  });
});

// navbar

const togglebtn = document.querySelector(".toggle-btn");
const navlinks = document.querySelector(".navbar-links");

togglebtn.addEventListener("click", function () {
  navlinks.classList.add("links-animation");
  navlinks.classList.toggle("active");
});
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
  toggleActions: "restart ",
});
// let tl = gsap.timeline({ defaults: { duration: 2 } });

gsap.from(".brand-title", { opacity: 0, duration: 4 }, "");
gsap.from(
  ".header-ani",
  { opacity: 0, y: -70, duration: 3, stagger: 0.8 },
  "-0.1"
);
gsap.from(".navbar-links ul", { opacity: 0, duration: 3, stagger: 1 });
gsap.from(".bar", {
  scrollTrigger: {
    trigger: ".bar",
  },
  opacity: 0,
  duration: 8,
  stagger: 0.2,
  delay: 2,
});
gsap.from(".content-text", {
  scrollTrigger: {
    trigger: ".content-text",
  },
  opacity: 0,
  y: 50,
  duration: 4,
  stagger: 0.2,
});
gsap.from(".text-features", {
  scrollTrigger: {
    trigger: ".text-features",
  },
  opacity: 0,
  y: 80,
  duration: 3,
  stagger: 0.8,
});
gsap.from(".third-img img", {
  scrollTrigger: {
    trigger: ".third-img img",
  },
  opacity: 0,
  x: -50,
  duration: 3,
});
gsap.from(".t1", {
  scrollTrigger: {
    trigger: ".third-img img",
  },
  opacity: 0,
  y: 40,
  duration: 2,
});
gsap.from(".third-img2 img", {
  scrollTrigger: {
    trigger: ".third-img2 img",
  },
  opacity: 0,
  x: 50,
  duration: 3,
});
gsap.from(".t2", {
  scrollTrigger: {
    trigger: ".t2",
  },
  opacity: 0,
  y: -40,
  stagger: 0.5,
  duration: 3,
});
gsap.from(".gallery h2", {
  scrollTrigger: {
    trigger: ".gallery h2",
  },
  opacity: 0,
  duration: 3,
});
gsap.from(".form-page h2", {
  scrollTrigger: {
    trigger: ".form-page h2",
  },
  opacity: 0,
  y: 20,
  duration: 2,
});
gsap.from(".f1", {
  scrollTrigger: {
    trigger: ".f1",
  },
  scrub: 1,
  opacity: 0,
  y: 50,
  stagger: 0.8,
  duration: 3,
});
gsap.from(".form-items", {
  scrollTrigger: {
    trigger: ".form-items",
  },
  scrub: 1,
  opacity: 0,
  y: 50,
  stagger: 0.8,
  duration: 3,
});
gsap.from(".social-contents", {
  scrollTrigger: {
    trigger: ".social-contents",
  },
  scrub: 1,
  opacity: 0,
  y: 50,
  stagger: 0.8,
  duration: 3,
});
gsap.from(".fab", {
  scrollTrigger: {
    trigger: ".fab",
  },
  scrub: 1,
  opacity: 0,
  y: 50,
  stagger: 0.8,
  duration: 2,
});
gsap.from(".review p", {
  scrollTrigger: {
    trigger: ".review p",
  },
  scrub: 1,
  opacity: 0,
  y: 50,
  stagger: 0.8,
  duration: 3,
});
