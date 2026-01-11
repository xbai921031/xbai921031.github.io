/* Footer */
class FooterComponent {
    constructor(config) {
        this.config = config;
    }

    render() {
        const { footer } = this.config;
        
        return `
            <footer id="footer" class="section">
                <div style="
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                ">
                <div class="grid-3">
                    <!-- Left -->
                    <div>
                        ${footer.left || ''}
                    </div>
                    <!-- Center -->
                    <div>
                        ${footer.center || ''}
                    </div>
                    <!-- Right -->
                    <div>
                        ${footer.right || ''}
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
                </div>
            </footer>
        `;
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

/* Theme */
const themeStyles = `
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