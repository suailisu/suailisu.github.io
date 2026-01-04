// 1. 初始化图片放大
document.addEventListener('DOMContentLoaded', function () {
    const zoom = mediumZoom('[data-zoomable]', {
        margin: 24,
        background: '#fff',
    });

    // 解决放大时被 CSS 裁剪的问题
    zoom.on('open', event => {
        event.target.style.objectFit = 'contain';
    });
    zoom.on('close', event => {
        // 如果是多图，关掉后恢复 cover
        if (!event.target.closest('.count-1')) {
            event.target.style.objectFit = 'cover';
        }
    });
});

// 2. Giscus 评论搬家逻辑
let currentOpenId = null;
function openComment(id, btn) {
    const container = document.getElementById('unified-giscus-container');
    const anchor = document.getElementById('anchor-' + id);
    const giscusSlot = container.querySelector('.giscus');
    
    if (currentOpenId === id && container.style.display === 'block') {
        container.style.display = 'none';
        btn.innerText = '评论';
        currentOpenId = null;
        return;
    }

    giscusSlot.innerHTML = ''; 
    anchor.appendChild(container);
    container.style.display = 'block';
    
    document.querySelectorAll('.comment-btn').forEach(b => b.innerText = '评论');
    btn.innerText = '收起';

    const script = document.createElement("script");
script.src = "https://giscus.app/client.js";

    script.setAttribute("data-repo", window.giscusConfig.repo);
    script.setAttribute("data-repo-id", window.giscusConfig.repoId);
    script.setAttribute("data-category", window.giscusConfig.category);
    script.setAttribute("data-category-id", window.giscusConfig.categoryId);

    script.setAttribute("data-mapping", "specific");
    script.setAttribute("data-term", "Moment-" + id);
    script.setAttribute("data-theme", document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-lang", "zh-CN");
    script.crossOrigin = "anonymous";
    script.async = true;

    giscusSlot.appendChild(script);
    currentOpenId = id;
}