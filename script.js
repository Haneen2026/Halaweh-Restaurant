// Language toggle functionality for Arabic Restaurant & Cafe landing page
class LanguageManager {
    constructor() {
        // Check for stored language preference, default to Arabic if not set
        const storedLanguage = localStorage.getItem('language');
        this.currentLanguage = storedLanguage || 'ar';
        this.currentTheme = localStorage.getItem('theme') || 'light'; // Default to light
        this.currentColorScheme = localStorage.getItem('colorScheme') || 'default'; // Default to default colors
        this.init();
    }

    init() {
        this.bindEvents();
        this.updateContent();
        this.updateDirection();
        this.updateLogo();
        this.applyTheme();
        this.applyColorScheme();
        this.updateThemeIcon();
        this.matchVideoHeight();
        setTimeout(() => {
            this.matchAboutImageHeight();
        }, 300);
        setTimeout(() => this.matchAboutImageHeight(), 300);
        this.bindResizeEvent();
        this.initializeDatePicker();
        initializeFooter();
        
        // Debug hero section localization
        this.debugHeroLocalization();
    }
    
    debugHeroLocalization() {
        const heroElements = {
            heroTitle: document.querySelector('.hero-title'),
            heroBuffetTimes: document.querySelector('.hero-buffet-times'),
            heroDescription: document.querySelector('.hero-description'),
            heroStoryText: document.querySelector('.hero-story-text'),
            heroButton: document.querySelector('.hero-button'),
            heroPromotion: document.querySelector('.hero-promotion')
        };
        
        console.log('Hero Localization Debug:', {
            currentLanguage: this.currentLanguage,
            contentAvailable: !!content[this.currentLanguage],
            elements: Object.keys(heroElements).reduce((acc, key) => {
                acc[key] = {
                    element: !!heroElements[key],
                    dataKey: heroElements[key]?.getAttribute('data-key'),
                    content: heroElements[key]?.textContent,
                    expectedContent: content[this.currentLanguage]?.[key]
                };
                return acc;
            }, {})
        });
    }

    bindEvents() {
        const languageToggle = document.getElementById('languageToggle');
        if (languageToggle) {
            languageToggle.addEventListener('click', () => this.toggleLanguage());
        }

        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        const colorToggle = document.getElementById('colorToggle');
        if (colorToggle) {
            colorToggle.addEventListener('click', () => this.toggleColorScheme());
        }
    }

    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'ar' ? 'en' : 'ar';
        localStorage.setItem('language', this.currentLanguage);
        console.log('Language toggled to:', this.currentLanguage);
        this.updateContent();
        this.updateDirection();
        this.updateLogo();
        this.updateTeamCarouselArrows();
        this.updateDatePickerLocale();
        this.updateModalDatePickerLocale();
        updateBookingModalContent();
        initializeFooter();
        setTimeout(() => {
            this.matchVideoHeight();
            this.matchAboutImageHeight();
        }, 200);
        
