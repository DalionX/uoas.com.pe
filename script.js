// ---------- Menú móvil ----------
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('is-open');
});

// En móvil, el submenú "Sedes" se abre con un toque en vez de hover
const hasSubmenu = document.querySelector('.has-submenu');
hasSubmenu.querySelector('a').addEventListener('click', (e) => {
  if (window.innerWidth <= 600) {
    e.preventDefault();
    hasSubmenu.classList.toggle('is-open');
  }
});

// ---------- Carrusel de sedes ----------
const slides = document.querySelectorAll('.carousel-slide');
const dotsContainer = document.getElementById('carouselDots');
let current = 0;

slides.forEach((_, i) => {
  const dot = document.createElement('button');
  if (i === 0) dot.classList.add('is-active');
  dot.setAttribute('aria-label', `Ir a la sede ${i + 1}`);
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.carousel-dots button');

function goToSlide(index) {
  slides[current].classList.remove('is-active');
  dots[current].classList.remove('is-active');
  current = index;
  slides[current].classList.add('is-active');
  dots[current].classList.add('is-active');
}

setInterval(() => {
  const next = (current + 1) % slides.length;
  goToSlide(next);
}, 4000);
