// ==========================================
// THEME MANAGEMENT
// ==========================================
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'dark';
        this.themeToggle = document.getElementById('themeToggle');
        this.init();
    }

    init() {
        this.applyTheme();
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
    }

    toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        this.applyTheme();

        // Add animation feedback
        this.themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            this.themeToggle.style.transform = '';
        }, 300);
    }
}

// ==========================================
// PDF DOWNLOAD MANAGER
// ==========================================
class PDFDownloader {
    constructor() {
        this.buttons = document.querySelectorAll('.btn-download-pdf');
        this.init();
    }

    init() {
        this.buttons.forEach(button => {
            button.addEventListener('click', (e) => this.handleDownload(e));
        });
    }

    handleDownload(event) {
        const button = event.currentTarget;
        const presentationUrl = button.dataset.presentationUrl;
        const presentationName = button.dataset.presentationName;

        if (!presentationUrl || !presentationName) {
            console.error('Missing presentation URL or name');
            return;
        }

        // Create full URL
        const baseUrl = window.location.href.substring(0, window.location.href.lastIndexOf('/'));
        const fullUrl = `${baseUrl}/${presentationUrl}`;

        // Simply open the presentation in a new tab
        window.open(fullUrl, '_blank');

        // Visual feedback
        const originalText = button.querySelector('span').textContent;
        button.querySelector('span').textContent = '¡Abierto!';

        setTimeout(() => {
            button.querySelector('span').textContent = originalText;
        }, 1500);
    }
}


// ==========================================
// PRESENTATION COUNTER
// ==========================================
class PresentationCounter {

    constructor() {
        this.countElement = document.getElementById('presentationCount');
        this.targetCount = this.calculatePresentationCount();
        this.init();
    }

    calculatePresentationCount() {
        const grid = document.getElementById('presentationsGrid');
        const cards = grid.querySelectorAll('.presentation-card:not(.card-placeholder)');
        return cards.length;
    }

    init() {
        this.animateCount();
    }

    animateCount() {
        let current = 0;
        const increment = this.targetCount / 30;
        const timer = setInterval(() => {
            current += increment;
            if (current >= this.targetCount) {
                this.countElement.textContent = this.targetCount;
                clearInterval(timer);
            } else {
                this.countElement.textContent = Math.floor(current);
            }
        }, 30);
    }
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, this.observerOptions);

        // Observe presentation cards
        const cards = document.querySelectorAll('.presentation-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
            observer.observe(card);
        });

        // Observe feature items
        const features = document.querySelectorAll('.feature-item');
        features.forEach((feature, index) => {
            feature.style.opacity = '0';
            feature.style.transform = 'translateX(-30px)';
            feature.style.transition = `all 0.6s ease-out ${index * 0.1}s`;
            observer.observe(feature);
        });
    }
}

// ==========================================
// SMOOTH SCROLL
// ==========================================
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// ==========================================
// HEADER SCROLL EFFECT
// ==========================================
class HeaderScroll {
    constructor() {
        this.header = document.querySelector('.header');
        this.lastScroll = 0;
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > 100) {
                this.header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                this.header.style.boxShadow = 'none';
            }

            this.lastScroll = currentScroll;
        });
    }
}

// ==========================================
// CARD TILT EFFECT
// ==========================================
class CardTilt {
    constructor() {
        this.cards = document.querySelectorAll('.presentation-card:not(.card-placeholder)');
        this.init();
    }

    init() {
        this.cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    }
}

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        // Lazy load images if any are added
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                img.src = img.dataset.src;
            });
        }

        // Reduce motion for users who prefer it
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.style.scrollBehavior = 'auto';
            const style = document.createElement('style');
            style.textContent = `
                *, *::before, *::after {
                    animation-duration: 0.01ms !important;
                    animation-iteration-count: 1 !important;
                    transition-duration: 0.01ms !important;
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// ==========================================
// INITIALIZE APPLICATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    new ThemeManager();
    new PDFDownloader();
    new PresentationCounter();
    new ScrollAnimations();
    new SmoothScroll();
    new HeaderScroll();
    new CardTilt();
    new PerformanceOptimizer();

    // Add loaded class to body for animations
    document.body.classList.add('loaded');

    // Console easter egg
    console.log('%c🚀 Presentaciones Web', 'font-size: 20px; font-weight: bold; color: #6366f1;');
    console.log('%cHecho con ❤️ por Victor Huallpa', 'font-size: 12px; color: #a0a0b8;');
    console.log('%c¿Interesado en el código? Revisa el repositorio!', 'font-size: 12px; color: #6b6b85;');
});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        ThemeManager,
        PDFDownloader,
        PresentationCounter,
        ScrollAnimations,
        SmoothScroll,
        HeaderScroll,
        CardTilt,
        PerformanceOptimizer
    };
}
