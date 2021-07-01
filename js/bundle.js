import GLightbox from './vendor/glightbox';
import './scripts/menu';
import './vendor/lazysizes';

const lightboxCrmCms = GLightbox({
  touchNavigation: true,
  loop: true,
});

const lightboxGraphicsVideo = GLightbox({
  selector: '.glightboxGV',
  touchNavigation: true,
  loop: true,
});

const lightboxWeb = GLightbox({
  selector: '.glightboxWeb',
  touchNavigation: true,
  loop: true,
});

// INTERSECTION OBSERVER
let observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // do this when the element enters the viewport
      loadElement(entry.target);
      // stop watching
      observer.unobserve(entry.target);
    }
  });
});

function loadElement(element) {
  const src = element.getAttribute('data-src');
  element.src = src;
}

// the element that you want to watch
const element = document.querySelector('iframe#calendly');

// register the element with the observe method
observer.observe(element);
