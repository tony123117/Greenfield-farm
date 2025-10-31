  // Global variables
        let currentLanguage = 'english';
        
        // Translations object
        const translations = {
            english: {
                pageTitle: "Agricultural Hub",
                farmTitle: "Greenfield Farm",
                farmDescription: "Ethical livestock & regenerative plant farming",
                shop: "Shop/CSA",
                livestock: "Livestock",
                plants: "Plants",
                home: "Home",
                about: "About",
                services: "Services",
                contact: "Contact",
                language: "Language",
                
                // Header Content
                welcomeMessage: "Welcome to our Agricultural Hub",
                mainTagline: "Empowering Nigerian Farmers",
                
                // Main Content Sections
                farmingGuide: "Farming Guide",
                marketPrices: "Market Prices",
                weatherUpdates: "Weather Updates",
                communitySection: "Community",
                
                // Buttons and Actions
                readMore: "Read More",
                learnMore: "Learn More",
                subscribe: "Subscribe",
                contact: "Contact Us",
                
                // Footer Content
                footerAbout: "About Us",
                footerServices: "Our Services",
                footerContact: "Contact Info",
                footerRights: "All Rights Reserved"
            },
            yoruba: {
                pageTitle: "Ibùdó Àgbẹ̀",
                farmTitle: "Oko Greenfield",
                farmDescription: "Ọ̀sìn ẹran àti àgbẹ̀ àtúnṣe ohun ọ̀gbìn",
                shop: "Ọjà/CSA",
                livestock: "Ẹran ọ̀sìn",
                plants: "Ohun ọ̀gbìn",
                // Navigation
                home: "Ilé",
                about: "Nípa wa",
                services: "Àwọn iṣẹ́",
                contact: "Kàn sí wa",
                language: "Èdè",
                
                // Header Content
                welcomeMessage: "Ẹ káàbọ̀ sí Ibùdó Àgbẹ̀ wa",
                mainTagline: "Ṣíṣe agbára fún àwọn Àgbẹ̀ Nàìjíríà",
                
                // Main Content Sections
                farmingGuide: "Ìtọ́sọ́nà Àgbẹ̀",
                marketPrices: "Àwọn iye ọjà",
                weatherUpdates: "Ìròyìn ojú ọjọ́",
                communitySection: "Àwùjọ",
                
                // Buttons and Actions
                readMore: "Ka síi",
                learnMore: "Kẹ́kọ̀ọ́ síi",
                subscribe: "Forúkọ sílẹ̀",
                contact: "Kàn sí wa",
                
                // Footer Content
                footerAbout: "Nípa wa",
                footerServices: "Àwọn iṣẹ́ wa",
                footerContact: "Àlàyé fún kíkàn sí wa",
                footerRights: "Gbogbo ẹ̀tọ́ wà ní àbò"
            },
            hausa: {
                pageTitle: "Cibiyar Noma",
                farmTitle: "Gonar Greenfield",
                farmDescription: "Kiwo na dabbobi da noma mai dorewa",
                shop: "Kasuwa/CSA",
                livestock: "Dabbobi",
                plants: "Tsirrai",
                // Navigation
                home: "Gida",
                about: "Game da mu",
                services: "Ayyuka",
                contact: "Tuntuɓi mu",
                language: "Harshe",
                
                // Header Content
                welcomeMessage: "Barka da zuwa Cibiyar Noma",
                mainTagline: "Ƙarfafa Manoma na Najeriya",
                
                // Main Content Sections
                farmingGuide: "Jagoran Noma",
                marketPrices: "Farashin Kasuwa",
                weatherUpdates: "Labaran Yanayi",
                communitySection: "Al'umma",
                
                // Buttons and Actions
                readMore: "Kara Karatu",
                learnMore: "Ƙara Koyo",
                subscribe: "Yi Rajista",
                contact: "Tuntuɓi Mu",
                
                // Footer Content
                footerAbout: "Game da Mu",
                footerServices: "Ayyukanmu",
                footerContact: "Bayanin Tuntuɓi",
                footerRights: "Duk Haƙƙoƙi Sun Kasance"
            },
            igbo: {
                pageTitle: "Ebe Ọrụ Ugbo",
                farmTitle: "Ubi Greenfield",
                farmDescription: "Ịzụ anụ ụlọ na ọrụ ugbo maka ọganihu",
                shop: "Ahịa/CSA",
                livestock: "Ụmụ anụmanụ",
                plants: "Osisi",
                // Navigation
                home: "Ụlọ",
                about: "Maka anyị",
                services: "Ọrụ",
                contact: "Kpọtụrụ anyị",
                language: "Asụsụ",
                
                // Header Content
                welcomeMessage: "Nnọọ na Ebe Ọrụ Ugbo anyị",
                mainTagline: "Na-enye ndị ọrụ ugbo Naịjirịa ike",
                
                // Main Content Sections
                farmingGuide: "Ntuziaka Ọrụ Ugbo",
                marketPrices: "Ọnụ ahịa ahịa",
                weatherUpdates: "Mgbanwe ihu igwe",
                communitySection: "Obodo",
                
                // Buttons and Actions
                readMore: "Gụọ Ka Ọ Dị",
                learnMore: "Mụtakwuo",
                subscribe: "Debanye aha",
                contact: "Kpọtụrụ Anyị",
                
                // Footer Content
                footerAbout: "Maka Anyị",
                footerServices: "Ọrụ Anyị",
                footerContact: "Ozi Kpọtụrụ",
                footerRights: "Ikike Niile Echekwabara"
            }
        };

        function updateContent(language) {
            const elements = document.querySelectorAll('[data-translate]');
            elements.forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[language][key]) {
                    element.textContent = translations[language][key];
                }
            });
        }

        function setLanguage(language) {
            updateContent(language);
            localStorage.setItem('preferredLanguage', language);
        }

        // Initialize with stored language preference or default to English
        document.addEventListener('DOMContentLoaded', () => {
            const storedLanguage = localStorage.getItem('preferredLanguage') || 'english';
            updateContent(storedLanguage);
        });
         // Image Slider functionality
    let currentSlide = 0;
    const slides = document.getElementsByClassName('slide');
    const dots = document.getElementsByClassName('dot');
    let slideInterval;

    function showSlide(n) {
        // Hide all slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
            dots[i].classList.remove('active');
        }
        
        currentSlide = n;
        
        // Wrap around if needed
        if (currentSlide >= slides.length) currentSlide = 0;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        
        // Show the current slide
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
        resetSlideshow();
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
        resetSlideshow();
    }

    function resetSlideshow() {
        clearInterval(slideInterval);
        startSlideshow();
    }

    function startSlideshow() {
        // Change slides every 5 seconds
        slideInterval = setInterval(() => {
            nextSlide();
        }, 5000);
    }

    // Initialize slider when page loads
    document.addEventListener('DOMContentLoaded', () => {
        startSlideshow();
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });

    // Seasonal Calendar functionality
    function initializeCalendar() {
        const seasonTabs = document.querySelectorAll('.season-tab');
        const seasonContents = document.querySelectorAll('.season-content');

        // Season data for Nigerian farming
        const seasonalData = {
            wetSeason: {
                vegetables: [
                    { name: 'Cassava (South)', available: true },
                    { name: 'Yam (All regions)', available: true },
                    { name: 'Water Leaf (South)', available: true },
                    { name: 'Okra (All regions)', available: true },
                    { name: 'Bitter Leaf (South/Middle Belt)', available: true },
                    { name: 'Cocoyam (South)', available: true },
                    { name: 'African Spinach (South/Middle Belt)', available: true },
                    { name: 'Jute Leaves (South)', available: true }
                ],
                fruits: [
                    { name: 'Mango (All regions)', available: true },
                    { name: 'Pawpaw (South/Middle Belt)', available: true },
                    { name: 'Pineapple (South)', available: true },
                    { name: 'Banana (South)', available: true },
                    { name: 'Plantain (South)', available: true },
                    { name: 'African Star Apple (South)', available: true },
                    { name: 'Soursop (South)', available: true }
                ],
                products: [
                    { name: 'Palm Oil (South)', available: true },
                    { name: 'Fresh Fish (Coastal)', available: true },
                    { name: 'Local Spices', available: true },
                    { name: 'Locust Bean (North)', available: true },
                    { name: 'Bush Mango (South)', available: true }
                ],
                events: [
                    { date: 'Apr 15', title: 'Planting Season Ceremony', description: 'Traditional celebration marking the start of planting (All regions)' },
                    { date: 'May 1', title: 'Argungu Fishing Pre-Festival', description: 'Preparation for the famous fishing festival (North)' },
                    { date: 'Jun 10', title: 'New Yam Festival (Iwaji)', description: 'Igbo cultural celebration of new yam harvest (South East)' },
                    { date: 'Jul 15', title: 'Egungun Festival', description: 'Yoruba traditional farming festival (South West)' },
                    { date: 'Aug 20', title: 'Market Festival', description: 'Special market day featuring fresh farm produce' }
                ]
            },
            drySeason: {
                vegetables: [
                    { name: 'Tomatoes (North)', available: true },
                    { name: 'Peppers (All regions)', available: true },
                    { name: 'Onions (North)', available: true },
                    { name: 'Garden Eggs (All regions)', available: true },
                    { name: 'Irish Potato (Jos Plateau)', available: true },
                    { name: 'Green Beans (North)', available: true },
                    { name: 'Carrot (Jos Plateau)', available: true }
                ],
                fruits: [
                    { name: 'Cashew (Middle Belt)', available: true },
                    { name: 'Orange (Middle Belt/South)', available: true },
                    { name: 'Guava (All regions)', available: true },
                    { name: 'Tiger Nut (North)', available: true },
                    { name: 'Date Palm (North)', available: true }
                ],
                products: [
                    { name: 'Dried Fish (North/Coastal)', available: true },
                    { name: 'Millet (North)', available: true },
                    { name: 'Sorghum (North)', available: true },
                    { name: 'Groundnuts (North)', available: true },
                    { name: 'Sesame Seeds (North)', available: true }
                ],
                events: [
                    { date: 'Nov 5', title: 'Harvest Festival', description: 'Celebration of successful harvest season (All regions)' },
                    { date: 'Nov 20', title: 'Durbar Festival', description: 'Northern Nigerian cultural celebration' },
                    { date: 'Dec 1', title: 'Groundnut Pyramids Festival', description: 'Celebration of groundnut harvest (Kano)' },
                    { date: 'Jan 15', title: 'Grain Market Festival', description: 'Special market for grains and preserved foods (North)' }
                ]
            },
            harmattan: {
                vegetables: [
                    { name: 'Irrigated Tomatoes (North)', available: true },
                    { name: 'Cabbage (Jos Plateau)', available: true },
                    { name: 'Lettuce (Jos Plateau)', available: true },
                    { name: 'Sweet Potato (North)', available: true },
                    { name: 'Garden Egg (North)', available: true }
                ],
                fruits: [
                    { name: 'Date Palm (North)', available: true },
                    { name: 'Citrus (Middle Belt)', available: true },
                    { name: 'Desert Dates (North)', available: true }
                ],
                products: [
                    { name: 'Dried Vegetables (North)', available: true },
                    { name: 'Preserved Fruits', available: true },
                    { name: 'Local Herbs', available: true },
                    { name: 'Shea Butter (North)', available: true },
                    { name: 'Dried Meat (North)', available: true }
                ],
                events: [
                    { date: 'Dec 20', title: 'Harmattan Market', description: 'Special market featuring seasonal produce (North)' },
                    { date: 'Jan 5', title: 'Argungu Fishing Festival', description: 'Famous fishing and cultural festival (Kebbi State)' },
                    { date: 'Jan 30', title: 'Storage Workshop', description: 'Traditional food preservation techniques (All regions)' },
                    { date: 'Feb 15', title: 'Farmers Appreciation Day', description: 'Celebrating local farmers and their practices' }
                ]
            }
        };

        function updateSeasonContent(season) {
            const data = seasonalData[season];
            if (!data) return;

            const seasonElement = document.getElementById(season);
            if (!seasonElement) return;

            let html = `
                <div class="season-grid">
                    <div class="produce-card">
                        <div class="produce-header">
                            <div class="produce-icon">🥬</div>
                            <h3 class="produce-title">Vegetables</h3>
                        </div>
                        <ul class="produce-list">
                            ${data.vegetables.map(item => `
                                <li class="produce-item">
                                    <span class="availability-dot ${item.available ? 'available' : 'coming-soon'}"></span>
                                    ${item.name}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    <div class="produce-card">
                        <div class="produce-header">
                            <div class="produce-icon">🍎</div>
                            <h3 class="produce-title">Fruits</h3>
                        </div>
                        <ul class="produce-list">
                            ${data.fruits.map(item => `
                                <li class="produce-item">
                                    <span class="availability-dot ${item.available ? 'available' : 'coming-soon'}"></span>
                                    ${item.name}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                    <div class="produce-card">
                        <div class="produce-header">
                            <div class="produce-icon">🥚</div>
                            <h3 class="produce-title">Farm Products</h3>
                        </div>
                        <ul class="produce-list">
                            ${data.products.map(item => `
                                <li class="produce-item">
                                    <span class="availability-dot ${item.available ? 'available' : 'coming-soon'}"></span>
                                    ${item.name}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
                <div class="events-timeline">
                    <h3>Upcoming Events</h3>
                    ${data.events.map(event => `
                        <div class="timeline-item">
                            <div class="timeline-date">${event.date}</div>
                            <div class="timeline-content">
                                <h4>${event.title}</h4>
                                <p>${event.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            
            seasonElement.innerHTML = html;
        }

        seasonTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const season = tab.dataset.season;
                
                // Update active states
                seasonTabs.forEach(t => t.classList.remove('active'));
                seasonContents.forEach(c => c.classList.remove('active'));
                
                tab.classList.add('active');
                const content = document.getElementById(season);
                if (content) {
                    content.classList.add('active');
                    updateSeasonContent(season);
                }
            });
        });

        // Initialize winter, spring, and summer content
        ['winter', 'spring', 'summer'].forEach(season => {
            updateSeasonContent(season);
        });
    }

    // Farm Map Interactivity
    function initializeMap() {
        const mapLocations = document.querySelectorAll('.map-location');
        const legendItems = document.querySelectorAll('.legend-item');
        const tooltip = document.querySelector('.map-tooltip');

        function showTooltip(event, element) {
            const name = element.dataset.name;
            const description = element.dataset.description;
            const rect = element.getBoundingClientRect();
            const mapArea = document.querySelector('.map-area');
            const mapRect = mapArea.getBoundingClientRect();

            tooltip.innerHTML = `
                <h4>${name}</h4>
                <p>${description}</p>
            `;

            const tooltipRect = tooltip.getBoundingClientRect();
            const left = rect.left - mapRect.left + (rect.width / 2) - (tooltipRect.width / 2);
            const top = rect.top - mapRect.top - tooltipRect.height - 10;

            tooltip.style.left = `${left}px`;
            tooltip.style.top = `${top}px`;
            tooltip.style.opacity = '1';
        }

        function hideTooltip() {
            tooltip.style.opacity = '0';
        }

        mapLocations.forEach(location => {
            location.addEventListener('mouseenter', (e) => {
                showTooltip(e, location);
                location.style.opacity = '0.8';
            });

            location.addEventListener('mouseleave', () => {
                hideTooltip();
                location.style.opacity = '1';
            });
        });

        legendItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const targetId = item.dataset.target;
                const mapLocation = document.getElementById(targetId);
                if (mapLocation) {
                    mapLocation.style.opacity = '0.8';
                }
            });

            item.addEventListener('mouseleave', () => {
                const targetId = item.dataset.target;
                const mapLocation = document.getElementById(targetId);
                if (mapLocation) {
                    mapLocation.style.opacity = '1';
                }
            });
        });
    }

    // Blog category filtering
    document.addEventListener('DOMContentLoaded', () => {
        initializeMap();
        initializeCalendar();
        const categoryButtons = document.querySelectorAll('.category-button');
        const blogCards = document.querySelectorAll('.blog-card');

        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');

                const category = button.textContent.trim();

                blogCards.forEach(card => {
                    const cardCategory = card.querySelector('.blog-category').textContent;
                    if (category === 'All Posts' || category === cardCategory) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 50);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(20px)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    });

    // Planting Calculator
    const calculateBtn = document.querySelector('.calculate-btn');
    const calculatorResults = document.querySelector('.calculator-results');
    
    if (calculateBtn) {
        calculateBtn.addEventListener('click', () => {
            const crop = document.getElementById('crop-select').value;
            const region = document.getElementById('region-select').value;
            const plotSize = document.getElementById('plot-size').value;
            
            if (!crop || !region || !plotSize) {
                alert('Please fill in all fields');
                return;
            }
            
            // Calculate planting recommendations
            const results = calculatePlantingGuide(crop, region, plotSize);
            
            // Display results
            calculatorResults.style.display = 'block';
            calculatorResults.querySelector('.results-content').innerHTML = `
                <div class="result-item">
                    <h5>Recommended Planting Period</h5>
                    <p>${results.plantingPeriod}</p>
                </div>
                <div class="result-item">
                    <h5>Required Seeds/Seedlings</h5>
                    <p>${results.seedQuantity}</p>
                </div>
                <div class="result-item">
                    <h5>Expected Harvest Time</h5>
                    <p>${results.harvestTime}</p>
                </div>
                <div class="result-item">
                    <h5>Special Instructions</h5>
                    <p>${results.instructions}</p>
                </div>
            `;
        });
    }

    function calculatePlantingGuide(crop, region, plotSize) {
        // Planting guide calculations based on crop and region
        const guides = {
            cassava: {
                north: {
                    plantingPeriod: 'May - June',
                    seedQuantity: `${Math.round(plotSize * 10000)} stems`,
                    harvestTime: '12-15 months',
                    instructions: 'Plant at 1m x 1m spacing. Ensure adequate rainfall or irrigation.'
                },
                south: {
                    plantingPeriod: 'March - April',
                    seedQuantity: `${Math.round(plotSize * 10000)} stems`,
                    harvestTime: '9-12 months',
                    instructions: 'Plant at 1m x 1m spacing. Regular weeding recommended.'
                }
            },
            yam: {
                north: {
                    plantingPeriod: 'February - March',
                    seedQuantity: `${Math.round(plotSize * 8000)} setts`,
                    harvestTime: '8-10 months',
                    instructions: 'Requires mounding. Stake plants when they emerge.'
                },
                south: {
                    plantingPeriod: 'December - January',
                    seedQuantity: `${Math.round(plotSize * 8000)} setts`,
                    harvestTime: '7-9 months',
                    instructions: 'Requires mounding. Regular mulching recommended.'
                }
            }
        };

        return guides[crop][region] || {
            plantingPeriod: 'Contact local extension officer',
            seedQuantity: 'Varies by variety',
            harvestTime: 'Depends on conditions',
            instructions: 'Consult local agricultural experts for specific guidance.'
        };
    }

    // Weather updates
    function updateWeather() {
        const weatherIcon = document.querySelector('.weather-icon');
        const temperature = document.querySelector('.temperature');
        const conditions = document.querySelector('.conditions');
        const farmingTips = document.querySelector('.farming-tips p');

        // Simulate weather API call
        const weather = getWeatherData();
        
        weatherIcon.textContent = weather.icon;
        temperature.textContent = `${weather.temp}°C`;
        conditions.textContent = weather.conditions;
        farmingTips.textContent = weather.farmingTip;
    }

    function getWeatherData() {
        // Simulate weather data - would normally come from an API
        const weatherConditions = [
            {
                icon: '☀️',
                temp: 32,
                conditions: 'Sunny',
                farmingTip: 'Consider irrigation for exposed crops. Best time for harvesting.'
            },
            {
                icon: '🌤️',
                temp: 28,
                conditions: 'Partly Cloudy',
                farmingTip: 'Ideal conditions for planting. Moderate watering recommended.'
            },
            {
                icon: '🌧️',
                temp: 25,
                conditions: 'Light Rain',
                farmingTip: 'Good conditions for transplanting. Hold off on fertilizer application.'
            }
        ];

        return weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    }

    // Update weather every hour
    updateWeather();
    setInterval(updateWeather, 3600000);

    // Market price updates
    function updateMarketPrices() {
        const priceRows = document.querySelectorAll('.price-row');
        
        priceRows.forEach(row => {
            const trend = Math.random();
            const trendSpan = row.querySelector('.trend-up, .trend-down, .trend-stable');
            
            if (trend > 0.6) {
                trendSpan.className = 'trend-up';
                trendSpan.textContent = `↑ ${Math.round(trend * 10)}%`;
            } else if (trend < 0.4) {
                trendSpan.className = 'trend-down';
                trendSpan.textContent = `↓ ${Math.round(trend * 10)}%`;
            } else {
                trendSpan.className = 'trend-stable';
                trendSpan.textContent = '→';
            }
        });
    }

    // Update prices every 5 minutes
    updateMarketPrices();
    setInterval(updateMarketPrices, 300000);

    // Language switching functionality
    const Translations = {
        yo: {
            // Navigation & Header
            about: 'Nipa Wa',
            livestock: 'Ẹran Ọsin',
            plants: 'Ọgbin',
            contact: 'Kan Si Wa',
            shop: 'Ọjà/CSA',
            farmTitle: 'Oko Greenfield',
            farmDescription: 'Iranlọwọ ẹran ọsin ati irugbin ti o dara',
            
            // Main Hero Section
            heroTitle: 'Lati oko si awo - ẹran ọsin ati irugbin ti o dara',
            heroDescription: 'Oko agbegbe ti o ni idile ti o ni imọran ninu ẹran ọsin ati irugbin organic. Darapo mọ CSA wa tabi ṣabẹwo si ile itaja wa.',
            contactUs: 'Kan Si Wa',
            exploreLivestock: 'Ṣawari Ẹran Ọsin',
            pickupTitle: 'Gba ni Oko',
            pickupDesc: 'Igba ọsẹ ati asiko ti o rọrun.',
            practicesTitle: 'Iṣe Atunṣe',
            practicesDesc: 'Ilẹ-akọkọ, orisirisi.',

            // About Section
            aboutTitle: 'Nipa Oko Greenfield',
            aboutDesc: 'Ti a ṣe ni ọdun 1998, Oko Greenfield n lo irugbin yiyi pada, ilera ilẹ lati ara compost, ati orisirisi irugbin lati ṣẹda ọna jijẹ ti o ni agbara.',
            familyOwned: 'Ti Idile ni',
            familyDesc: 'Iṣakoso oko ti ọpọlọpọ iran.',
            
            // Weather Widget
            weatherTitle: 'Ọjọ Oko',
            humidity: 'Omi ategun',
            rainfall: 'Ojo',
            soilTemp: 'Itura Ilẹ',
            farmingTips: 'Imọran Oko Loni',

            // Seasonal Calendar
            seasonalTitle: 'Kalẹnda Igba Oko Nigerian',
            wetSeason: 'Igba Ojo (Ẹrẹ̀-Ọ̀wàrà)',
            drySeason: 'Igba Ọgbẹlẹ (Kọkànlá-Ẹrẹ̀)',
            harmattan: 'Hamattan (Ọ̀pẹ̀-Èrèlè)',

            // Community Section
            communityTitle: 'Agbegbe Agbe',
            expertQA: 'Bi Awọn Amọye',
            farmerForums: 'Forums Agbe',
            successStories: 'Awọn Itan Aṣeyọri',
            askQuestion: 'Bi Ibeere',
            viewAll: 'Wo Gbogbo e',

            // Contact Form
            getInTouch: 'Kan Si Wa',
            yourName: 'Orukọ Rẹ',
            emailAddress: 'Adirẹsi Imeeli',
            phoneNumber: 'Nọmba Fonu',
            message: 'Ọrọ',
            send: 'Fi Ranṣẹ'
        },
        ha: {
            // Navigation & Header
            about: 'Game da Mu',
            livestock: 'Dabbobi',
            plants: 'Shuka',
            contact: 'Tuntuɓi',
            shop: 'Kasuwa/CSA',
            farmTitle: 'Gona ta Greenfield',
            farmDescription: 'Kiwo dabbobi na halal da noma mai dorewa',
            
            // Main Hero Section
            heroTitle: 'Daga gona zuwa plate - dabbobi da amfani da tsire-tsire',
            heroDescription: 'Gonar iyali mai kula da kiwo dabbobi da noma abinci. Shiga CSA ko ka ziyarci kasuwar mu.',
            contactUs: 'Tuntuɓe Mu',
            exploreLivestock: 'Bincika Dabbobi',
            pickupTitle: 'Ɗaukan Gona',
            pickupDesc: 'Mako-mako da lokuta masu sauƙi.',
            practicesTitle: 'Ayyuka masu dorewa',
            practicesDesc: 'Farko-ƙasa, biodiversity-mai duhu.',

            // About Section
            aboutTitle: 'Game da Gonar Greenfield',
            aboutDesc: 'An kafa ta a 1998, Gonar Greenfield na amfani da juyawa na rotation, ƙarfin ƙasa daga compost, da bambancin amfani don ƙirƙirar tsarin abinci mai ƙarfi.',
            familyOwned: 'Mallakar Iyali',
            familyDesc: 'Jagorancin gona na zamani masu yawa.',

            // Weather Widget
            weatherTitle: 'Yanayin Gona',
            humidity: 'Humidity',
            rainfall: 'Ruwan sama',
            soilTemp: 'Zafin Ƙasa',
            farmingTips: 'Shawarwarin Noma na Yau',

            // Seasonal Calendar
            seasonalTitle: 'Kalandar Noma ta Nigeria',
            wetSeason: 'Damina (Apr-Oct)',
            drySeason: 'Rani (Nov-Mar)',
            harmattan: 'Harmattan (Dec-Feb)',

            // Community Section
            communityTitle: 'Jamaʼar Manoma',
            expertQA: 'Tambayi Masana',
            farmerForums: 'Forum ɗin Manoma',
            successStories: 'Labarun Nasara',
            askQuestion: 'Yi Tambaya',
            viewAll: 'Duba Duka',

            // Contact Form
            getInTouch: 'Tuntuɓe Mu',
            yourName: 'Sunanka',
            emailAddress: 'Adireshin Imel',
            phoneNumber: 'Lambar Waya',
            message: 'Saƙo',
            send: 'Aika'
        },
        ig: {
            // Navigation & Header
            about: 'Maka Anyị',
            livestock: 'Ụmụ Anụmanụ',
            plants: 'Osisi',
            contact: 'Kpọtụrụ Anyị',
            shop: 'Ahịa/CSA',
            farmTitle: 'Ubi Greenfield',
            farmDescription: 'Azụmahịa anụ na ọkụkụ na-adịgide adịgide',
            
            // Main Hero Section
            heroTitle: 'Site na ubi ruo na efere - anụmanụ na mkpụrụ osisi na-adịgide adịgide',
            heroDescription: 'Ubi ezinụlọ na-elekọta anụmanụ na mkpụrụ osisi organic. Soro CSA anyị ma ọ bụ gaa na ụlọ ahịa anyị.',
            contactUs: 'Kpọtụrụ Anyị',
            exploreLivestock: 'Chọpụta Ụmụ Anụmanụ',
            pickupTitle: 'Nweta na Ubi',
            pickupDesc: 'Izu ụka na oge dị mfe.',
            practicesTitle: 'Omume na-adịgide adịgide',
            practicesDesc: 'Ala-mbụ, biodiversity-focused.',

            // About Section
            aboutTitle: 'Maka Ubi Greenfield',
            aboutDesc: 'E hibere na 1998, Ubi Greenfield na-eji mgbanwe ọkụ, ike ala site na compost, na mkpụrụ osisi dị iche iche wee mepụta usoro nri siri ike.',
            familyOwned: 'Nwe Ezinụlọ',
            familyDesc: 'Nlekọta ubi ọtụtụ ọgbọ.',

            // Weather Widget
            weatherTitle: 'Oge Ubi',
            humidity: 'Mmiri ikuku',
            rainfall: 'Mmiri ozuzo',
            soilTemp: 'Okpomọkụ Ala',
            farmingTips: 'Ndụmọdụ Ubi Taa',

            // Seasonal Calendar
            seasonalTitle: 'Kalenda Oge Ubi Nigeria',
            wetSeason: 'Oge Mmiri (Apr-Oct)',
            drySeason: 'Oge Okporo (Nov-Mar)',
            harmattan: 'Uguru (Dec-Feb)',

            // Community Section
            communityTitle: 'Ọgbakọ Ndị Ọrụ Ugbo',
            expertQA: 'Jụọ Ndị Ọkachamara',
            farmerForums: 'Ọgbakọ Ndị Ọrụ Ugbo',
            successStories: 'Akụkọ Ihe Ịga Nke Ọma',
            askQuestion: 'Jụọ Ajụjụ',
            viewAll: 'Hụ Nile',

            // Contact Form
            getInTouch: 'Kpọtụrụ Anyị',
            yourName: 'Aha Gị',
            emailAddress: 'Adreesị Email',
            phoneNumber: 'Nọmba Ekwentị',
            message: 'Ozi',
            send: 'Zipu'
        }
    };

    const languageLinks = document.querySelectorAll('.language-dropdown a');
    
    languageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.dataset.lang;
            
            // Update active state
            languageLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Update button text
            const btn = document.querySelector('.language-btn');
            btn.textContent = `🌐 ${link.textContent}`;
            
            // Update content if not English
            if (lang !== 'en') {
                updatePageContent(translations[lang]);
            } else {
                resetToEnglish();
            }
        });
    });

    function updatePageContent(translations) {
        // Store original English text if not already stored
        if (!window.originalText) {
            window.originalText = {};
            document.querySelectorAll('[data-translate]').forEach(element => {
                window.originalText[element.dataset.translate] = element.textContent;
            });
        }

        // Update all translatable elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });

        // Update navigation items
        document.querySelector('a[href="#touch"]').textContent = translations.about;
        document.querySelector('a[href="#livestock"]').textContent = translations.livestock;
        document.querySelector('a[href="#plants"]').textContent = translations.plants;
        document.querySelector('a[href="#contact"]').textContent = translations.contact;
        document.querySelector('.shop').textContent = translations.shop;
        
        // Update farm info
        document.querySelector('.farm-title').textContent = translations.farmTitle;
        document.querySelector('.farm-description').textContent = translations.farmDescription;

        // Update hero section
        document.querySelector('.gradient-text b').textContent = translations.heroTitle;
        document.querySelector('.main-description').textContent = translations.heroDescription;
        document.querySelector('.btn').textContent = translations.contactUs;
        document.querySelector('.btn2').textContent = translations.exploreLivestock;

        // Update boxes
        const boxes = document.querySelectorAll('.same');
        boxes[0].querySelector('h5').textContent = translations.pickupTitle;
        boxes[0].querySelector('p').textContent = translations.pickupDesc;
        boxes[1].querySelector('h5').textContent = translations.practicesTitle;
        boxes[1].querySelector('p').textContent = translations.practicesDesc;

        // Update about section
        document.querySelector('.about h2').textContent = translations.aboutTitle;
        document.querySelector('.about p').textContent = translations.aboutDesc;

        // Update seasonal calendar
        document.querySelector('.calendar-header h2').textContent = translations.seasonalTitle;
        document.querySelectorAll('.season-tab').forEach(tab => {
            if (tab.dataset.season === 'wetSeason') tab.textContent = translations.wetSeason;
            if (tab.dataset.season === 'drySeason') tab.textContent = translations.drySeason;
            if (tab.dataset.season === 'harmattan') tab.textContent = translations.harmattan;
        });

        // Update weather widget
        document.querySelector('.weather-widget h3').textContent = translations.weatherTitle;
        document.querySelector('.weather-details .detail:nth-child(1) span:first-child').textContent = translations.humidity;
        document.querySelector('.weather-details .detail:nth-child(2) span:first-child').textContent = translations.rainfall;
        document.querySelector('.weather-details .detail:nth-child(3) span:first-child').textContent = translations.soilTemp;
        document.querySelector('.farming-tips h4').textContent = translations.farmingTips;

        // Update community section
        document.querySelector('.community-section h2').textContent = translations.communityTitle;
        document.querySelector('.qa-section h3').textContent = translations.expertQA;
        document.querySelector('.forum-section h3').textContent = translations.farmerForums;
        document.querySelector('.success-stories h3').textContent = translations.successStories;
        document.querySelectorAll('.ask-question-btn').forEach(btn => {
            btn.textContent = translations.askQuestion;
        });
        document.querySelectorAll('.view-all-topics, .view-all-stories').forEach(btn => {
            btn.textContent = translations.viewAll;
        });

        // Update contact form
        document.querySelector('.touch h2').textContent = translations.getInTouch;
        document.querySelector('input[placeholder="Your Name"]').placeholder = translations.yourName;
        document.querySelector('input[placeholder="Email"]').placeholder = translations.emailAddress;
        document.querySelector('input[placeholder="Phone Number (Optional)"]').placeholder = translations.phoneNumber;
        document.querySelector('textarea').placeholder = translations.message;
        document.querySelector('button[type="submit"]').textContent = translations.send;
    }

    function resetToEnglish() {
        if (window.originalText) {
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.dataset.translate;
                if (window.originalText[key]) {
                    element.textContent = window.originalText[key];
                }
            });
        }

        document.querySelector('a[href="#touch"]').textContent = 'About';
        document.querySelector('a[href="#livestock"]').textContent = 'Livestock';
        document.querySelector('a[href="#plants"]').textContent = 'Plants';
        document.querySelector('a[href="#contact"]').textContent = 'Contact';
        document.querySelector('.shop').textContent = 'Shop/CSA';
        document.querySelector('.farm-title').textContent = 'Greenfield Farm';
        document.querySelector('.farm-description').textContent = 'Ethical livestock & regenerative plant farming';
        
        // Reset all other elements to their original English text
        location.reload(); // This ensures all content is reset to original English
    }

    // Community Features
    const askButtons = document.querySelectorAll('.ask-question-btn');
    askButtons.forEach(button => {
        button.addEventListener('click', () => {
            const expert = button.closest('.expert-info').querySelector('h4').textContent;
            showQuestionModal(expert);
        });
    });

    function showQuestionModal(expert) {
        const modal = document.createElement('div');
        modal.className = 'question-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h3>Ask ${expert}</h3>
                <form class="question-form">
                    <textarea placeholder="Type your farming question here..."></textarea>
                    <div class="form-buttons">
                        <button type="button" class="cancel-btn">Cancel</button>
                        <button type="submit" class="submit-btn">Submit Question</button>
                    </div>
                </form>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        modal.querySelector('.cancel-btn').addEventListener('click', () => {
            modal.remove();
        });
        
        modal.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            const question = modal.querySelector('textarea').value;
            if (question.trim()) {
                // Here you would typically send the question to your backend
                alert('Question submitted successfully! Our expert will respond shortly.');
                modal.remove();
            }
        });
    }

    // Add click handlers for forum topics
    document.querySelectorAll('.forum-topics li').forEach(topic => {
        topic.addEventListener('click', () => {
            const title = topic.querySelector('.topic-title').textContent;
            // Here you would typically navigate to the topic page
            alert(`Opening topic: ${title}`);
        });
    });

    // Add click handlers for success stories
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', () => {
            const story = button.closest('.story-card');
            const title = story.querySelector('h4').textContent;
            // Here you would typically navigate to the full story page
            alert(`Opening full story: ${title}`);
        });
    });
