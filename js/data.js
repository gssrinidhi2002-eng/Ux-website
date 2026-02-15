// =====================================================
// 📝 WEBSITE CONTENT - EDIT THIS FILE TO UPDATE YOUR PORTFOLIO
// =====================================================
// This file contains ALL the text content for your website.
// To edit: Just change the text between the quotes " " 
// Save the file and refresh your browser to see changes!

const websiteData = {

    // ==================
    // PERSONAL INFO
    // ==================
    personal: {
        name: "Srinidhi G S",
        title: "Product Designer",

        // Short bio that appears in the header
        headerBio: "Product Designer working across UX, AI systems, and product strategy, with a focus on retention, clarity, and scale.",

        // Longer bio for the About page
        fullBio: "I design and ship AI-native and enterprise products, working end-to-end from discovery to launch. My work spans AI interaction design, internal tools, and consumer experiences, with a strong focus on retention, usability, and UX-led product decisions.",

        // Contact & links
        email: "gssrinidhi2002@gmail.com",
        phone: "+91 94422 33012",
        portfolio: "#",
        linkedin: "https://www.linkedin.com/in/gssrinidhi/",
        behance: "https://www.behance.net/gssrinidhi",

        // Resume PDF (place file in /public or /assets)
        resume: "assets/Srinidhi_GS_Resume.pdf",

        // Profile image
        profileImage: "images/profile.jpg"
    },

    // ==================
    // WORK EXPERIENCE
    // ==================
    experience: [
        {
            company: "Terra",
            role: "UX Designer → UX-Led Product Ownership",
            period: "December 2024 – Present"
        },
        {
            company: "Société Générale – Global Solution Centre",
            role: "UX Design Intern",
            period: "April 2024 – August 2024"
        },
        {
            company: "Remapped",
            role: "UX Design Intern",
            period: "February 2024 – December 2024"
        },
        {
            company: "Bata India Limited",
            role: "Technical Product Design Intern",
            period: "August 2021 – September 2021"
        }
    ],

    // ==================
    // EDUCATION
    // ==================
    education: [
        {
            institution: "Pearl Academy, Delhi",
            degree: "Bachelor’s Degree — User Experience & Interaction Design",
            grade: "First Class",
            period: "2020 – 2024",
            project: "Speculative thesis exploring the 'no-interface' paradigm and post-UI interaction futures."
        }
    ],

    // ==================
    // SKILLS
    // ==================
    skills: {
        "Focus Areas": [
            "UX-Led Product Strategy",
            "AI Interaction Design & Responsible AI",
            "Retention & Activation",
            "Design Systems",
            "Data-Informed Decision Making"
        ],
        "Tools": [
            "Figma",
            "Mixpanel",
            "CleverTap",
            "Google Analytics",
            "Jira",
            "Git & GitHub",
            "Unity (UX collaboration)",
            "Basic C#"
        ]
    },


    // ==================
    // PROJECTS
    // ==================
    // TO ADD YOUR REAL PROJECTS: Replace these placeholder projects with your actual work
    // For each project, you need:
    // - id: unique identifier (use lowercase, no spaces)
    // - title: Project name
    // - description: One-line description
    // - tags: Category tags (e.g., "UX DESIGN", "FEATURED", "AI/ML")
    // - thumbnail: Image path (put images in images/projects/ folder)
    // - year: Year completed
    // - role: Your role
    // - details: Longer description with project details
    // - images: Array of image paths to show in project detail page

    projects: [
        {
            id: "ai-analytics-platform",
            title: "AI Analytics Platform",
            description: "Self-service analytics tool reducing insight latency from 4+ hours to real-time",
            tags: ["UX DESIGN", "FEATURED", "AI/ML"],
            thumbnail: "images/projects/project1.jpg",
            year: "2024",
            role: "Lead UX Designer",
            collaborators: "Terra Design Team, Engineering",
            details: "Designed a self-service AI analytics platform that removed analyst bottlenecks and enabled real-time insights across 8 game teams. The platform featured intuitive data visualization, customizable dashboards, and AI-powered recommendations, reducing insight latency from 4+ hours to real-time and enabling 2× faster PMF validation.",
            images: [
                "images/projects/project1.jpg",
                "images/projects/project1-detail1.jpg",
                "images/projects/project1-detail2.jpg"
            ]
        },
        {
            id: "ai-game-onboarding",
            title: "AI-Native Game FTUE",
            description: "Modular onboarding system reducing early AI complexity by 17%",
            tags: ["GAME DESIGN", "AI/ML", "TERRA"],
            thumbnail: "images/projects/project2.jpg",
            year: "2024",
            role: "UX Designer & Product Owner",
            collaborators: "Game Development Team",
            details: "Designed and implemented a modular onboarding system for AI-native games that reduced early AI complexity by 17%. The system achieved 17% Day-1 retention and 12% overall app retention at launch through carefully crafted FTUE flows, progressive disclosure of AI features, and behavioral guardrails.",
            images: [
                "images/projects/project2.jpg",
                "images/projects/project2-detail1.jpg"
            ]
        },
        {
            id: "enterprise-design-system",
            title: "Enterprise Design System",
            description: "Scalable design system for financial services platform",
            tags: ["DESIGN SYSTEMS", "ENTERPRISE", "SG"],
            thumbnail: "images/projects/project3.jpg",
            year: "2024",
            role: "UX Design Intern",
            collaborators: "Société Générale GSC Team",
            details: "Contributed to a scalable design system for an enterprise financial services platform with three integrated modules. Standardized design frameworks and visual systems to ensure consistency, accessibility, and maintainability across the product ecosystem.",
            images: [
                "images/projects/project3.jpg",
                "images/projects/project3-detail1.jpg"
            ]
        },
        {
            id: "career-platform",
            title: "Career Growth Platform",
            description: "User-centered platform achieving 15% retention increase and 7% CTR improvement",
            tags: ["WEB DESIGN", "REMAPPED"],
            thumbnail: "images/projects/project4.jpg",
            year: "2024",
            role: "UX Design Intern",
            collaborators: "Remapped Team",
            details: "Developed user-centered, scalable interfaces for a career-focused platform that enhanced engagement and accessibility. Applied UX strategies to support diverse user needs, achieving a 15% increase in retention, 7% overall CTR improvement, and 9% increase in engagement time.",
            images: [
                "images/projects/project4.jpg"
            ]
        },
        {
            id: "unity-design-systems",
            title: "Unity Design Systems",
            description: "Figma-to-Unity design system reducing UI build cycles by 67%",
            tags: ["DESIGN SYSTEMS", "GAME DESIGN", "TERRA"],
            thumbnail: "images/projects/project5.jpg",
            year: "2024",
            role: "UX Designer",
            collaborators: "8 Game Teams at Terra",
            details: "Standardized Figma design systems aligned with Unity implementation constraints, improving designer–developer handoff and reducing UI build cycles by approximately 67% (≈1 week saved per iteration) across 8 teams. Created comprehensive component libraries and documentation.",
            images: [
                "images/projects/project5.jpg"
            ]
        },
        {
            id: "footwear-collection",
            title: "Footwear Collection Design",
            description: "Production-ready prototypes for Bata India's footwear collection",
            tags: ["PRODUCT DESIGN", "BATA"],
            thumbnail: "images/projects/project6.jpg",
            year: "2021",
            role: "Technical Product Design Intern",
            collaborators: "Bata India Design & Production Teams",
            details: "Translated 8+ design concepts into production-ready prototypes aligned with manufacturing requirements. Collaborated on 12+ fit-focused patterns and created technical drawings and specifications, conducting market trend research and developing 5+ digital prototypes using CAD tools.",
            images: [
                "images/projects/project6.jpg"
            ]
        }
    ]
};

// Don't change anything below this line
// ==========================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = websiteData;
}
