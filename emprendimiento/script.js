document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.presentation-container');
    const slides = document.querySelectorAll('.slide');
    const navIndicator = document.getElementById('nav-indicator');
    const progressFill = document.getElementById('progress-fill');
    const totalSlides = slides.length;

    // Function to update active slide class for animations and navigation
    const updateActiveState = (index) => {
        // Update Slides
        slides.forEach(slide => slide.classList.remove('active'));
        if (slides[index]) {
            slides[index].classList.add('active');
        }

        // Update Navigation Indicator
        const currentNum = (index + 1).toString().padStart(2, '0');
        const totalNum = totalSlides.toString().padStart(2, '0');
        navIndicator.textContent = `${currentNum} / ${totalNum}`;

        // Update Progress Bar
        const progress = ((index + 1) / totalSlides) * 100;
        progressFill.style.width = `${progress}%`;
    };

    // Intersection Observer to detect current slide
    const observerOptions = {
        root: container,
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const index = Array.from(slides).indexOf(entry.target);
                updateActiveState(index);
            }
        });
    }, observerOptions);

    slides.forEach(slide => observer.observe(slide));

    // Keyboard navigation support
    document.addEventListener('keydown', (e) => {
        const currentSlideIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));

        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            if (currentSlideIndex < slides.length - 1) {
                slides[currentSlideIndex + 1].scrollIntoView({ behavior: 'smooth' });
            }
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            if (currentSlideIndex > 0) {
                slides[currentSlideIndex - 1].scrollIntoView({ behavior: 'smooth' });
            }
        }
    });

    // Initial activation
    updateActiveState(0);
});
