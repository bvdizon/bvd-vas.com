// For mobile menu toggler button
const toggler = document.getElementById('toggler');
const menu = document.getElementById('menu');

toggler.addEventListener('click', (e) => {
  toggler.classList.toggle('change');

  if (toggler.classList.contains('change')) {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
});
