/* About */
class AboutComponent {
    constructor(config) {
        this.config = config;
    }

    render() {
        const { about, personalInfo, socialLinks } = this.config;
        
        return `
            <section id="about" class="section">
                <h2 class="section-title">About Me</h2>
                
                <div class="grid-2 gap-2">
                    <!-- Description -->
                    <div class="flex-column gap-2">
                        ${about.paragraphs.map(paragraph => `
                            <p style="font-size: 1.1rem; line-height: 1.8;">
                                ${paragraph}
                            </p>
                        `).join('')}

                        <!-- Skills -->
                        <div class="mt-2">
                            <h3 style="margin-bottom: 1rem; color: var(--accent-blue);">Core Expertise</h3>
                            <div class="grid-3" style="margin-top: 1rem;">
                                <div class="text-center" style="padding: 1rem; background: rgba(26, 31, 46, 0.4); border-radius: var(--border-radius);">
                                    <i class="fas fa-microchip" style="font-size: 2rem; color: var(--accent-blue); margin-bottom: 0.5rem;"></i>
                                    <h4>Embedded Systems</h4>
                                    <p style="font-size: 0.9rem; color: #a0aec0;">Embedded software development in automotive industry</p>
                                </div>
                                <div class="text-center" style="padding: 1rem; background: rgba(26, 31, 46, 0.4); border-radius: var(--border-radius);">
                                    <i class="fas fa-brain" style="font-size: 2rem; color: var(--accent-purple); margin-bottom: 0.5rem;"></i>
                                    <h4>Artificial Intelligence</h4>
                                    <p style="font-size: 0.9rem; color: #a0aec0;">Edge AI deployment on microcontrollers</p>
                                </div>
                                <div class="text-center" style="padding: 1rem; background: rgba(26, 31, 46, 0.4); border-radius: var(--border-radius);">
                                    <i class="fas fa-gamepad" style="font-size: 2rem; color: var(--accent-green); margin-bottom: 0.5rem;"></i>
                                    <h4>Game Development</h4>
                                    <p style="font-size: 0.9rem; color: #a0aec0;">Godot 2D games development</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Contact info -->
                    <div class="mt-2">
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
            </div>
            </section>
        `;
    }

    /* Component-specific methods */
    setupStatsAnimation() {
        const stats = document.querySelectorAll('.stat-value');
        stats.forEach(stat => {
        });
    }
}

if (typeof window !== 'undefined') {
    window.AboutComponent = AboutComponent;
}