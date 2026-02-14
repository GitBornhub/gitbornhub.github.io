/* =============================================
   theme.js — 全站共用：深浅模式 + 风格切换
   管理两个独立的状态：
     data-theme  = "light" | "dark"       （深浅模式）
     data-style  = "glass" | "material"   （UI 风格）

   两者完全独立，可以自由组合：
     亮色玻璃 / 暗色玻璃 / 亮色 Material / 暗色 Material
   ============================================= */

(function () {

  var html = document.documentElement;

  /* ── 1. 尽早恢复偏好，防止页面闪烁 ── */
  var savedTheme = localStorage.getItem('theme');
  var savedStyle = localStorage.getItem('style');
  if (savedTheme) html.setAttribute('data-theme', savedTheme);
  if (savedStyle) html.setAttribute('data-style', savedStyle);

  /* ── 2. DOM 就绪后绑定所有按钮 ── */
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

    /* 风格切换按钮 */
    var styleBtn = document.getElementById('styleToggle');
    if (styleBtn) {
      /* 初始化按钮状态（显示当前风格的标签） */
      updateStyleBtn(styleBtn, html.getAttribute('data-style') || 'glass');

      styleBtn.addEventListener('click', function () {
        var current = html.getAttribute('data-style') || 'glass';
        var next    = current === 'glass' ? 'material' : 'glass';
        html.setAttribute('data-style', next);
        localStorage.setItem('style', next);
        updateStyleBtn(styleBtn, next);
      });
    }

  });

  /* 更新风格按钮的图标和文字 */
  function updateStyleBtn(btn, style) {
    var labelGlass    = btn.querySelector('.label-glass');
    var labelMaterial = btn.querySelector('.label-material');
    if (!labelGlass || !labelMaterial) return;
    if (style === 'glass') {
      /* 当前是玻璃风格，按钮显示"切换到 Material" */
      labelGlass.style.display    = 'none';
      labelMaterial.style.display = 'flex';
    } else {
      /* 当前是 Material 风格，按钮显示"切换到 Glass" */
      labelGlass.style.display    = 'flex';
      labelMaterial.style.display = 'none';
    }
  }

})();
