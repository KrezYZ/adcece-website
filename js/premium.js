/* ============================================================
   Premium JS — 中欧战略联接协会
   滚动动效 · 导航毛玻璃 · 淡入动画 · 平滑滚动
   此文件叠加在原有 JS 之上，不改动任何原有文件。
   ============================================================ */

(function () {
    'use strict';

    // ========================================================
    // 1. 导航栏 — 滚动时触发毛玻璃效果
    // ========================================================
    const header = document.getElementById('header');
    const SCROLL_THRESHOLD = 60;
    const isSubPage = window.location.pathname.includes('.html') &&
                      !window.location.pathname.endsWith('index.html');

    function updateNavbar() {
        if (!header) return;
        // 子页面始终显示深色导航栏
        if (isSubPage || window.scrollY > SCROLL_THRESHOLD) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    }

    // 子页面强制显示
    if (isSubPage) {
        header.classList.add('is-scrolled');
    }
    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });

    // ========================================================
    // 2. 锚点平滑滚动
    // ========================================================
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            var target = document.querySelector(targetId);
            if (!target) return;

            e.preventDefault();

            // 关闭手机菜单（如果打开）
            if (typeof closeHeaderPopup === 'function') {
                closeHeaderPopup();
            }

            // 平滑滚动，留出导航栏高度
            var headerHeight = header ? header.offsetHeight : 56;
            var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });

    // ========================================================
    // 3. 滚动淡入动画（Intersection Observer）
    // ========================================================

    // 3a. 给需要动画的元素打标记
    var revealSelectors = [
        '.we-do-item',
        '.demo-show-c-demo-box',
        '.join-member-intro',
        '.join-member-form',
        '.contact-us-img-item-in',
        '.we-do-big-title',
        '.demo-show-title',
        '.join-member-title',
        '.contact-us-title-text',
        '.demo-show-tip'
    ];

    revealSelectors.forEach(function (selector) {
        var elements = document.querySelectorAll(selector);
        elements.forEach(function (el, index) {
            el.classList.add('premium-reveal');
            // 同组元素使用 mod 循环延迟
            var delayIndex = index % 5;
            if (delayIndex > 0) {
                el.classList.add('premium-reveal-delay-' + delayIndex);
            }
        });
    });

    // 3b. Observer
    if ('IntersectionObserver' in window) {
        var observerOptions = {
            root: null,
            rootMargin: '0px 0px -40px 0px',  // 元素进入视口 40px 后触发
            threshold: 0.1
        };

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // 一旦显示就不再观察
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.premium-reveal').forEach(function (el) {
            observer.observe(el);
        });
    } else {
        // 降级：不支持 IntersectionObserver 的设备直接显示
        document.querySelectorAll('.premium-reveal').forEach(function (el) {
            el.classList.add('is-visible');
        });
    }

    // ========================================================
    // 4. Hero 区域 — 视差滚动效果（轻微）
    // ========================================================
    var topBackImg = document.querySelector('.top-back-img');
    if (topBackImg) {
        window.addEventListener('scroll', function () {
            var scrollY = window.scrollY;
            // 只在 hero 可见时计算
            var topSection = document.getElementById('top');
            if (!topSection) return;
            var topHeight = topSection.offsetHeight;
            if (scrollY < topHeight) {
                var offset = scrollY * 0.4;
                topBackImg.style.transform = 'translateY(' + offset + 'px)';
            }
        }, { passive: true });
    }

    // ========================================================
    // 5. 表单输入框 — 实时清除自定义验证提示
    // ========================================================
    document.querySelectorAll('.join-member-row input, .join-member-row textarea').forEach(function (el) {
        el.addEventListener('input', function () {
            var errorEl = document.getElementById('jmError');
            if (errorEl) {
                errorEl.innerText = '';
            }
        });
    });

    // ========================================================
    // 6. 按钮 hover 微交互音效感（视觉）
    // ========================================================
    document.querySelectorAll('.join-member-btn').forEach(function (btn) {
        btn.addEventListener('mousedown', function () {
            this.style.transform = 'scale(0.97)';
        });
        btn.addEventListener('mouseup', function () {
            this.style.transform = '';
        });
        btn.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });

    console.log('Premium overlay activated — 中欧战略联接协会');
})();
