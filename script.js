// Language toggle functionality for Arabic Restaurant & Cafe landing page
class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'ar'; // Default to Arabic
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateContent();
        this.updateDirection();
        this.updateLogo();
        this.matchVideoHeight();
        setTimeout(() => this.matchAboutImageHeight(), 300);
        this.bindResizeEvent();
    }

    bindEvents() {
        const languageToggle = document.getElementById('languageToggle');
        if (languageToggle) {
            languageToggle.addEventListener('click', () => this.toggleLanguage());
        }
    }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'ar' ? 'en' : 'ar';
        localStorage.setItem('language', this.currentLanguage);
        this.updateContent();
        this.updateDirection();
        this.updateLogo();
        setTimeout(() => {
            this.matchVideoHeight();
            this.matchAboutImageHeight();
        }, 200);
    }

    updateContent() {
        const currentContent = content[this.currentLanguage];

        // Update elements with data-key attributes
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (currentContent[key]) {
                element.textContent = currentContent[key];
            }
        });

        // Update elements with data-key-src and data-key-alt attributes (for images)
        document.querySelectorAll('[data-key-src]').forEach(element => {
            const srcKey = element.getAttribute('data-key-src');
            const altKey = element.getAttribute('data-key-alt');
            if (currentContent[srcKey]) {
                element.src = currentContent[srcKey];
                // Match heights after image loads
                element.onload = () => {
                    if (element.classList.contains('about-image')) {
                        this.matchAboutImageHeight();
                    }
                };
            }
            if (altKey && currentContent[altKey]) {
                element.alt = currentContent[altKey];
            }
        });

        // Update language toggle button text
        const languageToggle = document.getElementById('languageToggle');
        if (languageToggle) {
            languageToggle.textContent = currentContent.languageButton;
        }

        // Update logo alt text
        const logo = document.getElementById('logo');
        if (logo) {
            logo.alt = currentContent.logoAlt;
        }

        // Update page title and meta description
        document.title = this.currentLanguage === 'ar' ?
            'مطعم ومقهى عربي - Arabic Restaurant & Cafe' :
            'Arabic Restaurant & Cafe - مطعم ومقهى عربي';

        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = this.currentLanguage === 'ar' ?
            'تذوقوا أشهى المأكولات العربية التقليدية في أجواء أصيلة' :
            'Experience authentic Arabic cuisine in a traditional atmosphere';

        // Populate menu items
        this.populateMenu();
        
        // Match video height after content update
        setTimeout(() => {
            this.matchVideoHeight();
            this.matchAboutImageHeight();
        }, 100);
    }

    updateDirection() {
        const html = document.documentElement;
        html.setAttribute('dir', this.currentLanguage === 'ar' ? 'rtl' : 'ltr');
        html.setAttribute('lang', this.currentLanguage);
    }

    updateLogo() {
        const logo = document.getElementById('logo');
        if (logo) {
            // Change logo based on language
            logo.src = this.currentLanguage === 'ar' ? 'assests/Ar.png' : 'assests/EN.png';
        }
    }

    populateMenu() {
        const menuGrid = document.getElementById('menuGrid');
        if (!menuGrid) return;

        const menuItems = content[this.currentLanguage].menuItems;
        menuGrid.innerHTML = '';

        menuItems.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <h3>${item.name}</h3>
                <p class="description">${item.description}</p>
                <p class="price">${item.price}</p>
            `;
            menuGrid.appendChild(menuItem);
        });
    }

    matchVideoHeight() {
        const textSection = document.querySelector('.hero-text-section');
        const videoSection = document.querySelector('.hero-video-section');
        const video = document.querySelector('.hero-video');
        
        if (!textSection || !videoSection || !video) return;

        // Get text section height
        const textHeight = textSection.offsetHeight;
        
        // Only match height on desktop (when grid has 2 columns)
        const heroContent = document.querySelector('.hero-content');
        if (heroContent && window.getComputedStyle(heroContent).gridTemplateColumns !== '1fr') {
            // Set video section and video height to match text section
            videoSection.style.height = textHeight + 'px';
            video.style.height = textHeight + 'px';
        } else {
            // On mobile, reset to auto
            videoSection.style.height = 'auto';
            video.style.height = 'auto';
        }
    }

    matchAboutImageHeight() {
        const aboutTextSection = document.querySelector('.about-text-section');
        const aboutImageSection = document.querySelector('.about-image-section');
        const aboutImage = document.querySelector('.about-image');
        
        if (!aboutTextSection || !aboutImageSection || !aboutImage) return;

        // Get text section height
        const textHeight = aboutTextSection.offsetHeight;
        
        // Only match height on desktop (when grid has 2 columns)
        const aboutContent = document.querySelector('.about-content');
        if (aboutContent && window.getComputedStyle(aboutContent).gridTemplateColumns !== '1fr') {
            // Set image section and image height to match text section
            aboutImageSection.style.height = textHeight + 'px';
            aboutImage.style.height = textHeight + 'px';
        } else {
            // On mobile, reset to auto
            aboutImageSection.style.height = 'auto';
            aboutImage.style.height = 'auto';
        }
    }

    bindResizeEvent() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.matchVideoHeight();
                this.matchAboutImageHeight();
            }, 250);
        });
    }
}

// Initialize the language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new LanguageManager();
});

// Smooth scrolling for hero button (placeholder functionality)
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('hero-button')) {
        // You can add smooth scrolling to menu section or order functionality here
        console.log('Order button clicked');
    }
});