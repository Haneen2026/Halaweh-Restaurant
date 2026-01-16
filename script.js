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

        // Populate menu showcase
        this.populateMenuShowcase();
        
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

    populateMenuShowcase() {
        const menuCategoriesContainer = document.getElementById('menuCategories');
        const menuCarouselContainer = document.getElementById('menuCarouselContainer');

        if (!menuCategoriesContainer || !menuCarouselContainer) return;

        const menuCategories = content[this.currentLanguage].menuCategories;

        // Create category buttons
        menuCategoriesContainer.innerHTML = '';
        menuCategories.forEach(category => {
            const categoryButton = document.createElement('div');
            categoryButton.className = `menu-category ${category.isActive ? 'active' : ''}`;
            categoryButton.dataset.categoryId = category.id;

            categoryButton.innerHTML = `
                <div class="menu-category-name">${category.name}</div>
            `;

            menuCategoriesContainer.appendChild(categoryButton);
        });

        // Create shared carousel
        const activeCategory = menuCategories.find(cat => cat.isActive);
        if (activeCategory) {
            menuCarouselContainer.innerHTML = `
                <div class="menu-carousel">
                    <div class="menu-carousel-track" data-category="${activeCategory.id}">
                        ${activeCategory.dishes.map(dish => `
                            <div class="menu-card">
                                <img src="${dish.image}" alt="${dish.name}" class="menu-card-image">
                                <div class="menu-card-content">
                                    <h3 class="menu-card-title">${dish.name}</h3>
                                    <ul class="menu-card-ingredients">
                                        ${dish.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    <div class="menu-carousel-nav">
                        <button class="menu-carousel-btn prev-btn">${this.currentLanguage === 'ar' ? '›' : '‹'}</button>
                        <button class="menu-carousel-btn next-btn">${this.currentLanguage === 'ar' ? '‹' : '›'}</button>
                    </div>
                </div>
            `;
        }

        this.bindMenuShowcaseEvents();
        setTimeout(() => this.updateCarouselButtons(), 100);
    }

    bindMenuShowcaseEvents() {
        // Category name click handlers
        document.querySelectorAll('.menu-category-name').forEach(name => {
            name.addEventListener('click', (e) => {
                const categoryElement = e.target.closest('.menu-category');
                this.setActiveCategory(categoryElement.dataset.categoryId);
            });
        });

        // Bind carousel navigation
        this.bindCarouselNavigation();
    }

    bindCarouselNavigation() {
        // Carousel navigation buttons
        document.querySelectorAll('.menu-carousel-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const isNext = e.target.classList.contains('next-btn');
                this.navigateCarousel(isNext);
            });
        });
    }

    setActiveCategory(activeCategoryId) {
        // Remove active class from all categories
        document.querySelectorAll('.menu-category').forEach(cat => {
            cat.classList.remove('active');
        });

        // Add active class to selected category
        const activeCategory = document.querySelector(`[data-category-id="${activeCategoryId}"]`);
        if (activeCategory) {
            activeCategory.classList.add('active');
        }

        // Update carousel with new category content
        this.updateCarouselContent(activeCategoryId);

        // Update data for persistence (optional)
        const menuCategories = content[this.currentLanguage].menuCategories;
        menuCategories.forEach(cat => {
            cat.isActive = cat.id === activeCategoryId;
        });
    }

    updateCarouselContent(categoryId) {
        const menuCarouselContainer = document.getElementById('menuCarouselContainer');
        const menuCategories = content[this.currentLanguage].menuCategories;
        const category = menuCategories.find(cat => cat.id === categoryId);

        if (!menuCarouselContainer || !category) return;

        menuCarouselContainer.innerHTML = `
            <div class="menu-carousel">
                <div class="menu-carousel-track" data-category="${category.id}">
                    ${category.dishes.map(dish => `
                        <div class="menu-card">
                            <img src="${dish.image}" alt="${dish.name}" class="menu-card-image">
                            <div class="menu-card-content">
                                <h3 class="menu-card-title">${dish.name}</h3>
                                <ul class="menu-card-ingredients">
                                    ${dish.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    `).join('')}
                </div>
                    <div class="menu-carousel-nav">
                        <button class="menu-carousel-btn prev-btn">${this.currentLanguage === 'ar' ? '›' : '‹'}</button>
                        <button class="menu-carousel-btn next-btn">${this.currentLanguage === 'ar' ? '‹' : '›'}</button>
                    </div>
            </div>
        `;

        // Re-bind navigation events for the new carousel
        this.bindCarouselNavigation();

        // Reset carousel position for new category
        const newTrack = menuCarouselContainer.querySelector('.menu-carousel-track');
        if (newTrack) {
            newTrack.style.transform = 'translateX(0)';
        }

        // Update button states for new carousel
        setTimeout(() => this.updateCarouselButtons(), 100);
    }

    initializeCarousels() {
        // Initialize carousel positions
        document.querySelectorAll('.menu-carousel-track').forEach(track => {
            track.style.transform = 'translateX(0)';
        });
    }

    navigateCarousel(isNext) {
        const track = document.querySelector('.menu-carousel-track');
        const cards = document.querySelectorAll('.menu-card');
        const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

        if (!track || cards.length === 0) return;

        const cardWidth = cards[0].offsetWidth + 32; // 32px gap (card width + gap)
        const cardsToShow = 2; // Always show 2 cards
        const scrollAmount = cardWidth * cardsToShow; // Scroll by 2 cards at a time

        // Get current position (how many sets of 2 cards we've scrolled)
        let currentPosition = 0;
        if (track.style.transform) {
            const transformValue = parseFloat(track.style.transform.match(/translateX\(([^)]+)\)/)[1]);
            currentPosition = Math.abs(transformValue) / scrollAmount;
        }

        if (isNext) {
            // Calculate max position (total cards - cards to show, divided by cards per scroll)
            const maxPosition = Math.ceil(cards.length / cardsToShow) - 1;
            currentPosition = Math.min(currentPosition + 1, maxPosition);
        } else {
            currentPosition = Math.max(currentPosition - 1, 0);
        }

        // In RTL, we need to reverse the direction of movement
        const translateX = isRTL ? (currentPosition * scrollAmount) : -(currentPosition * scrollAmount);
        track.style.transform = `translateX(${translateX}px)`;

        // Update button states
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        if (prevBtn) prevBtn.disabled = currentPosition <= 0;
        if (nextBtn) nextBtn.disabled = currentPosition >= Math.ceil(cards.length / cardsToShow) - 1;
    }

    updateCarouselButtons() {
        const cards = document.querySelectorAll('.menu-card');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        // Always enable prev button initially (at position 0)
        if (prevBtn) prevBtn.disabled = true;

        // Enable/disable next button based on whether there are more cards to show
        if (nextBtn && cards.length > 2) {
            nextBtn.disabled = false;
        } else if (nextBtn) {
            nextBtn.disabled = true;
        }
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