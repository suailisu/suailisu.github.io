/**
 * 观影时光机交互脚本
 * 功能：滚动自动高亮导航、点击平滑跳转
 */
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.year-nav a');
    const sections = document.querySelectorAll('.year-section');
    const headerOffset = 100; // 这里的数值应根据你顶部导航栏的高度适当调整

    /**
     * 执行高亮逻辑
     */
    function onScroll() {
        let currentId = "";
        const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            // 当页面滚动超过 section 顶部减去偏移量时，锁定当前 section
            if (scrollPos >= sectionTop - headerOffset) {
                currentId = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            // 匹配 href="#year-2024" 与 id="year-2024"
            if (link.getAttribute("href") === "#" + currentId) {
                link.classList.add("active");
            }
        });
    }

    /**
     * 平滑滚动增强
     * 防止点击导航时跳转位置太靠上被标题遮挡
     */
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - (headerOffset - 20),
                    behavior: 'smooth'
                });
                
                // 手动更新 URL hash 而不引起页面跳动
                history.pushState(null, null, '#' + targetId);
            }
        });
    });

    // 监听滚动事件
    window.addEventListener('scroll', onScroll);
    
    // 初始化执行一次，防止刷新页面后导航没高亮
    onScroll();
});