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
let observer = new IntersectionObserver(callback);

// the element that you want to watch
const element = document.querySelector('iframe');

// register the element with the observe method
observer.observe(element);