        // Debug after language change
        setTimeout(() => this.debugHeroLocalization(), 300);
    }

    updateContent() {
        const currentContent = content[this.currentLanguage];
        
        if (!currentContent) {
            console.error('Content not found for language:', this.currentLanguage);
            return;
        }

        // Update elements with data-key attributes
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (currentContent[key]) {
                element.textContent = currentContent[key];
            } else {
                console.warn('Content key not found:', key, 'for language:', this.currentLanguage);
            }
        });

        // Update elements with data-key-placeholder attributes
        document.querySelectorAll('[data-key-placeholder]').forEach(element => {
            const key = element.getAttribute('data-key-placeholder');
            if (currentContent[key]) {
                element.placeholder = currentContent[key];
            } else {
                console.warn('Placeholder key not found:', key, 'for language:', this.currentLanguage);
            }
        });

        // Update select option elements with data-key attributes
        document.querySelectorAll('select option[data-key]').forEach(option => {
            const key = option.getAttribute('data-key');
            if (currentContent[key]) {
                option.textContent = currentContent[key];
            } else {
                console.warn('Option key not found:', key, 'for language:', this.currentLanguage);
            }
        });

        // Update elements with data-key-src and data-key-alt attributes (for images)
        document.querySelectorAll('[data-key-src]').forEach(element => {
            const srcKey = element.getAttribute('data-key-src');
            const altKey = element.getAttribute('data-key-alt');
            if (currentContent[srcKey]) {
                element.src = currentContent[srcKey];
                
                // Special handling for video source elements
                if (element.tagName === 'SOURCE') {
                    const video = element.closest('video');
                    if (video) {
                        video.load(); // Reload video with new source
                        // Try to play after load (autoplay may be blocked)
                        video.play().catch(err => {
                            // Autoplay was prevented, but that's okay
                            console.log('Video autoplay prevented:', err);
                        });
                    }
                }
                
                // Match heights after image loads
                element.onload = () => {
                    if (element.classList.contains('about-image')) {
                        this.matchAboutImageHeight();
                    }
                };
            } else {
                console.warn('Source key not found:', srcKey, 'for language:', this.currentLanguage);
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

        // Populate team section
        this.populateTeam();

        // Populate testimonials section
        this.populateTestimonials();

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

    // Function to fill the last row by repeating items if needed (both languages)
    getCompletedDishesArray(dishes) {
        const cardsPerRow = 3; // Show 3 cards per row
        const remainder = dishes.length % cardsPerRow;
        
        if (remainder === 0) {
            return dishes; // Already complete rows
        }
        
        const needed = cardsPerRow - remainder;
        const completedArray = [...dishes];
        
        // Add items from the beginning to complete the last row
        for (let i = 0; i < needed; i++) {
            completedArray.push(dishes[i]);
        }
        
        return completedArray;
    }

    // Function to fill the last row by repeating team members if needed (both languages)
    getCompletedTeamMembersArray(members) {
        const cardsPerRow = 3; // Show 3 cards per row
        const remainder = members.length % cardsPerRow;
        
        if (remainder === 0) {
            return members; // Already complete rows
        }
        
        const needed = cardsPerRow - remainder;
        const completedArray = [...members];
        
        // Add members from the beginning to complete the last row
        for (let i = 0; i < needed; i++) {
            completedArray.push(members[i]);
        }
        
        return completedArray;
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

        // Create shared carousel with completed rows
        const activeCategory = menuCategories.find(cat => cat.isActive);
        if (activeCategory) {
            // Calculate how many dishes we need to complete the last row
            const dishesToShow = this.getCompletedDishesArray(activeCategory.dishes);
            
            menuCarouselContainer.innerHTML = `
                <div class="menu-carousel">
                    <div class="menu-carousel-track" data-category="${activeCategory.id}">
                        ${dishesToShow.map(dish => `
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
                        <button class="menu-carousel-btn prev-btn">‹</button>
                        <button class="menu-carousel-btn next-btn">›</button>
                    </div>
                </div>
            `;
        }

        this.bindMenuShowcaseEvents();
        setTimeout(() => this.updateCarouselButtons(), 100);
    }

    bindMenuShowcaseEvents() {
        // Use event delegation for category name clicks to avoid duplicate listeners
        const existingCategoryHandler = this._categoryClickHandler;
        if (existingCategoryHandler) {
            document.removeEventListener('click', existingCategoryHandler);
        }
        
        // Create new handler for category clicks
        this._categoryClickHandler = (e) => {
            const categoryName = e.target.closest('.menu-category-name');
            if (!categoryName) return;
            
            const categoryElement = categoryName.closest('.menu-category');
            if (categoryElement) {
                this.setActiveCategory(categoryElement.dataset.categoryId);
            }
        };
        
        // Use event delegation
        document.addEventListener('click', this._categoryClickHandler);

        // Bind carousel navigation
        this.bindCarouselNavigation();
    }

    bindCarouselNavigation() {
        // Use event delegation to avoid duplicate listeners
        // Remove existing delegated listener if any
        const existingHandler = this._carouselNavHandler;
        if (existingHandler) {
            document.removeEventListener('click', existingHandler);
        }
        
        // Create new handler
        this._carouselNavHandler = (e) => {
            // Check if clicked element is a carousel button
            const btn = e.target.closest('.menu-carousel-btn');
            if (!btn) return;
            
            const isNext = btn.classList.contains('next-btn');
            // Detect if this button belongs to team carousel
            const isTeamCarousel = btn.closest('.team-carousel-container') !== null || 
                                   btn.closest('.team-carousel-nav') !== null;
            
            if (isTeamCarousel) {
                this.navigateTeamCarousel(isNext ? 'next' : 'prev');
            } else {
                this.navigateCarousel(isNext, false);
            }
        };
        
        // Use event delegation on document
        document.addEventListener('click', this._carouselNavHandler);
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

        // Calculate how many dishes we need to complete the last row
        const dishesToShow = this.getCompletedDishesArray(category.dishes);

        menuCarouselContainer.innerHTML = `
            <div class="menu-carousel">
                <div class="menu-carousel-track" data-category="${category.id}">
                    ${dishesToShow.map(dish => `
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
                        <button class="menu-carousel-btn prev-btn">‹</button>
                        <button class="menu-carousel-btn next-btn">›</button>
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

    navigateCarousel(isNext, isTeamCarousel = false) {
        // Target the appropriate carousel track
        const trackSelector = isTeamCarousel
            ? '.menu-carousel-track[data-category="team"]'
            : '.menu-carousel-track:not([data-category="team"])';

        const track = document.querySelector(trackSelector);
        const cards = track ? track.querySelectorAll('.menu-card') : [];
        const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

        if (!track || cards.length === 0) return;

        // Determine cards to show based on screen width
        const screenWidth = window.innerWidth;
        let cardsToShow = 3; // Default for desktop
        
        if (screenWidth <= 1024) {
            cardsToShow = 1; // Tablet and mobile show 1 card
        } else if (screenWidth <= 1400) {
            cardsToShow = 2; // Medium desktop show 2 cards
        }

        const cardWidth = cards[0].offsetWidth + (screenWidth <= 768 ? 0 : 16); // Remove gap on mobile
        const scrollAmount = cardWidth * cardsToShow;

        // Get current position
        let currentPosition = 0;
        if (track.style.transform) {
            const transformValue = parseFloat(track.style.transform.match(/translateX\(([^)]+)\)/)[1]);
            // For RTL, the transform value is positive, for LTR it's negative
            currentPosition = Math.abs(transformValue) / scrollAmount;
        }

        // Calculate new position
        let newPosition;
        if (isNext) {
            const maxPosition = Math.ceil(cards.length / cardsToShow) - 1;
            newPosition = Math.min(currentPosition + 1, maxPosition);
        } else {
            newPosition = Math.max(currentPosition - 1, 0);
        }

        // Apply transform based on direction
        const translateX = isRTL ? (newPosition * scrollAmount) : -(newPosition * scrollAmount);
        track.style.transform = `translateX(${translateX}px)`;

        // Update button states
        if (isTeamCarousel) {
            const teamPrevBtn = document.getElementById('teamPrevBtn');
            const teamNextBtn = document.getElementById('teamNextBtn');

            if (teamPrevBtn) teamPrevBtn.disabled = newPosition <= 0;
            if (teamNextBtn) teamNextBtn.disabled = newPosition >= Math.ceil(cards.length / cardsToShow) - 1;
        } else {
            const carouselContainer = track.closest('.menu-carousel-container');
            const prevBtn = carouselContainer ? carouselContainer.querySelector('.prev-btn') : document.querySelector('.prev-btn');
            const nextBtn = carouselContainer ? carouselContainer.querySelector('.next-btn') : document.querySelector('.next-btn');

            if (prevBtn) prevBtn.disabled = newPosition <= 0;
            if (nextBtn) nextBtn.disabled = newPosition >= Math.ceil(cards.length / cardsToShow) - 1;
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

    // Theme Toggle Functions
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', this.currentTheme);
        this.applyTheme();
        this.updateThemeIcon();
    }

    applyTheme() {
        const body = document.body;
        if (this.currentTheme === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }

    updateThemeIcon() {
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) {
            themeIcon.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
        }
    }

    updateColorIcon() {
        const colorIcon = document.querySelector('.color-icon');
        if (colorIcon) {
            const currentContent = content[this.currentLanguage];
            // Always use the default icon for now to prevent disappearing
            colorIcon.src = currentContent.colorModeIcon;
        }
    }

    // Color Scheme Functions
    toggleColorScheme() {
        this.currentColorScheme = this.currentColorScheme === 'default' ? 'warm' : 'default';
        localStorage.setItem('colorScheme', this.currentColorScheme);
        this.applyColorScheme();
    }

    applyColorScheme() {
        const body = document.body;
        if (this.currentColorScheme === 'warm') {
            body.classList.add('warm-mode');
        } else {
            body.classList.remove('warm-mode');
        }
        this.updateColorIcon();
    }

    // Team Section - Following menu design pattern with creative adaptations
    populateTeam() {
        const teamCarouselContainer = document.getElementById('teamCarouselContainer');
        if (!teamCarouselContainer) return;

        const teamMembers = content[this.currentLanguage].teamMembers;

        // Calculate how many team members we need to complete the last row
        const membersToShow = this.getCompletedTeamMembersArray(teamMembers);

        // Create creative team showcase following menu pattern
        teamCarouselContainer.innerHTML = `
            <div class="menu-carousel">
                <div class="menu-carousel-track" data-category="team">
                    ${membersToShow.map(member => `
                        <div class="menu-card team-member-card">
                            <div class="menu-card-image team-member-image">
                                <img src="${member.image}" alt="${member.name}" class="team-member-photo">
                                ${member.award ? `<div class="team-member-award">${member.award}</div>` : ''}
                            </div>
                            <div class="menu-card-content team-member-content">
                                <h3 class="menu-card-title team-member-name">${member.name}</h3>
                                <p class="team-member-role">${member.role}</p>
                                <p class="team-member-bio">${member.bio}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="team-carousel-nav">
                    <button class="menu-carousel-btn prev-btn" id="teamPrevBtn">‹</button>
                    <button class="menu-carousel-btn next-btn" id="teamNextBtn">›</button>
                </div>
            </div>
        `;

        // Reset carousel position
        const teamTrack = document.querySelector('.menu-carousel-track[data-category="team"]');
        if (teamTrack) {
            teamTrack.style.transform = 'translateX(0)';
        }

        // Bind navigation events (reusing menu carousel functions for team)
        this.bindMenuShowcaseEvents();
        setTimeout(() => this.updateCarouselButtons(), 100);
    }

    // Testimonials Section
    populateTestimonials() {
        const testimonialsContainer = document.getElementById('testimonialsContainer');
        if (!testimonialsContainer) return;

        const testimonials = content[this.currentLanguage].testimonials;

        // Create testimonials grid
        testimonialsContainer.innerHTML = `
            <div class="testimonials-grid">
                ${testimonials.map(testimonial => `
                    <div class="testimonial-card">
                        <div class="testimonial-header">
                            <div class="testimonial-image">
                                <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-photo">
                            </div>
                            <div class="testimonial-info">
                                <h4 class="testimonial-name">${testimonial.name}</h4>
                                <p class="testimonial-title">${testimonial.title}</p>
                                <div class="testimonial-rating">
                                    ${'★'.repeat(testimonial.rating)}
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-content">
                            <blockquote class="testimonial-quote">
                                ${testimonial.quote}
                            </blockquote>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Team-specific carousel navigation functions
    bindTeamCarouselEvents() {
        const teamPrevBtn = document.getElementById('teamPrevBtn');
        const teamNextBtn = document.getElementById('teamNextBtn');

        if (teamPrevBtn) {
            teamPrevBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateTeamCarousel('prev');
            });
        }

        if (teamNextBtn) {
            teamNextBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateTeamCarousel('next');
            });
        }
    }

    navigateTeamCarousel(direction) {
        const track = document.querySelector('.menu-carousel-track[data-category="team"]');
        const cards = track ? track.querySelectorAll('.menu-card') : [];
        const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

        if (!track || cards.length === 0) return;

        // Determine cards to show based on screen width
        const screenWidth = window.innerWidth;
        let cardsToShow = 2; // Default for desktop (team shows 2 cards)
        
        if (screenWidth <= 1024) {
            cardsToShow = 1; // Tablet and mobile show 1 card
        } else if (screenWidth <= 1400) {
            cardsToShow = 1; // Medium desktop also show 1 card for team
        }

        const cardWidth = cards[0].offsetWidth + (screenWidth <= 768 ? 0 : 16); // Remove gap on mobile
        const scrollAmount = cardWidth * cardsToShow;

        // Get current position
        let currentPosition = 0;
        if (track.style.transform) {
            const transformValue = parseFloat(track.style.transform.match(/translateX\(([^)]+)\)/)[1]);
            // For RTL, transform value is positive, for LTR it's negative
            currentPosition = Math.abs(transformValue) / scrollAmount;
        }

        // Calculate new position
        let newPosition;
        if (direction === 'next') {
            const maxPosition = Math.ceil(cards.length / cardsToShow) - 1;
            newPosition = Math.min(currentPosition + 1, maxPosition);
        } else {
            newPosition = Math.max(currentPosition - 1, 0);
        }

        // Apply transform based on direction
        const translateX = isRTL ? (newPosition * scrollAmount) : -(newPosition * scrollAmount);
        track.style.transform = `translateX(${translateX}px)`;

        this.updateTeamCarouselButtons();
    }

    updateCarouselButtons() {
        const track = document.querySelector('.menu-carousel-track:not([data-category="team"])');
        const cards = track ? track.querySelectorAll('.menu-card') : [];
        const carouselContainer = document.querySelector('.menu-carousel-container');
        const prevBtn = carouselContainer ? carouselContainer.querySelector('.prev-btn') : document.querySelector('.prev-btn');
        const nextBtn = carouselContainer ? carouselContainer.querySelector('.next-btn') : document.querySelector('.next-btn');

        if (!track || !cards.length || !prevBtn || !nextBtn) return;

        // Determine cards to show based on screen width
        const screenWidth = window.innerWidth;
        let cardsToShow = 3; // Default for desktop
        
        if (screenWidth <= 1024) {
            cardsToShow = 1; // Tablet and mobile show 1 card
        } else if (screenWidth <= 1400) {
            cardsToShow = 2; // Medium desktop show 2 cards
        }

        const cardWidth = cards[0].offsetWidth + (screenWidth <= 768 ? 0 : 16);
        const scrollAmount = cardWidth * cardsToShow;

        let currentPosition = 0;
        if (track.style.transform) {
            const transformValue = parseFloat(track.style.transform.match(/translateX\(([^)]+)\)/)[1]);
            currentPosition = Math.abs(transformValue) / scrollAmount;
        }

        const maxPosition = Math.ceil(cards.length / cardsToShow) - 1;

        prevBtn.disabled = currentPosition <= 0;
        nextBtn.disabled = currentPosition >= maxPosition;
    }

    updateTeamCarouselButtons() {
        const track = document.querySelector('.menu-carousel-track[data-category="team"]');
        const cards = track ? track.querySelectorAll('.menu-card') : [];
        const teamPrevBtn = document.getElementById('teamPrevBtn');
        const teamNextBtn = document.getElementById('teamNextBtn');

        if (!track || !cards.length) return;

        // Determine cards to show based on screen width
        const screenWidth = window.innerWidth;
        let cardsToShow = 2; // Default for desktop (team shows 2 cards)
        
        if (screenWidth <= 1024) {
            cardsToShow = 1; // Tablet and mobile show 1 card
        } else if (screenWidth <= 1400) {
            cardsToShow = 1; // Medium desktop also show 1 card for team
        }

        const cardWidth = cards[0].offsetWidth + (screenWidth <= 768 ? 0 : 16);
        const scrollAmount = cardWidth * cardsToShow;

        let currentPosition = 0;
        if (track.style.transform) {
            const transformValue = parseFloat(track.style.transform.match(/translateX\(([^)]+)\)/)[1]);
            currentPosition = Math.abs(transformValue) / scrollAmount;
        }

        const maxPosition = Math.ceil(cards.length / cardsToShow) - 1;

        if (teamPrevBtn) teamPrevBtn.disabled = currentPosition <= 0;
        if (teamNextBtn) teamNextBtn.disabled = currentPosition >= maxPosition;
    }

    updateTeamCarouselArrows() {
        const teamPrevBtn = document.getElementById('teamPrevBtn');
        const teamNextBtn = document.getElementById('teamNextBtn');

        if (teamPrevBtn) teamPrevBtn.textContent = '‹';
        if (teamNextBtn) teamNextBtn.textContent = '›';
    }

    initializeDatePicker() {
        const dateInput = document.getElementById('bookingDate');
        if (!dateInput || typeof flatpickr === 'undefined') return;

        // Function to check if a date is selectable (Thursday, Friday, or Saturday in 2026 and not before today)
        const isDateSelectable = (date) => {
            const today = new Date();
            today.setHours(0, 0, 0, 0); // Set to start of day for accurate comparison
            
            // Check if date is in 2026
            if (date.getFullYear() !== 2026) return false;
            
            // Check if date is before today
            if (date < today) return false;
            
            // Check if day is Thursday (4), Friday (5), or Saturday (6)
            const dayOfWeek = date.getDay();
            return dayOfWeek === 4 || dayOfWeek === 5 || dayOfWeek === 6;
        };

        const isRTL = this.currentLanguage === 'ar';
        
        // Destroy existing instance if any
        if (window.bookingDatePicker) {
            window.bookingDatePicker.destroy();
        }

        // Initialize Flatpickr
        window.bookingDatePicker = flatpickr(dateInput, {
            dateFormat: 'Y-m-d',
            enable: [isDateSelectable],
            minDate: 'today',
            maxDate: '2026-12-31',
            locale: isRTL ? {
                firstDayOfWeek: 6,
                weekdays: {
                    shorthand: ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
                    longhand: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']
                },
                months: {
                    shorthand: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
                    longhand: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
                }
            } : undefined,
            disableMobile: false,
            allowInput: false,
            clickOpens: true
        });
    }

    updateDatePickerLocale() {
        if (!window.bookingDatePicker) return;
        
        const isRTL = this.currentLanguage === 'ar';
        
        // Function to check if a date is selectable (Thursday, Friday, or Saturday in 2026 and not before today)
        const isDateSelectable = (date) => {
            const today = new Date();
            today.setHours(0, 0, 0, 0); // Set to start of day for accurate comparison
            
            // Check if date is in 2026
            if (date.getFullYear() !== 2026) return false;
            
            // Check if date is before today
            if (date < today) return false;
            
            // Check if day is Thursday (4), Friday (5), or Saturday (6)
            const dayOfWeek = date.getDay();
            return dayOfWeek === 4 || dayOfWeek === 5 || dayOfWeek === 6;
        };

        // Re-initialize with new locale
        window.bookingDatePicker.destroy();
        const dateInput = document.getElementById('bookingDate');
        window.bookingDatePicker = flatpickr(dateInput, {
            dateFormat: 'Y-m-d',
            enable: [isDateSelectable],
            minDate: 'today',
            maxDate: '2026-12-31',
            locale: isRTL ? {
                firstDayOfWeek: 6,
                weekdays: {
                    shorthand: ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
                    longhand: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']
                },
                months: {
                    shorthand: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
                    longhand: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
                }
            } : undefined,
            disableMobile: false,
            allowInput: false,
            clickOpens: true
        });
    }
    
    updateModalDatePickerLocale() {
        if (!window.bookingFormModalDatePicker) return;
        
        const isRTL = this.currentLanguage === 'ar';
        
        // Function to check if a date is selectable (Thursday, Friday, or Saturday in 2026 and not before today)
        const isDateSelectable = (date) => {
            const today = new Date();
            today.setHours(0, 0, 0, 0); // Set to start of day for accurate comparison
            
            // Check if date is in 2026
            if (date.getFullYear() !== 2026) return false;
            
            // Check if date is before today
            if (date < today) return false;
            
            // Check if day is Thursday (4), Friday (5), or Saturday (6)
            const dayOfWeek = date.getDay();
            return dayOfWeek === 4 || dayOfWeek === 5 || dayOfWeek === 6;
        };
        
        window.bookingFormModalDatePicker.destroy();
        const dateInput = document.getElementById('modalBookingDate');
        window.bookingFormModalDatePicker = flatpickr(dateInput, {
            dateFormat: 'Y-m-d',
            enable: [isDateSelectable],
            minDate: 'today',
            maxDate: '2026-12-31',
            locale: isRTL ? {
                firstDayOfWeek: 6,
                weekdays: {
                    shorthand: ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
                    longhand: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']
                },
                months: {
                    shorthand: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
                    longhand: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
                }
            } : undefined,
            disableMobile: false,
            allowInput: false,
            clickOpens: true
        });
    }

}

// Initialize the language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait for Flatpickr to load if using CDN
    const initApp = () => {
        if (typeof flatpickr === 'undefined' && document.querySelector('script[src*="flatpickr"]')) {
            // Wait a bit more for CDN to load
            setTimeout(initApp, 100);
            return;
        }
        
        const languageManager = new LanguageManager();
        
        // Initialize phone validation
        initializePhoneValidation();
        
        // Initialize booking form functionality after a short delay to ensure DOM is fully ready
        setTimeout(() => {
            initializeBookingForm();
            initializeBookingFormModal();
        }, 100);
    };
    
    initApp();
});

