/* Contact */
class ContactComponent {
    constructor(config) {
        this.config = config;
    }

    render() {
        const { contact, socialLinks } = this.config;
        
        return `
            <section id="contact" class="section">
                <h2 class="section-title">Get In Touch</h2>
                
                <div class="grid-2 gap-2">
                    <!-- Contacts list -->
                    <div>
                        <h3 style="margin-bottom: 1.5rem; color: var(--accent-blue);">Send me a message</h3>
                        
                        <form id="contact-form" style="display: flex; flex-direction: column; gap: 1rem;">
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; color: #a0aec0;">Name</label>
                                <input type="text" 
                                       required
                                       style="
                                            width: 100%;
                                            padding: 0.8rem;
                                            background: rgba(26, 31, 46, 0.8);
                                            border: 1px solid rgba(255, 255, 255, 0.1);
                                            border-radius: 4px;
                                            color: var(--text-color);
                                            transition: all 0.3s;
                                       "
                                       onfocus="this.style.borderColor='var(--accent-blue)'; this.style.outline='none'"
                                       onblur="this.style.borderColor='rgba(255, 255, 255, 0.1)'">
                            </div>
                            
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; color: #a0aec0;">Email</label>
                                <input type="email" 
                                       required
                                       style="
                                            width: 100%;
                                            padding: 0.8rem;
                                            background: rgba(26, 31, 46, 0.8);
                                            border: 1px solid rgba(255, 255, 255, 0.1);
                                            border-radius: 4px;
                                            color: var(--text-color);
                                            transition: all 0.3s;
                                       "
                                       onfocus="this.style.borderColor='var(--accent-blue)'; this.style.outline='none'"
                                       onblur="this.style.borderColor='rgba(255, 255, 255, 0.1)'">
                            </div>
                            
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; color: #a0aec0;">Project Type</label>
                                <select style="
                                            width: 100%;
                                            padding: 0.8rem;
                                            background: rgba(26, 31, 46, 0.8);
                                            border: 1px solid rgba(255, 255, 255, 0.1);
                                            border-radius: 4px;
                                            color: var(--text-color);
                                            transition: all 0.3s;
                                       "
                                       onfocus="this.style.borderColor='var(--accent-blue)'; this.style.outline='none'"
                                       onblur="this.style.borderColor='rgba(255, 255, 255, 0.1)'">
                                    <option value="">Select a project type</option>
                                    <option value="embedded">Embedded Development</option>
                                    <option value="ai">AI/ML Project</option>
                                    <option value="game">Game Development</option>
                                    <option value="consulting">Technical Consulting</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; color: #a0aec0;">Message</label>
                                <textarea rows="5"
                                          required
                                          style="
                                            width: 100%;
                                            padding: 0.8rem;
                                            background: rgba(26, 31, 46, 0.8);
                                            border: 1px solid rgba(255, 255, 255, 0.1);
                                            border-radius: 4px;
                                            color: var(--text-color);
                                            transition: all 0.3s;
                                            resize: vertical;
                                          "
                                          onfocus="this.style.borderColor='var(--accent-blue)'; this.style.outline='none'"
                                          onblur="this.style.borderColor='rgba(255, 255, 255, 0.1)'"></textarea>
                            </div>
                            
                            <button type="submit" 
                                    style="
                                        padding: 1rem 2rem;
                                        background: linear-gradient(90deg, var(--accent-blue), var(--accent-purple));
                                        border: none;
                                        border-radius: 4px;
                                        color: white;
                                        font-weight: bold;
                                        cursor: pointer;
                                        transition: all 0.3s;
                                        align-self: flex-start;
                                    "
                                    onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 5px 15px rgba(0, 217, 255, 0.3)'"
                                    onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
                                Send Message
                            </button>
                        </form>
                    </div>
                    
                    <!-- Social media -->
                    <div>
                        <h3 style="margin-bottom: 1.5rem; color: var(--accent-purple);">Contact Information</h3>
                        
                        <div class="flex-column gap-2 mb-2">
                            <!-- Info -->
                            <div style="
                                background: rgba(26, 31, 46, 0.8);
                                padding: 1.5rem;
                                border-radius: var(--border-radius);
                                border-left: 4px solid var(--accent-blue);
                            ">
                                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                                    <i class="fas fa-envelope" style="font-size: 1.5rem; color: var(--accent-blue);"></i>
                                    <div>
                                        <h4>Email</h4>
                                        <a href="mailto:${contact.email}" 
                                           style="color: var(--text-color); text-decoration: none;">
                                            ${contact.email}
                                        </a>
                                    </div>
                                </div>
                                
                                <div style="display: flex; align-items: center; gap: 1rem;">
                                    <i class="fas fa-clock" style="font-size: 1.5rem; color: var(--accent-green);"></i>
                                    <div>
                                        <h4>Availability</h4>
                                        <p style="color: #a0aec0; margin: 0;">${contact.availability}</p>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Respond time -->
                            <div style="
                                background: rgba(26, 31, 46, 0.8);
                                padding: 1.5rem;
                                border-radius: var(--border-radius);
                                border-left: 4px solid var(--accent-green);
                            ">
                                <h4 style="margin-bottom: 0.5rem;">Response Time</h4>
                                <p style="color: #a0aec0; margin-bottom: 1rem;">I typically respond within 24-48 hours.</p>
                                
                                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                                    <span style="
                                        padding: 0.3rem 0.8rem;
                                        background: var(--accent-blue)20;
                                        border: 1px solid var(--accent-blue);
                                        border-radius: 4px;
                                        font-size: 0.8rem;
                                    ">Freelance</span>
                                    <span style="
                                        padding: 0.3rem 0.8rem;
                                        background: var(--accent-purple)20;
                                        border: 1px solid var(--accent-purple);
                                        border-radius: 4px;
                                        font-size: 0.8rem;
                                    ">Consulting</span>
                                    <span style="
                                        padding: 0.3rem 0.8rem;
                                        background: var(--accent-green)20;
                                        border: 1px solid var(--accent-green);
                                        border-radius: 4px;
                                        font-size: 0.8rem;
                                    ">Collaboration</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Social-links -->
                        <div>
                            <h4 style="margin-bottom: 1rem; color: #a0aec0;">Connect with me</h4>
                            <div class="social-links" style="display: flex; gap: 1rem; flex-wrap: wrap;">
