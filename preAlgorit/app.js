// ===== SLIDER LOGIC =====
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.getElementById('slidesContainer');
const slides_wrapper = document.getElementById('slides');
const currentSlideSpan = document.getElementById('currentSlide');
const totalSlidesSpan = document.getElementById('totalSlides');
const progressFill = document.getElementById('progressFill');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

// Initialize
function init() {
  totalSlidesSpan.textContent = slides.length.toString().padStart(2, '0');
  updateSlider();
}

// Update slider position
function updateSlider() {
  const offset = -currentIndex * 100;
  slides_wrapper.style.transform = `translateX(${offset}vw)`;
  
  currentSlideSpan.textContent = (currentIndex + 1).toString().padStart(2, '0');
  
  const progress = ((currentIndex + 1) / slides.length) * 100;
  progressFill.style.width = `${progress}%`;
  
  updateButtonStates();
}

// Update button states
function updateButtonStates() {
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === slides.length - 1;
}

// Go to next slide
function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlider();
  }
}

// Go to previous slide
function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
}

// Go to specific slide
function goToSlide(index) {
  if (index >= 0 && index < slides.length) {
    currentIndex = index;
    updateSlider();
  }
}

// EVENT LISTENERS
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === ' ') {
    e.preventDefault();
    nextSlide();
  }
  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    prevSlide();
  }
});

// Mouse wheel navigation
let wheelTimeout;
document.addEventListener('wheel', (e) => {
  if (wheelTimeout) return;
  
  e.preventDefault();
  
  if (e.deltaY > 0) {
    nextSlide();
  } else if (e.deltaY < 0) {
    prevSlide();
  }
  
  wheelTimeout = setTimeout(() => wheelTimeout = null, 600);
}, { passive: false });

// Touch/Swipe support
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
}

// Initialize on load
init();