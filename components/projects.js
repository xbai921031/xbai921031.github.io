/* Projects */
class ProjectsComponent {
    constructor(config) {
        this.config = config;
    }

    render() {
        const { projects } = this.config;
        
        /* Category */
        const categorizedProjects = this.categorizeProjects(projects);
        
        return `
            <section id="projects" class="section">
                <h2 class="section-title">Projects</h2>
                
                <!-- Category navigation -->
                <div class="project-categories flex-center mb-2" style="gap: 1rem; flex-wrap: wrap;">
                    <button class="category-filter active" data-category="all" style="
                        padding: 0.5rem 1.5rem;
                        background: var(--accent-blue);
                        border: none;
                        border-radius: 20px;
                        color: white;
                        cursor: pointer;
                        transition: all 0.3s;
                    ">All Projects</button>
                    
                    <button class="category-filter" data-category="embedded" style="
                        padding: 0.5rem 1.5rem;
                        background: rgba(0, 217, 255, 0.2);
                        border: 1px solid var(--accent-blue);
                        border-radius: 20px;
                        color: var(--text-color);
                        cursor: pointer;
                        transition: all 0.3s;
                    ">Embedded</button>
                    
                    <button class="category-filter" data-category="ai" style="
                        padding: 0.5rem 1.5rem;
                        background: rgba(157, 78, 221, 0.2);
                        border: 1px solid var(--accent-purple);
                        border-radius: 20px;
                        color: var(--text-color);
                        cursor: pointer;
                        transition: all 0.3s;
                    ">AI & ML</button>
                    
                    <button class="category-filter" data-category="game" style="
                        padding: 0.5rem 1.5rem;
                        background: rgba(74, 222, 128, 0.2);
                        border: 1px solid var(--accent-green);
                        border-radius: 20px;
                        color: var(--text-color);
                        cursor: pointer;
                        transition: all 0.3s;
                    ">Games</button>
                </div>
                
                <!-- Project display -->
                <div class="projects-grid grid-3">
                    ${projects.map(project => this.renderProjectCard(project)).join('')}
                </div>
                
                <!-- Project summarize -->
                <div class="project-stats mt-2" style="
                    display: flex;
                    justify-content: space-around;
                    flex-wrap: wrap;
                    gap: 1rem;
                    padding: 1.5rem;
                    background: rgba(26, 31, 46, 0.8);
                    border-radius: var(--border-radius);
                ">
                    <div class="text-center">
                        <h3 style="color: var(--accent-blue); font-size: 2rem;">${projects.length}</h3>
                        <p>Total Projects</p>
                    </div>
                    <div class="text-center">
                        <h3 style="color: var(--accent-purple); font-size: 2rem;">${categorizedProjects.embedded.length}</h3>
                        <p>Embedded Projects</p>
                    </div>
                    <div class="text-center">
                        <h3 style="color: var(--accent-green); font-size: 2rem;">${categorizedProjects.game.length}</h3>
                        <p>Game Projects</p>
                    </div>
                </div>
            </section>
        `;
    }

    renderProjectCard(project) {
        const categoryColors = {
            embedded: 'var(--accent-blue)',
            ai: 'var(--accent-purple)',
            game: 'var(--accent-green)',
            iot: 'var(--accent-blue)',
            web: 'var(--accent-purple)'
        };

        const categoryIcons = {
            embedded: 'fas fa-microchip',
            ai: 'fas fa-brain',
            game: 'fas fa-gamepad',
            iot: 'fas fa-wifi',
            web: 'fas fa-globe'
        };

        return `
            <div class="project-card" 
                 data-category="${project.category}"
                 style="
                    background: var(--secondary-color);
                    border-radius: var(--border-radius);
                    padding: 1.5rem;
                    transition: all 0.3s;
                    border-top: 4px solid ${categoryColors[project.category]};
                    cursor: pointer;
                 "
                 onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 20px rgba(0,0,0,0.3)'"
                 onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                
                <!-- Project title -->
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                    <div style="
                        width: 50px;
                        height: 50px;
                        background: ${categoryColors[project.category]};
                        border-radius: 10px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    ">
                        <i class="${categoryIcons[project.category]}" style="color: white; font-size: 1.5rem;"></i>
                    </div>
                    <h3 style="color: ${categoryColors[project.category]}">${project.title}</h3>
                </div>
                
                <!-- Project description -->
                <p style="margin-bottom: 1rem; color: #a0aec0;">${project.description}</p>
                
                <!-- Tech-stack -->
                <div class="tech-stack" style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1.5rem;">
                    ${project.technologies.map(tech => `
                        <span style="
                            background: rgba(0, 0, 0, 0.3);
                            padding: 0.3rem 0.8rem;
                            border-radius: 4px;
                            font-size: 0.8rem;
                        ">${tech}</span>
                    `).join('')}
                </div>
                
                <!-- Project links -->
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="
                        padding: 0.3rem 0.8rem;
                        background: ${categoryColors[project.category]}20;
                        border: 1px solid ${categoryColors[project.category]};
                        border-radius: 4px;
                        font-size: 0.8rem;
                    ">${project.category.toUpperCase()}</span>
                    
                    ${project.link ? `
                        <a href="${project.link}" 
                           target="_blank"
                           style="
                                color: ${categoryColors[project.category]};
                                text-decoration: none;
                                display: flex;
                                align-items: center;
                                gap: 0.5rem;
                                transition: all 0.3s;
                           "
                           onmouseover="this.style.gap='0.8rem'"
                           onmouseout="this.style.gap='0.5rem'">
                            View Project
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
    }

    categorizeProjects(projects) {
        return {
            all: projects,
            embedded: projects.filter(p => p.category === 'embedded'),
            ai: projects.filter(p => p.category === 'ai'),
            game: projects.filter(p => p.category === 'game'),
            iot: projects.filter(p => p.category === 'iot'),
            web: projects.filter(p => p.category === 'web')
        };
    }

    setupFiltering() {
        const filterButtons = document.querySelectorAll('.category-filter');
        const projectCards = document.querySelectorAll('.project-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.style.background = 'rgba(26, 31, 46, 0.8)';
                });
                
                button.classList.add('active');
                button.style.background = button.dataset.category === 'all' 
                    ? 'var(--accent-blue)' 
                    : button.style.borderColor;

                const category = button.dataset.category;
                
                projectCards.forEach(card => {
                    if (category === 'all' || card.dataset.category === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
}

if (typeof window !== 'undefined') {
    window.ProjectsComponent = ProjectsComponent;
}