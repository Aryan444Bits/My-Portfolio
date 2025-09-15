// Custom cursor effect
const cursor = document.querySelector('.custom-cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    // Add a slight delay to the follower for a smooth trailing effect
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Header scroll effect
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Typing animation effect
const typingTextElement = document.getElementById('typing-text');
const cursorElement = document.getElementById('cursor');
const texts = [
    "Full Stack Developer",
    "Web Designer",
    "Problem Solver",
    "Tech Enthusiast"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let deletingSpeed = 50;
let pauseTime = 2000;

function type() {
    const currentText = texts[textIndex];

    if (isDeleting) {
        // Deleting text
        typingTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = deletingSpeed;
    } else {
        // Typing text
        typingTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    // Check if we've finished typing a word
    if (!isDeleting && charIndex === currentText.length) {
        typingSpeed = pauseTime;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex++;
        if (textIndex === texts.length) textIndex = 0;
        typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
}

// Start typing animation
setTimeout(type, 1000);

// Torch effect for about section
const torchEffect = document.getElementById('torch-effect');
const torchSpotlight = document.getElementById('torch-spotlight');

if (torchEffect && torchSpotlight) {
    torchEffect.addEventListener('mousemove', (e) => {
        const rect = torchEffect.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        torchSpotlight.style.left = x + 'px';
        torchSpotlight.style.top = y + 'px';
        torchSpotlight.style.opacity = '1';
    });

    torchEffect.addEventListener('mouseleave', () => {
        torchSpotlight.style.opacity = '0';
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Smooth scrolling for buttons
document.querySelectorAll('a.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Check if it's an anchor link
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Project card hover effect enhancement
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill card hover effect
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav ul');

if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.right = '0';
        nav.style.background = 'rgba(10, 25, 34, 0.98)';
        nav.style.backdropFilter = 'blur(10px)';
        nav.style.width = '100%';
        nav.style.padding = '1rem 0';
        nav.style.gap = '0';

        document.querySelectorAll('nav a').forEach(link => {
            link.style.display = 'block';
            link.style.padding = '0.8rem 5%';
            link.style.textAlign = 'center';
        });
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            nav.style.display = 'none';
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && nav.style.display === 'flex') {
        if (!e.target.closest('nav') && !e.target.closest('.menu-btn')) {
            nav.style.display = 'none';
        }
    }
});

// Handle window resize to reset mobile menu
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'row';
        nav.style.position = 'static';
        nav.style.background = 'transparent';
        nav.style.backdropFilter = 'none';
        nav.style.width = 'auto';
        nav.style.padding = '0';
        nav.style.gap = '2rem';

        document.querySelectorAll('nav a').forEach(link => {
            link.style.display = 'inline';
            link.style.padding = '0.5rem 1rem';
            link.style.textAlign = 'left';
        });
    } else {
        nav.style.display = 'none';
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Set initial header state
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    }

    // Hide mobile menu by default
    if (window.innerWidth <= 768) {
        nav.style.display = 'none';
    }

    // Initialize AOS (if you decide to add it later)
    // AOS.init();
});

// Parallax effect for liquid background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const liquidShapes = document.querySelectorAll('.liquid-shape');

    liquidShapes.forEach((shape, index) => {
        const speed = 0.05 * (index + 1);
        const yPos = -(scrolled * speed);
        shape.style.transform = `translateY(${yPos}px) ${shape.style.transform}`;
    });
}); 




const box = document.querySelector('.p1');
box.addEventListener('click', () => {
    const url = "https://github.com/Aryan444Bits/React-ToDo-App";
    if (url) window.location.assign(url); // same tab
});
const box1 = document.querySelector('.p2');
box1.addEventListener('click', () => {
    const url = "https://github.com/Aryan444Bits/Github-Profile-Fetcher";
    if (url) window.location.assign(url); // same tab
});
const box2 = document.querySelector('.p3');
box2.addEventListener('click', () => {
    const url = "https://github.com/Aryan444Bits/Moody-Music-Player-Full_Stack_Project-";
    if (url) window.location.assign(url); // same tab
});
const box3 = document.querySelector('.p4');
box3.addEventListener('click', () => {
    const url = "https://github.com/Aryan444Bits/Windows-style_OS_UI_Clone";
    if (url) window.location.assign(url); // same tab
});