// Booking form functionality
let bookingFormInitialized = false;

function initializePhoneValidation() {
    // Phone validation function
    function validatePhoneInput(input, errorElement) {
        const value = input.value.trim();
        const currentLanguage = localStorage.getItem('language') || 'ar';
        const currentContent = content[currentLanguage];
        
        // Clear previous error
        errorElement.classList.remove('show');
        
        // Check if exactly 8 digits
        if (value.length !== 8 || !/^\d{8}$/.test(value)) {
            errorElement.textContent = currentContent.phoneValidationError;
            errorElement.classList.add('show');
            input.style.borderColor = '#dc3545';
            return false;
        }
        
        // Valid input
        input.style.borderColor = '';
        return true;
    }
    
    // Main booking form phone validation
    const phoneInput = document.getElementById('phoneNumber');
    const phoneError = document.getElementById('phoneError');
    
    if (phoneInput && phoneError) {
        // Real-time validation
        phoneInput.addEventListener('input', () => {
            // Only allow digits
            phoneInput.value = phoneInput.value.replace(/[^0-9]/g, '');
            
            // Validate if user has entered something
            if (phoneInput.value.length > 0) {
                validatePhoneInput(phoneInput, phoneError);
            } else {
                phoneError.classList.remove('show');
                phoneInput.style.borderColor = '';
            }
        });
        
        // Prevent non-numeric input
        phoneInput.addEventListener('keypress', (e) => {
            if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
            }
        });
    }
    
    // Modal form phone validation
    const modalPhoneInput = document.getElementById('modalPhoneNumber');
    const modalPhoneError = document.getElementById('modalPhoneError');
    
    if (modalPhoneInput && modalPhoneError) {
        // Real-time validation
        modalPhoneInput.addEventListener('input', () => {
            // Only allow digits
            modalPhoneInput.value = modalPhoneInput.value.replace(/[^0-9]/g, '');
            
            // Validate if user has entered something
            if (modalPhoneInput.value.length > 0) {
                validatePhoneInput(modalPhoneInput, modalPhoneError);
            } else {
                modalPhoneError.classList.remove('show');
                modalPhoneInput.style.borderColor = '';
            }
        });
        
        // Prevent non-numeric input
        modalPhoneInput.addEventListener('keypress', (e) => {
            if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
            }
        });
    }
}

