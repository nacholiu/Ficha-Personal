const body = document.body;
const btn = document.getElementById('theme-toggle');
const icon = document.querySelector('.toggle-icon');

// Cargar tema guardado
const saved = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', saved);
icon.textContent = saved === 'dark' ? '☀' : '🌙';

btn.addEventListener('click', () => {
  const current = body.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';

  body.setAttribute('data-theme', next);
  icon.textContent = next === 'dark' ? '☀' : '🌙';
  localStorage.setItem('theme', next);
});
