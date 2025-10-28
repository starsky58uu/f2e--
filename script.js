// 啟動電鋸的動畫效果 (保留)
function triggerChainsaw() {
    const btn = document.querySelector('.pull-cord-btn');
    
    btn.classList.add('pulled');
    
    setTimeout(() => {
        btn.classList.remove('pulled');
    }, 200);

    console.log('電鋸啟動！');
}


document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    // 1. 導覽列背景變色效果 (滾動時增加不透明度)
    // 獨立分頁仍需要這個效果
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.98)';
        } else {
            navbar.style.backgroundColor = 'rgba(13, 13, 13, 0.95)';
        }
    });

    // 2. 角色卡片推擠滑動效果邏輯 (只在 characters.html 上生效)
    const characterCards = document.querySelectorAll('.character-card');

    if (characterCards.length > 0) { // 檢查是否在人物頁
        characterCards.forEach(card => {
            // 滑鼠進入時：觸發延伸和推擠
            card.addEventListener('mouseenter', () => {
                card.classList.add('is-extended');
            });

            // 滑鼠離開時：縮回
            card.addEventListener('mouseleave', () => {
                card.classList.remove('is-extended');
            });
        });
    }

    // 備註：平滑滾動邏輯已移除，因為頁面切換將由瀏覽器處理。
});