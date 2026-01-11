/* Header */
class HeaderComponent {
    constructor(config) {
        this.config = config;
    }

    render() {
        const { personalInfo, socialLinks } = this.config;
        
        return `
            <header class="section text-center">
                <div class="flex-column flex-center gap-2">
                    <!-- Header -->
                    <div class="avatar" style="
                        width: 150px;
                        height: 150px;
                        border-radius: 50%;
                        background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: 4px solid var(--secondary-color);
                        overflow: hidden;
                    ">
                        <i class="fas fa-laptop-code" style="font-size: 4rem; color: white;"></i>
                    </div>
                    
                    <!-- Name and title -->
                    <div>
                        <h1 style="
                            font-size: 2.8rem;
                            background: linear-gradient(90deg, var(--accent-blue), var(--accent-purple));
                            -webkit-background-clip: text;
                            background-clip: text;
                            color: transparent;
                            margin-bottom: 0.5rem;
                        ">
                            ${personalInfo.name}
                        </h1>
                        <p style="font-size: 1.2rem; color: #a0aec0; max-width: 600px; margin: 0 auto 1.5rem;">
                            ${personalInfo.title}
                        </p>
                    </div>
                    
                    <!-- Skills -->
                    <div class="skills flex-center" style="flex-wrap: wrap; gap: 0.8rem;">
                        ${personalInfo.skills.map(skill => `
                            <span style="
                                background-color: rgba(26, 31, 46, 0.8);
                                padding: 0.5rem 1rem;
                                border-radius: 20px;
                                font-size: 0.9rem;
                                border-left: 3px solid var(--accent-blue);
                                border-right: 3px solid var(--accent-purple);
                            ">
                                ${skill}
                            </span>
                        `).join('')}
                    </div>

                    <!-- Personal Info -->
                    <p style="margin-top: 2rem; color: #a0aec0; font-style: italic;">
                        ${personalInfo.tagline}
                    </p>
                </div>
            </header>
        `;
    }

    /* Component-specific methods */
    animateAvatar() {
        /* Add avatar animation logic here. */
        console.log('Avatar animation triggered');
    }
}

/* Register components to the global scope. */
if (typeof window !== 'undefined') {
    window.HeaderComponent = HeaderComponent;
}