function initializeBookingForm() {
    // Prevent duplicate initialization
    if (bookingFormInitialized) return;
    bookingFormInitialized = true;

    const bookingForm = document.getElementById('bookingForm');
    const fullNameInput = document.getElementById('fullName');
    const phoneInput = document.getElementById('phoneNumber');

    // Restrict name input to letters and spaces only
    if (fullNameInput) {
        fullNameInput.addEventListener('input', (e) => {
            // Remove any non-letter and non-space characters (allows letters and spaces)
            e.target.value = e.target.value.replace(/[^a-zA-Z\u0600-\u06FF\s]/g, '');
        });

        fullNameInput.addEventListener('keypress', (e) => {
            // Allow letters (English and Arabic), spaces, and control keys
            const key = e.key;
            const isLetter = /[a-zA-Z\u0600-\u06FF]/.test(key);
            const isSpace = key === ' ';
            const isControlKey = ['Backspace', 'Delete', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight'].includes(key);
            
            if (!isLetter && !isSpace && !isControlKey) {
                e.preventDefault();
            }
        });
    }

    // Restrict phone input to numbers only
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            // Remove any non-numeric characters
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });

        phoneInput.addEventListener('keypress', (e) => {
            // Prevent non-numeric keys
            if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                e.preventDefault();
            }
        });
    }

    // Add real-time validation for number of guests
    const guestsInput = document.getElementById('numberOfGuests');
    if (guestsInput) {
        guestsInput.addEventListener('input', (e) => {
            const numberOfGuests = parseInt(e.target.value);
            if (numberOfGuests > 200) {
                const currentLanguage = localStorage.getItem('language') || 'ar';
                const errorMessage = currentLanguage === 'ar' 
                    ? 'الحد الأقصى للضيوف هو 200 شخص'
                    : 'Maximum number of guests is 200';
                
                alert(errorMessage);
                e.target.value = 200; // Reset to maximum allowed
            }
        });
    }

    // Handle form submission
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validate number of guests
            const guestsInput = document.getElementById('numberOfGuests');
            const numberOfGuests = parseInt(guestsInput.value);
            
            if (numberOfGuests > 200) {
                const currentLanguage = localStorage.getItem('language') || 'ar';
                const errorMessage = currentLanguage === 'ar' 
                    ? 'الحد الأقصى للضيوف هو 200 شخص'
                    : 'Maximum number of guests is 200';
                
                alert(errorMessage);
                guestsInput.focus();
                return;
            }
            
            // Validate phone number
            const phoneInput = document.getElementById('phoneNumber');
            const phoneError = document.getElementById('phoneError');
            
            if (!validatePhoneInput(phoneInput, phoneError)) {
                phoneInput.focus();
                return;
            }
            
            // Validate date before submission (Flatpickr already handles this, but double-check)
            const dateInput = document.getElementById('bookingDate');
            const selectedDate = dateInput.value;
            
            if (!selectedDate) {
                const currentLanguage = localStorage.getItem('language') || 'ar';
                const errorMessage = currentLanguage === 'ar' 
                    ? 'يرجى اختيار تاريخ'
                    : 'Please select a date';
                
                alert(errorMessage);
                dateInput.focus();
                return;
            }
            
            const formData = {
                fullName: document.getElementById('fullName').value,
                phoneNumber: '009627' + document.getElementById('phoneNumber').value,
                numberOfGuests: parseInt(document.getElementById('numberOfGuests').value),
                mealType: document.getElementById('mealType').value,
                bookingDate: document.getElementById('bookingDate').value
            };

            // Here you can add your booking logic (send to server, show confirmation, etc.)
            console.log('Booking submitted:', formData);
            
            // Calculate total price (number of guests × 20 JD)
            const pricePerGuest = 20;
            const totalPrice = formData.numberOfGuests * pricePerGuest;
            
            // Show confirmation modal with price
            showBookingConfirmationModal(formData.numberOfGuests, totalPrice);
            
            // Reset form
            bookingForm.reset();
            
            // Clear Flatpickr instance after reset
            if (window.bookingDatePicker) {
                window.bookingDatePicker.clear();
            }
        });
    }
}

