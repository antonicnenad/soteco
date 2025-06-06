
document.addEventListener('DOMContentLoaded', () => {
    const srBtn = document.getElementById('sr-btn');
    const enBtn = document.getElementById('en-btn');
    const srElements = document.querySelectorAll('.sr-only');
    const enElements = document.querySelectorAll('.en-only');

    function showLanguage(lang) {
        if (lang === 'sr') {
            srElements.forEach(el => el.style.display = 'block');
            enElements.forEach(el => el.style.display = 'none');
            document.documentElement.lang = "sr";
        } else {
            srElements.forEach(el => el.style.display = 'none');
            enElements.forEach(el => el.style.display = 'block');
            document.documentElement.lang = "en";
        }
    }

    srBtn.addEventListener('click', () => {
        srBtn.classList.add('active');
        enBtn.classList.remove('active');
        showLanguage('sr');
    });

    enBtn.addEventListener('click', () => {
        enBtn.classList.add('active');
        srBtn.classList.remove('active');
        showLanguage('en');
    });

    showLanguage('sr');
});
