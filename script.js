// Простая плавная прокрутка к секциям по клику на навигацию
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.main-nav a[href^="#"]');
  for (const link of links) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
});