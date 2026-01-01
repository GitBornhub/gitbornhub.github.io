<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terminal Portfolio</title>
    <style>
        /* CSS 样式：定义网页的外观 */
        body {
            /* 背景色：终端深灰 */
            background-color: #121212; 
            /* 字体：严格使用 Mac 终端的等宽字体族 */
            font-family: "SF Mono", "Menlo", "Monaco", "Courier New", monospace;
            /* 字体颜色：纯白 */
            color: #ffffff;
            /* 页面边距和行高 */
            padding: 40px;
            line-height: 1.5;
            margin: 0;
        }

        /* 模拟终端命令行开头的符号 */
        .prompt::before {
            content: "$ ";
            color: #888; /* 提示符设为灰色，更有层次感 */
        }

        /* 模拟光标闪烁效果 */
        .cursor {
            display: inline-block;
            width: 8px;
            height: 1.2em;
            background-color: #ffffff;
            margin-left: 5px;
            vertical-align: middle;
            animation: blink 1s step-end infinite;
        }

        @keyframes blink {
            50% { opacity: 0; }
        }

        /* 链接样式 */
        a {
            color: #ffffff;
            text-decoration: underline;
        }
        a:hover {
            background-color: #ffffff;
            color: #000000;
        }
    </style>
</head>
<body>

    <header>
        <p>Last login: Thu Jan 1 20:52:00 on ttys001</p>
    </header>

    <main>
        <h1>System.out.println("Hello World");</h1>
        
        <p class="prompt">whoami</p>
        <p>Independent Developer / Tech Enthusiast</p>

        <p class="prompt">ls -l skills/</p>
        <ul>
            <li>HTML / CSS / JavaScript</li>
            <li>Python / Git / Terminal</li>
        </ul>

        <p class="prompt">cat contact.txt</p>
        <p>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
        <p>GitHub: <a href="https://github.com">github.com/yourname</a></p>
    </main>

    <p class="prompt"><span class="cursor"></span></p>

</body>
</html>