// Booking Form Modal Functions
function showBookingFormModal() {
    const modalOverlay = document.getElementById('bookingFormModalOverlay');
    if (!modalOverlay) return;
    
    modalOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    // Initialize date picker for modal if not already initialized
    if (!window.bookingFormModalDatePicker) {
        initializeModalDatePicker();
    }
}

function closeBookingFormModal() {
    const modalOverlay = document.getElementById('bookingFormModalOverlay');
    if (!modalOverlay) return;
    
    modalOverlay.classList.remove('show');
    document.body.style.overflow = '';
}

function initializeBookingFormModal() {
    // Hero button click handler
    const heroBookNowBtn = document.getElementById('heroBookNowBtn');
    if (heroBookNowBtn) {
        heroBookNowBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showBookingFormModal();
        });
    }
    
    // Close button handler
    const closeBtn = document.getElementById('bookingFormModalCloseBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeBookingFormModal();
        });
    }
    
    // Close on overlay click
    const modalOverlay = document.getElementById('bookingFormModalOverlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeBookingFormModal();
            }
        });
    }
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const modalOverlay = document.getElementById('bookingFormModalOverlay');
            if (modalOverlay && modalOverlay.classList.contains('show')) {
                closeBookingFormModal();
            }
        }
    });
    
    // Initialize modal form submission
    const modalForm = document.getElementById('bookingFormModal');
    if (modalForm) {
        // Apply same input restrictions as main form
        const modalFullName = document.getElementById('modalFullName');
        const modalPhone = document.getElementById('modalPhoneNumber');
        
        if (modalFullName) {
            modalFullName.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^a-zA-Z\u0600-\u06FF\s]/g, '');
            });
            
            modalFullName.addEventListener('keypress', (e) => {
                const key = e.key;
                const isLetter = /[a-zA-Z\u0600-\u06FF]/.test(key);
                const isSpace = key === ' ';
                const isControlKey = ['Backspace', 'Delete', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight'].includes(key);
                
                if (!isLetter && !isSpace && !isControlKey) {
                    e.preventDefault();
                }
            });
        }
        
        if (modalPhone) {
            modalPhone.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
            });
            
            modalPhone.addEventListener('keypress', (e) => {
                if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                    e.preventDefault();
                }
            });
        }

        // Add real-time validation for modal number of guests
        const modalGuestsInput = document.getElementById('modalNumberOfGuests');
        if (modalGuestsInput) {
            modalGuestsInput.addEventListener('input', (e) => {
                const numberOfGuests = parseInt(e.target.value);
                if (numberOfGuests > 200) {
                    const currentLanguage = localStorage.getItem('language') || 'ar';
                    const errorMessage = currentLanguage === 'ar' 
                        ? 'الحد الأقصى للضيوف هو 200 شخص'
                        : 'Maximum number of guests is 200';
                    
                    alert(errorMessage);
                    e.target.value = 200; // Reset to maximum allowed
                }
            });
        }
        
        // Handle form submission
        modalForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Validate number of guests
            const guestsInput = document.getElementById('modalNumberOfGuests');
            const numberOfGuests = parseInt(guestsInput.value);
            
            if (numberOfGuests > 200) {
                const currentLanguage = localStorage.getItem('language') || 'ar';
                const errorMessage = currentLanguage === 'ar' 
                    ? 'الحد الأقصى للضيوف هو 200 شخص'
                    : 'Maximum number of guests is 200';
                
                alert(errorMessage);
                guestsInput.focus();
                return;
            }
            
            // Validate phone number
            const modalPhoneInput = document.getElementById('modalPhoneNumber');
            const modalPhoneError = document.getElementById('modalPhoneError');
            
            if (!validatePhoneInput(modalPhoneInput, modalPhoneError)) {
                modalPhoneInput.focus();
                return;
            }
            
            const dateInput = document.getElementById('modalBookingDate');
            const selectedDate = dateInput.value;
            
            if (!selectedDate) {
                const currentLanguage = localStorage.getItem('language') || 'ar';
                const errorMessage = currentLanguage === 'ar' 
                    ? 'يرجى اختيار تاريخ'
                    : 'Please select a date';
                
                alert(errorMessage);
                dateInput.focus();
                return;
            }
            
            const formData = {
                fullName: document.getElementById('modalFullName').value,
                phoneNumber: '009627' + document.getElementById('modalPhoneNumber').value,
                numberOfGuests: parseInt(document.getElementById('modalNumberOfGuests').value),
                mealType: document.getElementById('modalMealType').value,
                bookingDate: document.getElementById('modalBookingDate').value
            };
            
            console.log('Booking submitted from modal:', formData);
            
            // Calculate total price
            const pricePerGuest = 20;
            const totalPrice = formData.numberOfGuests * pricePerGuest;
            
            // Close booking form modal
            closeBookingFormModal();
            
            // Show confirmation modal
            showBookingConfirmationModal(formData.numberOfGuests, totalPrice);
            
            // Reset form
            modalForm.reset();
            
            // Clear date picker
            if (window.bookingFormModalDatePicker) {
                window.bookingFormModalDatePicker.clear();
            }
        });
    }
}

