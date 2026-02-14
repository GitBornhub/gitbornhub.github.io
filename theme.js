/* =============================================
   theme.js — 全站共用：深浅模式
   管理一个状态：
     data-theme  = "light" | "dark"       （深浅模式）
   ============================================= */

(function () {

  var html = document.documentElement;

  /* ── 1. 尽早恢复偏好，防止页面闪烁 ── */
  var savedTheme = localStorage.getItem('theme');
  if (savedTheme) html.setAttribute('data-theme', savedTheme);

  /* ── 2. DOM 就绪后绑定按钮 ── */
  document.addEventListener('DOMContentLoaded', function () {

    /* 深浅模式切换按钮 */
    var themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
      });
    }

  });

})();
