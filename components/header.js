/* Header */
class HeaderComponent {
    constructor(config) {
        this.config = config;
    }

    render() {
        const { personalInfo, socialLinks } = this.config;
        
        /* Get github link */
        const githubLink = socialLinks.find(link => link.icon.includes('github'));
        const otherSocialLinks = socialLinks.filter(link => !link.icon.includes('github'));

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

                        <!-- Contact Details + GitHub -->
                        <div class="contact-details" style="
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 1.2rem;
                            margin-top: 1.2rem;
                            flex-wrap: wrap;
                        ">
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
                        </div>
                    </div>

                    <!-- Other Social Links -->
                    ${otherSocialLinks.length > 0 ? `
                    <div class="social-section" style="
                        width: 100%;
                        max-width: 350px;
                        margin: 2rem auto 2.5rem;
                    ">
                        <div class="social-links" style="
                            display: flex;
                            justify-content: center;
                            gap: 1rem;
                            flex-wrap: wrap;
                        ">
                            ${otherSocialLinks.map(link => {
                                const icon = link.icon;
                                let platform = icon.includes('linkedin') ? 'LinkedIn' : 
                                              icon.includes('twitter') ? 'Twitter' : 
                                              icon.includes('envelope') ? 'Email' : 'Social';
                                
                                return `
                                    <a href="${link.url}" 
                                       target="_blank"
                                       style="
                                            display: flex;
                                            flex-direction: column;
                                            align-items: center;
                                            text-decoration: none;
                                            width: 55px;
                                       ">
                                        <div style="
                                            width: 40px;
                                            height: 40px;
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            margin-bottom: 0.5rem;
                                            border-radius: 8px;
                                            border: 1px solid rgba(148, 163, 184, 0.12);
                                        ">
                                            <i class="${icon}" style="
                                                font-size: 1.1rem;
                                                color: #94a3b8;
                                            "></i>
                                        </div>
                                        <span style="
                                            color: #94a3b8;
                                            font-size: 0.75rem;
                                            font-weight: 500;
                                        ">
                                            ${platform}
                                        </span>
                                    </a>
                                `;
                            }).join('')}
                        </div>
                    </div>
                    ` : ''}
                </div>
            </header>
        `;
    }
}

/* Register components to the global scope. */
if (typeof window !== 'undefined') {
    window.HeaderComponent = HeaderComponent;
}