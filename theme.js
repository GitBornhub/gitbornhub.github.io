/* =============================================
   theme.js — 全站共用深浅模式逻辑
   在所有页面的 <head> 末尾引入，防止闪烁
   ============================================= */

(function () {
  // 1. 尽早读取偏好，防止页面闪白/闪黑
  var saved = localStorage.getItem('theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);

  // 2. DOM 就绪后绑定按钮事件
  document.addEventListener('DOMContentLoaded', function () {
    var btn  = document.getElementById('themeToggle');
    var html = document.documentElement;
    if (!btn) return;

    btn.addEventListener('click', function () {
      var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  });
})();