function initializeModalDatePicker() {
    const dateInput = document.getElementById('modalBookingDate');
    if (!dateInput || typeof flatpickr === 'undefined') return;
    
    // Function to check if a date is selectable (Thursday, Friday, or Saturday in 2026 and not before today)
    const isDateSelectable = (date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set to start of day for accurate comparison
        
        // Check if date is in 2026
        if (date.getFullYear() !== 2026) return false;
        
        // Check if date is before today
        if (date < today) return false;
        
        // Check if day is Thursday (4), Friday (5), or Saturday (6)
        const dayOfWeek = date.getDay();
        return dayOfWeek === 4 || dayOfWeek === 5 || dayOfWeek === 6;
    };
    
    const currentLanguage = localStorage.getItem('language') || 'ar';
    const isRTL = currentLanguage === 'ar';
    
    window.bookingFormModalDatePicker = flatpickr(dateInput, {
        dateFormat: 'Y-m-d',
        enable: [isDateSelectable],
        minDate: 'today',
        maxDate: '2026-12-31',
        locale: isRTL ? {
            firstDayOfWeek: 6,
            weekdays: {
                shorthand: ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'],
                longhand: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']
            },
            months: {
                shorthand: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
                longhand: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
            }
        } : undefined,
        disableMobile: false,
        allowInput: false,
        clickOpens: true
    });
}

