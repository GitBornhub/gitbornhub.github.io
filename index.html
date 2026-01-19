<style>
    /* ... 保留之前的样式 ... */

    /* 照片墙容器 */
    #photo-wall {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1; /* 放在文字卡片后面 */
        overflow: hidden;
        pointer-events: none;
    }

    .photo-item {
        position: absolute;
        width: 150px; /* 照片宽度 */
        height: auto;
        padding: 5px;
        background: white;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        border-radius: 4px;
        opacity: 0;
        transform: scale(0.5) rotate(-20deg);
        transition: all 1.5s ease-out;
    }

    /* 手机端照片调小一点 */
    @media (max-width: 600px) {
        .photo-item { width: 100px; }
    }

    /* 照片出现的动画状态 */
    .photo-item.show {
        opacity: 1;
        transform: scale(1) rotate(var(--r)); /* 使用随机旋转角度 */
    }
</style>

<div id="photo-wall"></div>

<script>
    // 1. 照片库：请在此替换为你自己的图片链接
    const photos = [
        "https://images.unsplash.com/photo-1516589174184-c68526614480?w=300",
        "https://images.unsplash.com/photo-1522673607200-1648832cee98?w=300",
        "https://images.unsplash.com/photo-1494972308935-1b36639f3ef3?w=300",
        "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=300",
        "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=300",
        "https://images.unsplash.com/photo-1516589091380-5d8e87df3999?w=300"
    ];

    const message = "从遇见你的那一刻起，\n我就知道，你是我一直在寻找的星光。\n愿往后余生，冷暖有相知，喜忧有相伴。\n我永远会在你身边。";
    let i = 0;

    function typeWriter() {
        if (i < message.length) {
            document.getElementById("typer").innerHTML += message.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }

    // 2. 生成照片墙的函数
    function createPhotoWall() {
        const wall = document.getElementById('photo-wall');
        photos.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.className = 'photo-item';
            
            // 随机分配位置（避开中间文字区域）
            const top = Math.random() * 80 + 5; // 5% - 85%
            const left = Math.random() * 80 + 5; // 5% - 85%
            const rotation = (Math.random() - 0.5) * 40; // -20到20度旋转

            img.style.top = `${top}%`;
            img.style.left = `${left}%`;
            img.style.setProperty('--r', `${rotation}deg`);

            wall.appendChild(img);

            // 延迟出现，形成流星般散开的效果
            setTimeout(() => {
                img.classList.add('show');
            }, index * 300); 
        });
    }

    function startExperience() {
        // 播放音乐
        const music = document.getElementById('bgMusic');
        music.play().catch(e => console.log("Music play blocked"));

        // 隐藏按钮
        document.getElementById('startBtn').style.display = 'none';
        
        // 执行照片墙和打字机
        createPhotoWall();
        typeWriter();
    }
</script>
