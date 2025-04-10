// main.js — 全站通用脚本

document.addEventListener('DOMContentLoaded', () => {
  highlightActiveLink();
});

// 高亮当前页面的导航链接
function highlightActiveLink() {
  const navLinks = document.querySelectorAll('nav a');
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    if (currentPath.endsWith(link.getAttribute('href'))) {
      link.style.fontWeight = 'bold';
      link.style.textDecoration = 'underline';
    }
  });
}
