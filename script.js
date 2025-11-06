function triggerChainsaw() {
    const btn = document.querySelector('.pull-cord-btn');
    
    btn.classList.add('pulled');
    
    setTimeout(() => {
        btn.classList.remove('pulled');
    }, 200);

    console.log('啟動鏈鋸！');
}


document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.98)';
        } else {
            navbar.style.backgroundColor = 'rgba(13, 13, 13, 0.95)';
        }
    });

    const characterCards = document.querySelectorAll('.character-card');

    if (characterCards.length > 0) { 
        characterCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.classList.add('is-extended');
            });

            card.addEventListener('mouseleave', () => {
                card.classList.remove('is-extended');
            });
        });
    }

});

function triggerChainsaw() {
    const btn = document.querySelector('.pull-cord-btn');
    const videoUrl = 'https://youtu.be/xvFZjo5PgG0'; 
    btn.classList.add('pulled');
    setTimeout(() => {
        btn.classList.remove('pulled');
    }, 200);
    window.open(videoUrl, '_blank');

    console.log('啟動鏈鋸並前往 YouTube！');
}
