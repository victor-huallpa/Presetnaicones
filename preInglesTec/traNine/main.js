/* ==========================================
   ELEMENTOS
========================================== */

const slides = document.querySelectorAll(".slide");
const btnNext = document.querySelector(".adelante");
const btnPrev = document.querySelector(".atras");
const counter = document.querySelector(".counter");

/* ==========================================
   VARIABLES
========================================== */

let currentSlide = 0;

/* ==========================================
   INICIALIZACIÓN
========================================== */

slides.forEach(slide => {
    slide.classList.remove("active");
});

if(slides.length > 0){
    slides[0].classList.add("active");
}

updateUI();

/* ==========================================
   FUNCIONES DE SLIDES
========================================== */

function showSlide(index){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

    currentSlide = index;

    updateUI();

    if(index === 1){
        animateSlide2();
    }
}

function nextSlide(){

    if(currentSlide < slides.length - 1){
        showSlide(currentSlide + 1);
    }
}

function prevSlide(){

    if(currentSlide > 0){
        showSlide(currentSlide - 1);
    }
}

function updateUI(){

    if(counter){

        counter.textContent =
            `${currentSlide + 1} / ${slides.length}`;
    }

    if(btnPrev){
        btnPrev.disabled = currentSlide === 0;
    }

    if(btnNext){
        btnNext.disabled =
            currentSlide === slides.length - 1;
    }
}

/* ==========================================
   BOTONES
========================================== */

if(btnNext){
    btnNext.addEventListener("click", nextSlide);
}

if(btnPrev){
    btnPrev.addEventListener("click", prevSlide);
}

/* ==========================================
   TECLADO
========================================== */

document.addEventListener("keydown",(e)=>{

    switch(e.key){

        case "ArrowRight":
            nextSlide();
            break;

        case "ArrowLeft":
            prevSlide();
            break;
    }
});

/* ==========================================
   TOUCH (MÓVILES)
========================================== */

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart",(e)=>{

    touchStartX =
        e.changedTouches[0].screenX;

});

document.addEventListener("touchend",(e)=>{

    touchEndX =
        e.changedTouches[0].screenX;

    const distance =
        touchEndX - touchStartX;

    if(distance > 80){
        prevSlide();
    }

    if(distance < -80){
        nextSlide();
    }
});

/* ==========================================
   ANIMACIÓN SLIDE 2
========================================== */

function animateSlide2(){

    const english =
        document.querySelector(".txtIn");

    const spanish =
        document.querySelector(".txtEs");

    if(!english || !spanish){
        return;
    }

    english.classList.remove("show");
    spanish.classList.remove("show");

    setTimeout(()=>{

        english.classList.add("show");

    },300);

    setTimeout(()=>{

        spanish.classList.add("show");

    },2200);
}

/* ==========================================
   PARTICULAS
========================================== */

const canvas =
    document.getElementById("particles");

if(canvas){

    const ctx =
        canvas.getContext("2d");

    let particles = [];

    function resizeCanvas(){

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;
    }

    resizeCanvas();

    window.addEventListener(
        "resize",
        resizeCanvas
    );

    class Particle{

        constructor(){

            this.x =
                Math.random() *
                canvas.width;

            this.y =
                Math.random() *
                canvas.height;

            this.radius =
                Math.random() * 2 + 1;

            this.speedX =
                (Math.random() - 0.5) * 0.4;

            this.speedY =
                (Math.random() - 0.5) * 0.4;
        }

        update(){

            this.x += this.speedX;
            this.y += this.speedY;

            if(this.x < 0)
                this.x = canvas.width;

            if(this.x > canvas.width)
                this.x = 0;

            if(this.y < 0)
                this.y = canvas.height;

            if(this.y > canvas.height)
                this.y = 0;
        }

        draw(){

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.radius,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                "rgba(0,191,255,0.8)";

            ctx.fill();
        }
    }

    function createParticles(){

        particles = [];

        const amount = 100;

        for(
            let i = 0;
            i < amount;
            i++
        ){

            particles.push(
                new Particle()
            );
        }
    }

    function connectParticles(){

        for(
            let a = 0;
            a < particles.length;
            a++
        ){

            for(
                let b = a + 1;
                b < particles.length;
                b++
            ){

                const dx =
                    particles[a].x -
                    particles[b].x;

                const dy =
                    particles[a].y -
                    particles[b].y;

                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy
                    );

                if(distance < 120){

                    ctx.beginPath();

                    ctx.strokeStyle =
                        `rgba(
                            0,
                            191,
                            255,
                            ${1 - distance / 120}
                        )`;

                    ctx.lineWidth = 0.5;

                    ctx.moveTo(
                        particles[a].x,
                        particles[a].y
                    );

                    ctx.lineTo(
                        particles[b].x,
                        particles[b].y
                    );

                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles(){

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        particles.forEach(
            particle => {

                particle.update();

                particle.draw();
            }
        );

        connectParticles();

        requestAnimationFrame(
            animateParticles
        );
    }

    createParticles();
    animateParticles();
}