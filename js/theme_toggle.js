const btn = document.getElementById('theme_toggle');
const img = btn.querySelector('img');

btn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  const isDark = document.body.classList.contains('dark');
  img.src = isDark ? 'assets/images/icons/theme_light_icon.svg' : 'assets/images/icons/theme_dark_icon.svg';
  btn.setAttribute('aria-label', isDark ? '라이트 모드 전환' : '다크 모드 전환');
});
