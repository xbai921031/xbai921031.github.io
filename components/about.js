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
                        
                        <!-- Skills -->
                        <div class="mt-2">
                            <h3 style="margin-bottom: 1rem; color: var(--accent-blue);">Core Expertise</h3>
                            <div class="grid-3" style="margin-top: 1rem;">
                                <div class="text-center" style="padding: 1rem; background: rgba(26, 31, 46, 0.4); border-radius: var(--border-radius);">
                                    <i class="fas fa-microchip" style="font-size: 2rem; color: var(--accent-blue); margin-bottom: 0.5rem;"></i>
                                    <h4>Embedded Systems</h4>
                                    <p style="font-size: 0.9rem; color: #a0aec0;">Firmware, RTOS, IoT, PCB</p>
                                </div>
                                <div class="text-center" style="padding: 1rem; background: rgba(26, 31, 46, 0.4); border-radius: var(--border-radius);">
                                    <i class="fas fa-brain" style="font-size: 2rem; color: var(--accent-purple); margin-bottom: 0.5rem;"></i>
                                    <h4>Artificial Intelligence</h4>
                                    <p style="font-size: 0.9rem; color: #a0aec0;">CV, NLP, Edge AI, ML Ops</p>
                                </div>
                                <div class="text-center" style="padding: 1rem; background: rgba(26, 31, 46, 0.4); border-radius: var(--border-radius);">
                                    <i class="fas fa-gamepad" style="font-size: 2rem; color: var(--accent-green); margin-bottom: 0.5rem;"></i>
                                    <h4>Game Development</h4>
                                    <p style="font-size: 0.9rem; color: #a0aec0;">Unity, Pixel Art, Game Design</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Statistical information -->
                    <div class="flex-column gap-2">
                        <!-- Statistical card -->
                        <div style="background: rgba(26, 31, 46, 0.8); padding: 2rem; border-radius: var(--border-radius);">
                            <h3 style="margin-bottom: 1.5rem; color: var(--accent-purple);">By The Numbers</h3>
                            <div class="grid-3 text-center">
                                ${about.stats.map(stat => `
                                    <div>
                                        <h3 style="font-size: 2.5rem; color: var(--accent-blue); margin-bottom: 0.5rem;">${stat.value}</h3>
                                        <p style="color: #a0aec0;">${stat.label}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        
                        <!-- Current status -->
                        <div style="background: rgba(26, 31, 46, 0.8); padding: 1.5rem; border-radius: var(--border-radius);">
                            <h3 style="margin-bottom: 1rem; color: var(--accent-green);">Current Focus</h3>
                            <ul style="list-style: none; padding-left: 0;">
                                <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
                                    <i class="fas fa-arrow-right" style="position: absolute; left: 0; color: var(--accent-blue);"></i>
                                    Edge AI deployment on microcontrollers
                                </li>
                                <li style="margin-bottom: 0.8rem; padding-left: 1.5rem; position: relative;">
                                    <i class="fas fa-arrow-right" style="position: absolute; left: 0; color: var(--accent-purple);"></i>
                                    Procedural generation for 2D games
                                </li>
                                <li style="padding-left: 1.5rem; position: relative;">
                                    <i class="fas fa-arrow-right" style="position: absolute; left: 0; color: var(--accent-green);"></i>
                                    Open-source embedded tools development
                                </li>
                            </ul>
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