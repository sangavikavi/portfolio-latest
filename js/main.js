// Set Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Menu Toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Mobile Menu Links close menu
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Scroll Animation Observer
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Accordion Toggle
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const isExpanded = item.classList.contains('expanded');
        
        // Collapse all other items for clean single-open behavior
        document.querySelectorAll('.accordion-item').forEach(otherItem => {
            otherItem.classList.remove('expanded');
        });
        
        // Toggle current item
        if (!isExpanded) {
            item.classList.add('expanded');
        }
    });
});
