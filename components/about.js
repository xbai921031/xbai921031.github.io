/* About */
class AboutComponent {
    constructor(config) {
        this.config = config;
    }

    render() {
        const { about } = this.config;
        
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

                        <!-- Expertise -->
                        <div class="mt-2">
                            <h3 style="margin-bottom: 1rem; color: var(--accent-blue);">Expertise</h3>
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