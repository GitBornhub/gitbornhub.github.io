<!DOCTYPE html>
<!-- 这一行告诉浏览器这是一个 HTML5 文档 -->

<html lang="zh-CN">
<!-- html 标签是整个网页的根元素，lang="zh-CN" 表示页面语言是简体中文 -->

<head>
    <!-- head 标签包含网页的元数据（不会直接显示在页面上的信息）-->
    
    <meta charset="UTF-8">
    <!-- 设置字符编码为 UTF-8，支持中文等多种语言 -->
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- 让网页在移动设备上正确显示，width=device-width 表示宽度等于设备宽度 -->
    
    <title>我的终端风格页面</title>
    <!-- 浏览器标签页上显示的标题 -->
    
    <style>
        /* CSS 样式代码写在 style 标签里，用来控制网页的外观 */
        
        body {
            /* body 是整个页面的主体部分 */
            font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
            /* 字体设置：Monaco 和 Menlo 是 Mac 终端常用字体，Courier New 是备选，monospace 是等宽字体 */
            
            background-color: #000000;
            /* 背景色设为黑色，模拟终端背景 */
            
            color: #00ff00;
            /* 文字颜色设为绿色，经典的终端风格 */
            
            padding: 20px;
            /* 内边距 20 像素，让内容不贴边 */
            
            line-height: 1.6;
            /* 行高 1.6 倍，让文字不会太挤 */
        }
        
        h1 {
            /* h1 是一级标题 */
            color: #00ff00;
            /* 标题也用绿色 */
            
            border-bottom: 2px solid #00ff00;
            /* 标题下方加一条 2 像素的绿色实线 */
            
            padding-bottom: 10px;
            /* 标题文字和下划线之间留 10 像素的空间 */
        }
        
        a {
            /* a 标签是超链接 */
            color: #00ffff;
            /* 链接颜色设为青色 */
            
            text-decoration: none;
            /* 去掉链接的下划线 */
        }
        
        a:hover {
            /* 当鼠标悬停在链接上时的样式 */
            text-decoration: underline;
            /* 鼠标悬停时显示下划线 */
        }
        
        .prompt {
            /* 这是一个自定义的 CSS 类，可以应用到任何元素上 */
            color: #ffffff;
            /* 提示符用白色 */
        }
    </style>
</head>

<body>
    <!-- body 标签包含所有会显示在页面上的内容 -->
    
    <h1>欢迎来到我的终端风格页面</h1>
    <!-- h1 是最大的标题 -->
    
    <p><span class="prompt">$</span> 你好，这是一个简单的 GitHub Pages 网页</p>
    <!-- p 是段落标签，span 是行内元素，用来给部分文字添加特殊样式 -->
    
    <p><span class="prompt">$</span> 这个页面使用了 Mac 终端风格的字体</p>
    
    <p><span class="prompt">$</span> 访问我的 <a href="https://github.com">GitHub</a> 主页</p>
    <!-- a 标签创建超链接，href 属性指定链接地址 -->
    
    <p><span class="prompt">$</span> 联系方式: your-email@example.com</p>
    
    <h2 style="color: #00ff00; margin-top: 30px;">关于我</h2>
    <!-- h2 是二级标题，比 h1 小一级，style 属性可以直接写 CSS -->
    
    <p><span class="prompt">></span> 这里可以写一些关于你自己的介绍</p>
    
    <p><span class="prompt">></span> 比如你的兴趣爱好、技能等等</p>
    
</body>
<!-- body 标签结束 -->

</html>
<!-- html 标签结束，整个文档到此结束 -->
