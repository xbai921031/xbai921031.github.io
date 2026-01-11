/* Main logic */
class PortfolioApp {
    constructor() {
        this.config = window.siteConfig || {};
        this.appContainer = document.getElementById('app');
        this.components = {};
        this.currentTheme = 'dark';
        
        this.initializeComponents();
    }
    
    /* Init all components */
    initializeComponents() {
        this.components = {
            header: window.HeaderComponent ? new window.HeaderComponent(this.config) : null,
            about: window.AboutComponent ? new window.AboutComponent(this.config) : null,
            projects: window.ProjectsComponent ? new window.ProjectsComponent(this.config) : null,
            experience: window.ExperienceComponent ? new window.ExperienceComponent(this.config) : null,
            contact: window.ContactComponent ? new window.ContactComponent(this.config) : null,
            footer: window.FooterComponent ? new window.FooterComponent(this.config) : null
        };
    }
    
    /* Render */
    render() {
        if (!this.appContainer) {
            console.error('App container not found!');
            return;
        }
        
        /* Clear container */
        this.appContainer.innerHTML = '';
        
        /* Render components */
        const componentOrder = ['header', 'about', 'projects', 'contact', 'footer'];
        
        componentOrder.forEach(componentName => {
            const component = this.components[componentName];
            if (component && typeof component.render === 'function') {
                this.appContainer.innerHTML += component.render();
            }
        });

        this.setupComponentFeatures();

        this.createDecorations();

        this.setupGlobalEvents();
        
        console.log('Portfolio application rendered successfully!');
    }

    setupComponentFeatures() {
        if (this.components.projects && typeof this.components.projects.setupFiltering === 'function') {
            setTimeout(() => this.components.projects.setupFiltering(), 100);
        }

        if (this.components.experience && typeof this.components.experience.setupTimelineAnimation === 'function') {
            setTimeout(() => this.components.experience.setupTimelineAnimation(), 200);
        }

        if (this.components.contact && typeof this.components.contact.setupContactForm === 'function') {
            setTimeout(() => this.components.contact.setupContactForm(), 100);
        }

        if (this.components.footer && typeof this.components.footer.setupBackToTop === 'function') {
            setTimeout(() => this.components.footer.setupBackToTop(), 100);
        }
        
        if (this.components.footer && typeof this.components.footer.setupThemeToggle === 'function') {
            setTimeout(() => this.components.footer.setupThemeToggle(), 100);
        }
        
        if (this.components.footer && typeof this.components.footer.setupSmoothScroll === 'function') {
            setTimeout(() => this.components.footer.setupSmoothScroll(), 100);
        }
    }

    createDecorations() {
        const colors = ['#00d9ff', '#9d4edd', '#4ade80'];

        document.querySelectorAll('.pixel-decoration').forEach(el => el.remove());

        for (let i = 0; i < 15; i++) {
            const pixel = document.createElement('div');
            pixel.className = 'pixel-decoration';
            pixel.style.width = `${Math.random() * 8 + 4}px`;
            pixel.style.height = pixel.style.width;
            pixel.style.left = `${Math.random() * 100}vw`;
            pixel.style.top = `${Math.random() * 100}vh`;
            pixel.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            pixel.style.opacity = `${Math.random() * 0.5 + 0.3}`;
            pixel.style.animation = `float ${Math.random() * 10 + 5}s ease-in-out infinite ${Math.random() * 5}s`;
            
            document.body.appendChild(pixel);
        }
    }

    setupGlobalEvents() {
        document.addEventListener('mousemove', (e) => {
            const pixels = document.querySelectorAll('.pixel-decoration');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            pixels.forEach((pixel, index) => {
                const moveX = (mouseX - 0.5) * 15 * (index % 3 + 1);
                const moveY = (mouseY - 0.5) * 15 * (index % 3 + 1);
                
                pixel.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });
        });

        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.createDecorations();
            }, 250);
        });

        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + D switch theme
            if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
                e.preventDefault();
                this.toggleTheme();
            }
            
            // Esc back to top
            if (e.key === 'Escape') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');

        localStorage.setItem('portfolio-theme', this.currentTheme);

        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            if (this.currentTheme === 'light') {
                icon.className = 'fas fa-sun';
                themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
            } else {
                icon.className = 'fas fa-moon';
                themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
            }
        }
    }
    
    /* Add new components */
    addComponent(name, componentClass) {
        this.components[name] = new componentClass(this.config);
        this.render();
    }
    
    /* Re-config */
    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
        this.initializeComponents();
        this.render();
    }
}

/* Initialization */
document.addEventListener('DOMContentLoaded', () => {
    window.portfolioApp = new PortfolioApp();

    window.portfolioApp.render();

    console.log('Portfolio application initialized:', window.portfolioApp);

    setTimeout(() => {
        const loadedComponents = Object.keys(window.portfolioApp.components)
            .filter(name => window.portfolioApp.components[name] !== null)
            .length;
        
        console.log(`Loaded ${loadedComponents} components successfully.`);

        const welcomeMessage = document.createElement('div');
        welcomeMessage.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--accent-blue);
            color: white;
            padding: 10px 20px;
            border-radius: 4px;
            z-index: 10000;
            animation: slideIn 0.5s ease-out;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
        
        welcomeMessage.textContent = '✨ Portfolio Loaded Successfully!';
        document.body.appendChild(welcomeMessage);
        
        setTimeout(() => {
            welcomeMessage.style.animation = 'slideIn 0.5s ease-out reverse';
            setTimeout(() => welcomeMessage.remove(), 500);
        }, 2000);
    }, 500);
});