// Booking Confirmation Modal Functions
function showBookingConfirmationModal(numberOfGuests, totalPrice) {
    const modalOverlay = document.getElementById('bookingModalOverlay');
    const currentLanguage = localStorage.getItem('language') || 'ar';
    const currentContent = content[currentLanguage];
    
    if (!modalOverlay) return;
    
    // Update modal content
    document.getElementById('modalTitle').textContent = currentContent.bookingConfirmationTitle;
    document.getElementById('modalMessage').textContent = currentContent.bookingConfirmationMessage;
    document.getElementById('numberOfGuestsValue').textContent = numberOfGuests;
    document.getElementById('pricePerGuest').textContent = currentContent.bookingPricePerGuest;
    document.getElementById('totalLabel').textContent = currentContent.bookingTotalPrice;
    document.getElementById('totalAmount').textContent = totalPrice;
    document.getElementById('modalCloseBtn').textContent = currentContent.bookingCloseButton;
    
    // Show modal with animation
    modalOverlay.classList.add('show');
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Add close handlers
    const closeModal = () => {
        modalOverlay.classList.remove('show');
        document.body.style.overflow = '';
    };
    
    // Close button
    const closeBtn = document.getElementById('modalCloseBtn');
    if (closeBtn) {
        closeBtn.onclick = closeModal;
    }
    
    // Close on overlay click
    modalOverlay.onclick = (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    };
    
    // Close on Escape key
    const escapeHandler = (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('show')) {
            closeModal();
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

// Update modal content when language changes
function updateBookingModalContent() {
    const modalOverlay = document.getElementById('bookingModalOverlay');
    if (!modalOverlay || !modalOverlay.classList.contains('show')) return;
    
    const currentLanguage = localStorage.getItem('language') || 'ar';
    const currentContent = content[currentLanguage];
    const totalAmount = parseInt(document.getElementById('totalAmount').textContent) || 0;
    const numberOfGuests = parseInt(document.getElementById('numberOfGuestsValue').textContent) || 0;
    
    document.getElementById('modalTitle').textContent = currentContent.bookingConfirmationTitle;
    document.getElementById('modalMessage').textContent = currentContent.bookingConfirmationMessage;
    document.getElementById('numberOfGuestsValue').textContent = numberOfGuests;
    document.getElementById('pricePerGuest').textContent = currentContent.bookingPricePerGuest;
    document.getElementById('totalLabel').textContent = currentContent.bookingTotalPrice;
    document.getElementById('modalCloseBtn').textContent = currentContent.bookingCloseButton;
}

// Footer (Policies + WhatsApp support + Social sharing)
let footerEventsBound = false;
let footerToastTimeoutId = null;

function getActiveLanguage() {
    return localStorage.getItem('language') || 'ar';
}

function getActiveContent() {
    return content[getActiveLanguage()];
}

function normalizePhoneNumberToDigits(phone) {
    if (!phone) return '';
    return String(phone).replace(/\D/g, '');
}

function getShareUrl() {
    // Avoid sharing internal anchors
    return window.location.href.split('#')[0];
}

function openExternalWindow(url) {
    const w = window.open(url, '_blank');
    if (w) w.opener = null;
}

function showFooterToast(message) {
    const toast = document.getElementById('footerToast');
    if (!toast) return;

    toast.textContent = message || '';
    toast.classList.add('show');

    if (footerToastTimeoutId) {
        clearTimeout(footerToastTimeoutId);
    }
    footerToastTimeoutId = setTimeout(() => {
        toast.classList.remove('show');
    }, 2600);
}

async function copyToClipboard(text) {
    // Modern API
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        await navigator.clipboard.writeText(text);
        return;
    }

    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

function updateWhatsAppSupportLink() {
    const btn = document.getElementById('whatsappSupportBtn');
    if (!btn) return;

    const current = getActiveContent();
    const digits = normalizePhoneNumberToDigits(current.contactPhone);
    const message = current.footerWhatsAppPrefill || '';

    if (!digits) {
        btn.href = '#';
        btn.classList.add('disabled');
        btn.setAttribute('aria-disabled', 'true');
        return;
    }

    btn.classList.remove('disabled');
    btn.removeAttribute('aria-disabled');
    btn.href = `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

function getPolicyContent(policyType) {
    const current = getActiveContent();
    switch (policyType) {
        case 'refund':
            return { title: current.policyRefundTitle, body: current.policyRefundBody };
        case 'booking':
            return { title: current.policyBookingTitle, body: current.policyBookingBody };
        case 'cancellation':
            return { title: current.policyCancellationTitle, body: current.policyCancellationBody };
        default:
            return null;
    }
}

function openPolicyModal(policyType) {
    const overlay = document.getElementById('policyModalOverlay');
    const titleEl = document.getElementById('policyModalTitle');
    const bodyEl = document.getElementById('policyModalBody');

    if (!overlay || !titleEl || !bodyEl) return;

    const policy = getPolicyContent(policyType);
    if (!policy) return;

    titleEl.textContent = policy.title || '';
    bodyEl.textContent = policy.body || '';

    overlay.classList.add('show');
    overlay.setAttribute('aria-hidden', 'false');
}

function closePolicyModal() {
    const overlay = document.getElementById('policyModalOverlay');
    if (!overlay) return;

    overlay.classList.remove('show');
    overlay.setAttribute('aria-hidden', 'true');
}

async function handleShareAction(kind) {
    const current = getActiveContent();
    const url = getShareUrl();
    const message = current.footerShareMessage || document.title || '';

    if (kind === 'facebook') {
        openExternalWindow(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        return;
    }

    if (kind === 'whatsapp') {
        openExternalWindow(`https://wa.me/?text=${encodeURIComponent(`${message} ${url}`)}`);
        return;
    }

    if (kind === 'instagram') {
        // Instagram doesn't support direct web share of arbitrary URLs,
        // so we "smart share": copy link then open Instagram.
        try {
            await copyToClipboard(url);
            showFooterToast(current.footerInstagramHint || current.footerLinkCopied || '');
        } catch (e) {
            // Last resort: prompt user to copy
            showFooterToast(current.footerCopyFailed || '');
            window.prompt(current.footerCopyFailed || 'Copy this link:', url);
        }
        openExternalWindow('https://www.instagram.com/');
    }
}

function bindFooterEventsOnce() {
    if (footerEventsBound) return;
    footerEventsBound = true;

    document.addEventListener('click', (e) => {
        const policyBtn = e.target.closest('[data-policy]');
        if (policyBtn) {
            openPolicyModal(policyBtn.getAttribute('data-policy'));
            return;
        }

        const shareBtn = e.target.closest('[data-share]');
        if (shareBtn) {
            handleShareAction(shareBtn.getAttribute('data-share'));
        }
    });

    const overlay = document.getElementById('policyModalOverlay');
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closePolicyModal();
        });
    }

    const closeBtn = document.getElementById('policyModalCloseBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closePolicyModal);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closePolicyModal();
    });
}

function initializeFooter() {
    updateWhatsAppSupportLink();
    bindFooterEventsOnce();
}