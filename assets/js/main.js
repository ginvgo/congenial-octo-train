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
// 夜间模式切换
document.getElementById('toggleDarkMode').addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// 页面加载时读取用户偏好
window.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
document.getElementById("searchBox").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  document.querySelectorAll("#postList li").forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(filter) ? "" : "none";
  });
});
document.getElementById("searchBox").addEventListener("input", function () {
  const filter = this.value.toLowerCase();
  document.querySelectorAll("#postList li").forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(filter) ? "" : "none";
  });
});

