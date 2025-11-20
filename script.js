// ==========================================
// LANGUAGE TOGGLE FUNCTIONALITY
// ==========================================

// Initialize language system
let currentLang = localStorage.getItem('preferredLanguage') || 'en';

// Set initial language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    updateLanguageButtons();
});

// Language toggle buttons
const langButtons = document.querySelectorAll('.lang-btn');

langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
        updateLanguageButtons();
        localStorage.setItem('preferredLanguage', lang);
    });
});

// Function to set language
function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang);

    // Update all translatable elements
    const translatableElements = document.querySelectorAll('.translatable');

    translatableElements.forEach(element => {
        const translation = element.getAttribute(`data-lang-${lang}`);
        if (translation) {
            // Check if element contains a link
            const link = element.querySelector('a');
            if (link && (element.classList.contains('publication-title') ||
                element.classList.contains('oped-title'))) {
                // For titles with links, update the link text but preserve HTML
                link.innerHTML = translation;
            } else {
                // For regular elements, update innerHTML to preserve line breaks
                element.innerHTML = translation;
            }
        }
    });
}

// Function to update active language button
function updateLanguageButtons() {
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// ==========================================
// PORTRAIT FLIP FUNCTIONALITY
// ==========================================

const portraitContainer = document.getElementById('portraitContainer');
const portraitFlipper = document.getElementById('portraitFlipper');

if (portraitContainer && portraitFlipper) {
    portraitContainer.addEventListener('click', () => {
        portraitFlipper.classList.toggle('flipped');
    });
}

// ==========================================
// ABSTRACT TOGGLE FUNCTIONALITY
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const abstractToggles = document.querySelectorAll('.abstract-toggle');

    abstractToggles.forEach(button => {
        button.addEventListener('click', () => {
            const abstractId = button.getAttribute('data-abstract-id');
            const abstract = document.getElementById(abstractId);

            if (abstract) {
                abstract.classList.toggle('collapsed');

                // Update button text based on language
                const isCollapsed = abstract.classList.contains('collapsed');
                const showText = button.getAttribute('data-lang-' + currentLang);
                const hideTextEn = 'Hide Abstract';
                const hideTextEs = 'Ocultar Resumen';
                const hideText = currentLang === 'es' ? hideTextEs : hideTextEn;

                button.textContent = isCollapsed ? showText : hideText;
            }
        });
    });
});

// ==========================================
// ABSTRACT IMAGE VIEWER FUNCTIONALITY
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const imageViewer = document.querySelector('.abstract-image-viewer');

    if (imageViewer) {
        const images = imageViewer.querySelectorAll('.abstract-image');
        const prevBtn = imageViewer.querySelector('.prev-btn');
        const nextBtn = imageViewer.querySelector('.next-btn');
        const indicators = imageViewer.querySelectorAll('.indicator');
        const caption = imageViewer.querySelector('.image-caption');
        let currentIndex = 0;

        function showImage(index) {
            // Remove active class from all images and indicators
            images.forEach(img => img.classList.remove('active'));
            indicators.forEach(ind => ind.classList.remove('active'));

            // Add active class to current image and indicator
            images[index].classList.add('active');
            indicators[index].classList.add('active');
            currentIndex = index;

            // Update caption based on current language
            if (caption) {
                const captionText = images[index].getAttribute(`data-caption-${currentLang}`);
                if (captionText) {
                    caption.textContent = captionText;
                }
            }
        }

        // Previous button
        prevBtn.addEventListener('click', () => {
            const newIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(newIndex);
        });

        // Next button
        nextBtn.addEventListener('click', () => {
            const newIndex = (currentIndex + 1) % images.length;
            showImage(newIndex);
        });

        // Indicator clicks
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showImage(index);
            });
        });
    }
});

// ==========================================
// NAVIGATION FUNCTIONALITY
// ==========================================

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Highlight active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for navigation links (fallback for browsers without CSS scroll-behavior)
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// LIGHTBOX FUNCTIONALITY FOR PHOTOS
// ==========================================

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');
const photoItems = document.querySelectorAll('.photo-item');

// Open lightbox when photo is clicked
photoItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.photo-caption');

        if (img && lightbox && lightboxImg) {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            if (caption && lightboxCaption) {
                lightboxCaption.textContent = caption.textContent;
            }
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
        }
    });
});

// Close lightbox when close button is clicked
if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
        closeLightbox();
    });
}

// Close lightbox when clicking outside the image
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

function closeLightbox() {
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// ==========================================
// NAVBAR BACKGROUND ON SCROLL
// ==========================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#ffffff';
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = '#ffffff';
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
});

// ==========================================
// EXTERNAL LINKS ACCESSIBILITY
// ==========================================

// Add target="_blank" and rel attributes for security to external links
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="http"]');
    links.forEach(link => {
        if (!link.hostname.includes('pguzmanlizardo.github.io')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
});

// ==========================================
// LAZY LOADING IMAGES (Enhanced)
// ==========================================

// Additional lazy loading support for browsers that don't support native lazy loading
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ==========================================
// SCROLL ANIMATIONS (Optional Enhancement)
// ==========================================

// Add fade-in animation for sections as they come into view
const observeElements = document.querySelectorAll('.publication-item, .oped-item, .photo-item');

if ('IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    observeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeObserver.observe(el);
    });
}

// ==========================================
// FORM HANDLING (If contact form is added later)
// ==========================================

// Placeholder for future contact form functionality
function handleContactForm(event) {
    event.preventDefault();
    // Add form handling logic here
    console.log('Contact form submitted');
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Debounce function for performance optimization
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

// Apply debounce to scroll event handlers if needed
const debouncedScroll = debounce(() => {
    // Additional scroll handling if needed
}, 100);

window.addEventListener('scroll', debouncedScroll);

// ==========================================
// PERFORMANCE: Preload critical resources
// ==========================================

// Preload CV PDF when user hovers over CV link
document.addEventListener('DOMContentLoaded', () => {
    const cvLink = document.querySelector('a[href="#cv"]');
    if (cvLink) {
        cvLink.addEventListener('mouseenter', () => {
            const cvPdfLink = document.querySelector('a[href*="cv.pdf"]');
            if (cvPdfLink && !document.querySelector('link[href*="cv.pdf"]')) {
                const preloadLink = document.createElement('link');
                preloadLink.rel = 'prefetch';
                preloadLink.href = cvPdfLink.getAttribute('href');
                document.head.appendChild(preloadLink);
            }
        }, { once: true });
    }
});

// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log('%c Welcome to Pablo Guzman Lizardo\'s Website / Bienvenido al sitio web de Pablo Guzmán Lizardo ',
    'background: #2c3e50; color: #fff; padding: 10px; font-size: 14px;');
console.log('%c Built with minimalist design principles | Construido con principios de diseño minimalista ',
    'color: #3498db; font-size: 12px;');
console.log('%c Bilingual: EN/ES | Bilingüe: EN/ES ',
    'color: #34495e; font-size: 12px;');