/* Footer */
class FooterComponent {
    constructor(config) {
        this.config = config;
    }

    render() {
        const { footer } = this.config;
        
        return `
            <footer id="footer" class="section">
                <div class="grid-3">
                    <!-- Contact info -->
                    <div class="footer-section">
                        <h3 style="color: var(--accent-green); margin-bottom: 1rem;">Contact</h3>

                        <div style="margin-bottom: 1.5rem;">
                            <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: 1rem;">
                                <i class="fas fa-envelope" style="color: var(--accent-blue);"></i>
                                <a href="mailto:${personalInfo.email}" 
                                   style="color: #a0aec0; text-decoration: none;">
                                    ${personalInfo.email}
                                </a>
                            </div>
                            
                            <div style="display: flex; align-items: center; gap: 0.8rem;">
                                <i class="fas fa-map-marker-alt" style="color: var(--accent-green);"></i>
                                <span style="color: #a0aec0;">${personalInfo.location}</span>
                            </div>
                        </div>

                        <div>
                            <h4 style="color: #a0aec0; font-size: 0.9rem; margin-bottom: 0.8rem;">Follow Me</h4>
                            <div class="footer-social" style="display: flex; gap: 1rem;">
                                ${socialLinks.map(link => `
                                    <a href="${link.url}" 
                                       target="_blank"
                                       style="
                                            color: var(--text-color);
                                            font-size: 1.2rem;
                                            padding: 0.5rem;
                                            border-radius: 50%;
                                            background: rgba(26, 31, 46, 0.8);
                                            width: 40px;
                                            height: 40px;
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            transition: all 0.3s;
                                            text-decoration: none;
                                       "
                                       onmouseover="this.style.transform='scale(1.1)'; this.style.background='rgba(0, 217, 255, 0.2)'"
                                       onmouseout="this.style.transform='scale(1)'; this.style.background='rgba(26, 31, 46, 0.8)'">
                                        <i class="${link.icon}"></i>
                                    </a>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Bottom -->
                <div style="
                    margin-top: 2rem;
                    padding-top: 1.5rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    text-align: center;
                ">
                    <!-- Copyright information -->
                    <div style="margin-bottom: 1rem;">
                        <p style="color: #a0aec0; margin-bottom: 0.5rem;">${footer.copyright}</p>
                        <p style="color: #718096; font-size: 0.9rem;">${footer.note}</p>
                    </div>
                    
                    <!-- Tech-stack -->
                    <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
                        <span style="
                            padding: 0.2rem 0.8rem;
                            background: rgba(0, 217, 255, 0.1);
                            border: 1px solid var(--accent-blue);
                            border-radius: 20px;
                            font-size: 0.7rem;
                            color: var(--accent-blue);
                        ">Vanilla JS</span>
                        
                        <span style="
                            padding: 0.2rem 0.8rem;
                            background: rgba(157, 78, 221, 0.1);
                            border: 1px solid var(--accent-purple);
                            border-radius: 20px;
                            font-size: 0.7rem;
                            color: var(--accent-purple);
                        ">HTML5/CSS3</span>
                        
                        <span style="
                            padding: 0.2rem 0.8rem;
                            background: rgba(74, 222, 128, 0.1);
                            border: 1px solid var(--accent-green);
                            border-radius: 20px;
                            font-size: 0.7rem;
                            color: var(--accent-green);
                        ">GitHub Pages</span>
                    </div>
                    
                    <!-- Footer Navigation -->
                    <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 1.5rem;">
                        <a href="/privacy" 
                           style="color: #a0aec0; font-size: 0.8rem; text-decoration: none;"
                           onmouseover="this.style.color='var(--accent-blue)'"
                           onmouseout="this.style.color='#a0aec0'">
                            Privacy Policy
                        </a>
                        
                        <a href="/terms" 
                           style="color: #a0aec0; font-size: 0.8rem; text-decoration: none;"
                           onmouseover="this.style.color='var(--accent-purple)'"
                           onmouseout="this.style.color='#a0aec0'">
                            Terms of Service
                        </a>
                        
                        <a href="/sitemap" 
                           style="color: #a0aec0; font-size: 0.8rem; text-decoration: none;"
                           onmouseover="this.style.color='var(--accent-green)'"
                           onmouseout="this.style.color='#a0aec0'">
                            Sitemap
                        </a>
                        
                        <button id="theme-toggle" 
                                style="
                                    background: none;
                                    border: none;
                                    color: #a0aec0;
                                    font-size: 0.8rem;
                                    cursor: pointer;
                                    display: flex;
                                    align-items: center;
                                    gap: 0.5rem;
                                "
                                onmouseover="this.style.color='var(--accent-blue)'"
                                onmouseout="this.style.color='#a0aec0'">
                            <i class="fas fa-moon"></i>
                            Dark Mode
                        </button>
                    </div>
                    
                    <!-- Back to top -->
                    <button id="back-to-top" 
                            style="
                                position: fixed;
                                bottom: 20px;
                                right: 20px;
                                width: 50px;
                                height: 50px;
                                border-radius: 50%;
                                background: var(--accent-blue);
                                border: none;
                                color: white;
                                font-size: 1.5rem;
                                cursor: pointer;
                                display: none;
                                align-items: center;
                                justify-content: center;
                                transition: all 0.3s;
                                z-index: 1000;
                            "
                            onmouseover="this.style.transform='scale(1.1)'; this.style.boxShadow='0 0 20px rgba(0, 217, 255, 0.5)'"
                            onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='none'">
                        <i class="fas fa-arrow-up"></i>
                    </button>
                </div>
            </footer>
        `;
    }

    setupBackToTop() {
        const backToTopButton = document.getElementById('back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = 'flex';
            } else {
                backToTopButton.style.display = 'none';
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    setupThemeToggle() {
        const themeToggle = document.getElementById('theme-toggle');
        const icon = themeToggle.querySelector('i');
        
        themeToggle.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('light-theme');
            
            if (isDark) {
                document.body.classList.remove('dark-theme');
                document.body.classList.add('light-theme');
                icon.className = 'fas fa-sun';
                themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
            } else {
                document.body.classList.remove('light-theme');
                document.body.classList.add('dark-theme');
                icon.className = 'fas fa-moon';
                themeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
            }

            localStorage.setItem('theme', isDark ? 'light' : 'dark');
        });

        const savedTheme = localStorage.getItem('theme') || 'dark';
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        }
    }

    setupSmoothScroll() {
        document.querySelectorAll('.footer-link[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 20,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

/* Theme switch */
const themeStyles = `
    /* Light theme */
    body.light-theme {
        --primary-color: #f8fafc;
        --secondary-color: #e2e8f0;
        --text-color: #1a202c;
        background-color: var(--primary-color);
        color: var(--text-color);
    }
    
    body.light-theme .section {
        background-color: rgba(226, 232, 240, 0.8);
        border: 1px solid rgba(203, 213, 224, 0.5);
    }
    
    body.light-theme .project-card {
        background-color: var(--secondary-color);
    }
    
    body.light-theme .tech-item {
        background-color: rgba(255, 255, 255, 0.5);
    }
    
    /* Dark theme */
    body.dark-theme {
        --primary-color: #0a0e17;
        --secondary-color: #1a1f2e;
        --text-color: #e2e8f0;
    }
`;

if (typeof document !== 'undefined') {
    const styleElement = document.createElement('style');
    styleElement.textContent = themeStyles;
    document.head.appendChild(styleElement);
}

if (typeof window !== 'undefined') {
    window.FooterComponent = FooterComponent;
}