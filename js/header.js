let scrollTop = 0
window.addEventListener('scroll', () => {
    scrollTop = document.documentElement.scrollTop;
    let elementById = document.getElementById("up");
    if (scrollTop > 100) {
        document.getElementById("header").style.backgroundColor = "#000000";
        document.getElementById("header").style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.1)";
        elementById.style.opacity = "1";
        elementById.style.pointerEvents = "auto";
        elementById.style.cursor = "pointer";
    } else {
        document.getElementById("header").style.backgroundColor = "transparent";
        document.getElementById("header").style.boxShadow = "none";
        elementById.style.opacity = ".8";
        elementById.style.pointerEvents = "none";
        // 禁止状态
        elementById.style.cursor = "default";
    }
});

function headerPopupClick(id) {
   location.href = id;
    closeHeaderPopup();
}

/**
 * 打开popup的动画
 */
function openHeaderPopup() {
    const headerPopup = document.getElementById('headerPopup');
    headerPopup.style.display = 'block';
    const headerPopupBg = document.getElementById('headerPopupBg');
    headerPopupBg.style.display = 'block';
    headerPopupBg.style.animation = 'headerPopupBg 0.5s';
    headerPopup.style.animation = 'headerPopupOpen 0.5s';
}

function closeHeaderPopup() {
    const headerPopup = document.getElementById('headerPopup');
    const headerPopupBg = document.getElementById('headerPopupBg');
    headerPopup.style.animation = 'headerPopupClose 0.5s';
    headerPopupBg.style.animation = 'headerPopupBgClose 0.5s';
    setTimeout(() => {
        headerPopup.style.display = 'none';
        headerPopupBg.style.display = 'none';
    }, 500);
}
