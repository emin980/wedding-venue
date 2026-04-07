// Load configuration
let config = {};

document.addEventListener('DOMContentLoaded', () => {
    loadConfig();
    setupEnvelope();
    initializeCountdown();
    setupEventListeners();
});

// Load configuration from JSON
function loadConfig() {
    fetch('config.json')
        .then(response => response.json())
        .then(data => {
            config = data;
            populateContent();
        })
        .catch(error => console.error('Error loading config:', error));
}

// Populate content from config
function populateContent() {
    // Header
    document.getElementById('initials').textContent = `${config.couple.bride[0]} & ${config.couple.groom[0]}`;
    document.getElementById('bride-name').textContent = config.couple.bride;
    document.getElementById('groom-name').textContent = config.couple.groom;
    document.getElementById('year-text').textContent = `DÜĞÜN DAVETİYESİ · ${config.year}`;
    
    // Location
    const locationCity = config.ceremonies.wedding.address.split('/')[1]?.trim() || 'Batman';
    document.getElementById('location-text').textContent = `${config.year} · ${locationCity}`;
    document.getElementById('footer-text').textContent = `${config.couple.bride} & ${config.couple.groom} · ${config.year} · ${locationCity}`;

    // Invitation message
    document.getElementById('invitation-message').textContent = config.invitationMessage;

    // Families
    populateFamilies();

    // Ceremonies
    populateCeremonies();

    // RSVP Form
    setupRSVPForm();

    // Apply custom colors if defined
    if (config.colors) {
        applyColors();
    }
}

// Populate families section
function populateFamilies() {
    const brideMembers = document.getElementById('bride-members');
    const groomMembers = document.getElementById('groom-members');

    brideMembers.innerHTML = '';
    groomMembers.innerHTML = '';

    if (config.families.bride) {
        document.getElementById('bride-side-title').textContent = config.families.bride.side;
        config.families.bride.members.forEach(member => {
            const memberEl = document.createElement('div');
            memberEl.className = 'family-member';
            memberEl.innerHTML = `
                <div class="member-name">${member.name}</div>
                <div class="member-role">${member.role}</div>
            `;
            brideMembers.appendChild(memberEl);
        });
    }

    if (config.families.groom) {
        document.getElementById('groom-side-title').textContent = config.families.groom.side;
        config.families.groom.members.forEach(member => {
            const memberEl = document.createElement('div');
            memberEl.className = 'family-member';
            memberEl.innerHTML = `
                <div class="member-name">${member.name}</div>
                <div class="member-role">${member.role}</div>
            `;
            groomMembers.appendChild(memberEl);
        });
    }
}

// Populate ceremonies section
function populateCeremonies() {
    const ceremonies = ['marriage', 'henna', 'wedding'];
    const ceremonyNames = ['marriage', 'henna', 'wedding'];

    ceremonies.forEach((ceremony, index) => {
        const ceremonyData = config.ceremonies[ceremony];
        const prefix = ceremony;

        document.getElementById(`${prefix}-name`).textContent = ceremonyData.name;
        document.getElementById(`${prefix}-date`).textContent = ceremonyData.date;
        document.getElementById(`${prefix}-time`).textContent = ceremonyData.time;
        document.getElementById(`${prefix}-venue`).textContent = ceremonyData.venue;
        document.getElementById(`${prefix}-address`).textContent = ceremonyData.address;
        document.getElementById(`${prefix}-map`).href = ceremonyData.maps_url;
        document.getElementById(`${prefix}-whatsapp`).href = ceremonyData.whatsapp_url;
    });
}

// Setup RSVP form
function setupRSVPForm() {
    if (config.rsvp && config.rsvp.enabled && config.rsvp.formspreeId) {
        const form = document.getElementById('rsvp-form');
        form.action = `https://formspree.io/f/${config.rsvp.formspreeId}`;
        form.method = 'POST';
    }
}

// Apply custom colors
function applyColors() {
    const root = document.documentElement;
    if (config.colors.primary) {
        root.style.setProperty('--color-primary', config.colors.primary);
    }
    if (config.colors.secondary) {
        root.style.setProperty('--color-secondary', config.colors.secondary);
    }
    if (config.colors.accent) {
        root.style.setProperty('--color-accent', config.colors.accent);
    }
}

// Envelope interaction
function setupEnvelope() {
    const envelopeContainer = document.getElementById('envelope-container');
    const mainContent = document.getElementById('main-content');

    envelopeContainer.addEventListener('click', () => {
        envelopeContainer.classList.add('open');
        
        setTimeout(() => {
            envelopeContainer.classList.add('hidden');
            mainContent.classList.remove('hidden');
            // Trigger animations
            document.querySelectorAll('.ceremony-item').forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                }, index * 100);
            });
        }, 600);
    });

    // Details button scrolls to ceremonies
    document.getElementById('details-btn').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('ceremonies').scrollIntoView({ behavior: 'smooth' });
    });
}

// Countdown timer
function initializeCountdown() {
    function updateCountdown() {
        const weddingDate = new Date(config.ceremonies.wedding.date.split(' ')[0] + ' ' + 
                                     config.ceremonies.wedding.date.split(' ')[1] + ' ' + 
                                     config.ceremonies.wedding.date.split(' ')[2]);
        
        // Parse date properly (e.g., "11 Temmuz 2026")
        const months = {
            'Ocak': 0, 'Şubat': 1, 'Mart': 2, 'Nisan': 3,
            'Mayıs': 4, 'Haziran': 5, 'Temmuz': 6, 'Ağustos': 7,
            'Eylül': 8, 'Ekim': 9, 'Kasım': 10, 'Aralık': 11
        };

        const parts = config.ceremonies.wedding.date.split(' ');
        const day = parseInt(parts[0]);
        const monthName = parts[1];
        const year = parseInt(parts[2]);
        
        const weddingTime = config.ceremonies.wedding.time.split(':');
        const month = months[monthName];
        
        const wedding = new Date(year, month, day, parseInt(weddingTime[0]), parseInt(weddingTime[1]));
        const now = new Date();
        const diff = wedding - now;

        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        } else {
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Setup event listeners
function setupEventListeners() {
    // Share buttons
    document.getElementById('share-whatsapp').addEventListener('click', () => {
        const text = `Selmun! ${config.couple.bride} & ${config.couple.groom}'un düğün davetiyesi: ${window.location.href}`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    });

    document.getElementById('share-copy').addEventListener('click', () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            const btn = document.getElementById('share-copy');
            const originalText = btn.textContent;
            btn.textContent = 'Kopyalandı!';
            setTimeout(() => {
                btn.textContent = originalText;
            }, 2000);
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll animations for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Handle RSVP form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('rsvp-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            // Formspree handles submission
            // Optional: Add custom handling here
        });
    }
});
