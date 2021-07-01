import GLightbox from './vendor/glightbox';
import './scripts/menu';

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
