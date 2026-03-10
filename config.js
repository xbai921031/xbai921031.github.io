/* Configurations */
window.siteConfig = {
    /* Personal info */
    personalInfo: {
        name: "xbai",
        title: "Embedded Software Engineer",
        email: "573793689@qq.com",
        location: "Shenzhen, China",
        avatar: "assets/images/avatar.jpg"
    },

    /* Social media links */
    socialLinks: [
        { name: "GitHub", icon: "fab fa-github", url: "https://github.com/xbai921031" },
        { name: "YouTube ", icon: "fab fa-youtube", url: "https://www.youtube.com/@xbai1031" }
    ],

    /* About */
    about: {
        paragraphs: [
            "Automotive software engineer by day, diving into game dev and AI theory by night. Ravenclaw with a 🐈."
        ]
    },

    /* Projects */
    projects: [
        {
            id: 1,
            title: "esp32-ClawBot",
            category: "embedded",
            description: "AI Agent on ESP32.",
            technologies: ["C", "FreeRTOS", "ESP32-S3", "mimiclaw"],
            link: "https://github.com/xbai921031/esp32-ClawBot",
            featured: true
        },
        {
            id: 2,
            title: "godot_game",
            category: "game",
            description: "2D game.",
            technologies: ["Godot", "GDScript"],
            link: "https://github.com/xbai921031/godot_game",
            featured: true
        }
    ],

    /* Footer */
    footer: {
        copyright: "© 2026 xbai. All rights reserved."
    }
};