<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的终端风主页</title>
    <style>
        /* CSS 样式部分：负责页面的颜值 */
        body {
            /* 背景设为终端常见的深灰色/黑色 */
            background-color: #1c1c1c; 
            /* 字体设置：优先使用 Mac 终端常用的 SF Mono, Menlo, Monaco */
            font-family: "SF Mono", "Menlo", "Monaco", "Courier New", monospace;
            /* 字体颜色设为终端绿，更有 Feel */
            color: #00ff00;
            /* 让内容在页面中间显示 */
            padding: 50px;
            line-height: 1.6;
        }

        .cursor {
            /* 模拟闪烁的光标 */
            border-left: 8px solid #00ff00;
            margin-left: 5px;
            animation: blink 1s infinite;
        }

        @keyframes blink {
            50% { opacity: 0; }
        }
    </style>
</head>
<body>

    <h1>> Hello, World_</h1>
    <p>欢迎来到我的 GitHub Pages 站点。</p>
    
    <p>
        $ whoami <br>
        [正在寻找自我的开发者...]
    </p>

    <p>
        $ ls links/ <br>
        <a href="https://github.com" style="color: #00ff00;">GitHub</a> 
        <a href="#" style="color: #00ff00; margin-left: 20px;">Blog</a>
    </p>

    <div style="margin-top: 50px;">
        Last login: 2026/01/01 on console <span class="cursor"></span>
    </div>

</body>
</html>
