document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');


    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        const scrollDuration = 8000; 
        const scrollStep = window.scrollY / (scrollDuration / 15); 
        const interval = setInterval(() => {
            if (window.scrollY > 0) {
                window.scrollBy(0, -scrollStep);
            } else {
                clearInterval(interval); 
            }
        }, 15); 
    });
});

