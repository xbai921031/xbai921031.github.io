/* Header */
class HeaderComponent {
    constructor(config) {
        this.config = config;
    }

    render() {
        const { personalInfo, socialLinks } = this.config;
        
        /* Get github link */
        const githubLink = socialLinks.find(link => link.icon.includes('github'));
        const youtubeLink = socialLinks.find(link => link.icon.includes('youtube'));

        const avatarPath = personalInfo.avatar || '';
        const hasAvatar = avatarPath.trim() !== '';
        
        return `
            <header class="section text-center">
                <div class="flex-column flex-center">
                    <!-- Avatar and Basic Info -->
                    <div class="avatar-section" style="
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-bottom: 2.5rem;
                    ">
                        <!-- Avatar Container -->
                        <div class="avatar-wrapper" style="
                            position: relative;
                            margin-bottom: 1.8rem;
                        ">
                            <div class="avatar" style="
                                width: 140px;
                                height: 140px;
                                border-radius: 50%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                position: relative;
                                overflow: hidden;
                                border: 2px solid rgba(255, 255, 255, 0.1);
                            ">
                                ${hasAvatar ? `
                                    <!-- Self defined avatar -->
                                    <img src="${avatarPath}" 
                                         alt="${personalInfo.name}"
                                         style="
                                            width: 100%;
                                            height: 100%;
                                            object-fit: cover;
                                         "
                                         onerror="this.style.display='none';"
                                         onload="
                                            this.style.boxShadow='0 0 20px rgba(0, 217, 255, 0.3)';
                                         ">
                                ` : `
                                    <!-- Default avatar -->
                                    <div style="
                                        width: 100%;
                                        height: 100%;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        background: linear-gradient(135deg, 
                                            rgba(0, 217, 255, 0.9), 
                                            rgba(157, 78, 221, 0.9)
                                        );
                                    ">
                                        <i class="fas fa-user" style="
                                            font-size: 3rem; 
                                            color: white;
                                        "></i>
                                    </div>
                                `}
                            </div>
                        </div>
                        
                        <!-- Name and Title -->
                        <div class="name-title" style="margin-bottom: 1.2rem;">
                            <h1 style="
                                font-size: 2.5rem;
                                background: linear-gradient(90deg, 
                                    var(--accent-blue), 
                                    var(--accent-purple)
                                );
                                -webkit-background-clip: text;
                                background-clip: text;
                                color: transparent;
                                margin: 0 0 0.4rem 0;
                                font-weight: 700;
                                line-height: 1.1;
                            ">
                                ${personalInfo.name}
                            </h1>
                            <p style="
                                font-size: 1.1rem; 
                                color: #94a3b8; 
                                margin: 0;
                                font-weight: 300;
                            ">
                                ${personalInfo.title}
                            </p>
                        </div>

                        <!-- Contact Details + GitHub + YouTube-->
                        <div class="contact-details" style="
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 1.2rem;
                            margin-top: 1.2rem;
                            flex-wrap: wrap;
                        ">
                            <!-- Location -->
                            <div style="
                                display: flex;
                                align-items: center;
                                gap: 0.5rem;
                                padding: 0.3rem 0.6rem;
                                border-radius: 4px;
                                transition: all 0.2s ease;
                            "
                            onmouseover="
                                this.style.background='rgba(157, 78, 221, 0.05)';
                                this.style.color='#e2e8f0';
                            "
                            onmouseout="
                                this.style.background='transparent';
                                this.style.color='#94a3b8';
                            ">
                                <i class="fas fa-map-marker-alt" style="
                                    font-size: 1rem;
                                    color: #94a3b8;
                                "></i>
                                <span style="
                                    font-size: 0.95rem;
                                    color: #94a3b8;
                                    font-weight: 400;
                                ">
                                    ${personalInfo.location}
                                </span>
                            </div>
                            
                            <!-- Separator -->
                            <div style="
                                width: 3px;
                                height: 3px;
                                border-radius: 50%;
                                background: rgba(148, 163, 184, 0.15);
                            "></div>
                            
                            <!-- Email -->
                            <a href="mailto:${personalInfo.email}" 
                               style="
                                    display: flex;
                                    align-items: center;
                                    gap: 0.5rem;
                                    text-decoration: none;
                                    color: #94a3b8;
                                    transition: all 0.2s ease;
                                    padding: 0.3rem 0.6rem;
                                    border-radius: 4px;
                               "
                               onmouseover="
                                    this.style.color='#e2e8f0';
                                    this.style.background='rgba(0, 217, 255, 0.05)';
                               "
                               onmouseout="
                                    this.style.color='#94a3b8';
                                    this.style.background='transparent';
                               ">
                                <i class="fas fa-envelope" style="
                                    font-size: 1rem;
                                    color: #94a3b8;
                                "></i>
                                <span style="
                                    font-size: 0.95rem;
                                    font-weight: 400;
                                ">
                                    ${personalInfo.email}
                                </span>
                            </a>
                            
                            <!-- Separator -->
                            <div style="
                                width: 3px;
                                height: 3px;
                                border-radius: 50%;
                                background: rgba(148, 163, 184, 0.15);
                            "></div>

                            <!-- GitHub -->
                            ${githubLink ? `
                            <a href="${githubLink.url}" 
                               target="_blank"
                               style="
                                    display: flex;
                                    align-items: center;
                                    gap: 0.5rem;
                                    text-decoration: none;
                                    color: #94a3b8;
                                    transition: all 0.2s ease;
                                    padding: 0.3rem 0.6rem;
                                    border-radius: 4px;
                               "
                               onmouseover="
                                    this.style.color='#e2e8f0';
                                    this.style.background='rgba(111, 84, 148, 0.05)';
                               "
                               onmouseout="
                                    this.style.color='#94a3b8';
                                    this.style.background='transparent';
                               ">
                                <i class="fab fa-github" style="
                                    font-size: 1rem;
                                    color: #94a3b8;
                                "></i>
                                <span style="
                                    font-size: 0.95rem;
                                    font-weight: 400;
                                ">
                                    GitHub
                                </span>
                            </a>
                            ` : ''}

                            <!-- Separator -->
                            <div style="
                                width: 3px;
                                height: 3px;
                                border-radius: 50%;
                                background: rgba(148, 163, 184, 0.15);
                            "></div>

                            <!-- YouTube -->
                            ${youtubeLink ? `
                            <a href="${youtubeLink.url}" 
                               target="_blank"
                               style="
                                    display: flex;
                                    align-items: center;
                                    gap: 0.5rem;
                                    text-decoration: none;
                                    color: #94a3b8;
                                    transition: all 0.2s ease;
                                    padding: 0.3rem 0.6rem;
                                    border-radius: 4px;
                               "
                               onmouseover="
                                    this.style.color='#e2e8f0';
                                    this.style.background='rgba(111, 84, 148, 0.05)';
                               "
                               onmouseout="
                                    this.style.color='#94a3b8';
                                    this.style.background='transparent';
                               ">
                                <i class="fab fa-youtube" style="
                                    font-size: 1rem;
                                    color: #94a3b8;
                                "></i>
                                <span style="
                                    font-size: 0.95rem;
                                    font-weight: 400;
                                ">
                                    YouTube
                                </span>
                            </a>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </header>
        `;
    }
}

/* Register components to the global scope. */
if (typeof window !== 'undefined') {
    window.HeaderComponent = HeaderComponent;
}