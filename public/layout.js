document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    function setTheme(theme) {
        if (theme === 'dark') {
            document.body.classList.add('dark');
            themeIcon.src = '/assets/brightness_7.svg'; // 日间图标
        } else {
            document.body.classList.remove('dark');
            themeIcon.src = '/assets/brightness_4.svg'; // 夜间图标
        }
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // 初始化主题
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Add footer dynamically
    const footer = document.createElement('footer');
    footer.innerHTML = '<p>© 2024 木子欢儿 | <a href="//pic.quickso.cn" target="_blank">摄影与孤独</a></p><br><p class="ssn">一个普遍的误解是，所有摄影师都是具有超凡魅力的，外向的社交名流，他们可以在任何情况下进行自我讨论。<br> 通常，艺术过程会在寂寞的时光中展开。 <br>孤独和纪律可以提高艺术创作的效率，尽管孤独可能具有挑战性和孤独感，但如伯格曼所言，独自工作的决定也是转而面对我们所有人固有的情感，面对自己的人性。</p>';
    document.body.appendChild(footer);

    // Add loaded class to images after window load to enable hover effect
    window.addEventListener('load', () => {
        const images = document.querySelectorAll('.gallery img');
        images.forEach(img => {
            img.classList.add('loaded');
        });
    });
});
