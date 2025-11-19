window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar-custom');
  const btnTop = document.getElementById('btnTop');

  if (window.scrollY > 20) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }

  if (window.scrollY > 100) {
    btnTop.classList.add('show');
  } else {
    btnTop.classList.remove('show');
  }
});

document.getElementById('btnTop').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

const spinnerWrapperEl = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () => {
  spinnerWrapperEl.classList.add('hidden');
  setTimeout(() => {
    spinnerWrapperEl.style.display = 'none';
  }, 1000);
});

window.addEventListener('beforeunload', () => {
  spinnerWrapperEl.style.display = 'flex';
  setTimeout(() => {
    spinnerWrapperEl.classList.remove('hidden');
  }, 10);
});
