document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    // Toggle class 'active' pada navbar saat hamburger diklik
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Optional: Menutup menu saat link diklik (khusus untuk mobile)
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Cek apakah layar adalah mobile (lebar < 768px)
            if (window.innerWidth <= 768) {
                navbar.classList.remove('active');
            }
        });
    });
});

/* Animasi muncul saat scroll */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(".hero, .hero-content, .container").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(20px)";
  el.style.transition = "1s";
  observer.observe(el);
});

// coba animasi shape bg
const shapesContainer = document.querySelector('.shapes');

for (let i = 0; i < 25; i++) {
    let span = document.createElement('span');

    let size = Math.random() * 20 + 10; // ukuran random
    span.style.width = size + 'px';
    span.style.height = size + 'px';

    span.style.left = Math.random() * 100 + '%'; // posisi random
    span.style.animationDuration = (Math.random() * 10 + 5) + 's';

    shapesContainer.appendChild(span);
}

// campuran item shape
if (Math.random() > 0.5) {
    span.style.borderRadius = "0"; // kotak
}

// warna lebih hidup
span.style.background = `rgba(255,255,255,${Math.random()})`;