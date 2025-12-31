<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的技术博客</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        header {
            text-align: center;
            padding: 60px 20px;
            color: white;
            animation: fadeInDown 0.8s ease;
        }

        header h1 {
            font-size: 3em;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }

        header p {
            font-size: 1.2em;
            opacity: 0.9;
        }

        nav {
            background: rgba(255, 255, 255, 0.95);
            padding: 15px 0;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            backdrop-filter: blur(10px);
        }

        nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 40px;
        }

        nav a {
            text-decoration: none;
            color: #667eea;
            font-weight: 600;
            transition: all 0.3s;
            position: relative;
        }

        nav a:hover {
            color: #764ba2;
        }

        nav a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: #764ba2;
            transition: width 0.3s;
        }

        nav a:hover::after {
            width: 100%;
        }

        .blog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 30px;
            margin-top: 40px;
            animation: fadeInUp 0.8s ease 0.2s both;
        }

        .blog-card {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            transition: all 0.3s;
            cursor: pointer;
        }

        .blog-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.2);
        }

        .blog-image {
            width: 100%;
            height: 200px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3em;
            color: white;
        }

        .blog-content {
            padding: 25px;
        }

        .blog-date {
            color: #999;
            font-size: 0.9em;
            margin-bottom: 10px;
        }

        .blog-title {
            font-size: 1.5em;
            color: #333;
            margin-bottom: 15px;
        }

        .blog-excerpt {
            color: #666;
            line-height: 1.6;
            margin-bottom: 15px;
        }

        .blog-tags {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .tag {
            background: #f0f0f0;
            padding: 5px 12px;
            border-radius: 15px;
            font-size: 0.85em;
            color: #667eea;
            transition: all 0.3s;
        }

        .tag:hover {
            background: #667eea;
            color: white;
        }

        footer {
            text-align: center;
            padding: 40px 20px;
            color: white;
            margin-top: 60px;
            opacity: 0.9;
        }

        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @media (max-width: 768px) {
            header h1 {
                font-size: 2em;
            }

            nav ul {
                gap: 20px;
                flex-wrap: wrap;
            }

            .blog-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>💻 我的技术博客</h1>
            <p>分享技术见解，记录学习旅程</p>
        </header>

        <nav>
            <ul>
                <li><a href="#home">首页</a></li>
                <li><a href="#articles">文章</a></li>
                <li><a href="#about">关于</a></li>
                <li><a href="#contact">联系</a></li>
            </ul>
        </nav>

        <div class="blog-grid">
            <div class="blog-card">
                <div class="blog-image">🚀</div>
                <div class="blog-content">
                    <div class="blog-date">2024-12-28</div>
                    <h2 class="blog-title">深入理解JavaScript异步编程</h2>
                    <p class="blog-excerpt">从回调函数到Promise，再到async/await，全面解析JavaScript异步编程的演进历程和最佳实践。</p>
                    <div class="blog-tags">
                        <span class="tag">JavaScript</span>
                        <span class="tag">异步编程</span>
                        <span class="tag">前端</span>
                    </div>
                </div>
            </div>

            <div class="blog-card">
                <div class="blog-image">🎨</div>
                <div class="blog-content">
                    <div class="blog-date">2024-12-25</div>
                    <h2 class="blog-title">CSS Grid布局完全指南</h2>
                    <p class="blog-excerpt">掌握CSS Grid布局系统，轻松实现复杂的网页布局设计，提升前端开发效率。</p>
                    <div class="blog-tags">
                        <span class="tag">CSS</span>
                        <span class="tag">布局</span>
                        <span class="tag">前端</span>
                    </div>
                </div>
            </div>

            <div class="blog-card">
                <div class="blog-image">⚡</div>
                <div class="blog-content">
                    <div class="blog-date">2024-12-20</div>
                    <h2 class="blog-title">性能优化：让你的网站飞起来</h2>
                    <p class="blog-excerpt">探讨前端性能优化的各种技巧，包括资源压缩、懒加载、代码分割等实用方法。</p>
                    <div class="blog-tags">
                        <span class="tag">性能优化</span>
                        <span class="tag">前端</span>
                        <span class="tag">最佳实践</span>
                    </div>
                </div>
            </div>

            <div class="blog-card">
                <div class="blog-image">🔧</div>
                <div class="blog-content">
                    <div class="blog-date">2024-12-15</div>
                    <h2 class="blog-title">React Hooks实战技巧</h2>
                    <p class="blog-excerpt">深入学习React Hooks的使用场景和最佳实践，构建更优雅的React应用。</p>
                    <div class="blog-tags">
                        <span class="tag">React</span>
                        <span class="tag">Hooks</span>
                        <span class="tag">前端框架</span>
                    </div>
                </div>
            </div>

            <div class="blog-card">
                <div class="blog-image">🌐</div>
                <div class="blog-content">
                    <div class="blog-date">2024-12-10</div>
                    <h2 class="blog-title">RESTful API设计最佳实践</h2>
                    <p class="blog-excerpt">学习如何设计优雅、可维护的RESTful API，提升后端服务的质量和可用性。</p>
                    <div class="blog-tags">
                        <span class="tag">API</span>
                        <span class="tag">后端</span>
                        <span class="tag">架构设计</span>
                    </div>
                </div>
            </div>

            <div class="blog-card">
                <div class="blog-image">📱</div>
                <div class="blog-content">
                    <div class="blog-date">2024-12-05</div>
                    <h2 class="blog-title">响应式设计实战指南</h2>
                    <p class="blog-excerpt">掌握响应式设计的核心概念和技术，打造适配各种设备的完美用户体验。</p>
                    <div class="blog-tags">
                        <span class="tag">响应式</span>
                        <span class="tag">移动端</span>
                        <span class="tag">UI/UX</span>
                    </div>
                </div>
            </div>
        </div>

        <footer>
            <p>© 2024 我的技术博客 | Built with ❤️ using GitHub Pages</p>
        </footer>
    </div>

    <script>
        document.querySelectorAll('.blog-card').forEach(card => {
            card.addEventListener('click', function() {
                alert('点击查看完整文章！');
            });
        });

        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const section = this.getAttribute('href').substring(1);
                alert(`导航到${section}页面`);
            });
        });
    </script>
</body>
</html>
