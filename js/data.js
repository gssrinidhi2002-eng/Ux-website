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
        name: "Srinidhi G.S",
        title: "Product Designer",
        // Short bio that appears in the header (1-2 sentences)
        headerBio: "Product Designer with experience delivering enterprise and AI-enabled digital products, driving analytics-informed improvements in retention and task efficiency.",

        // Longer bio for the About page
        fullBio: "Product Designer with experience delivering enterprise and AI-enabled digital products, driving analytics-informed improvements in retention (D1 15% → 42%, D7 0.2% → 9%), and task efficiency. Experienced in responsible AI UX (human-in-the-loop, transparency, governance), designing internal tools in regulated environments, and collaborating with engineering through HTML/CSS specifications.",

        // Contact information
        email: "gssrinidhi2002@gmail.com",
        phone: "+91 94422 33012",
        portfolio: "#", // Update with your portfolio URL if different
        linkedin: "https://www.linkedin.com/in/gssrinidhi/",
        behance: "https://www.behance.net/gssrinidhi",

        // Profile image (put your photo in images/ folder)
        profileImage: "images/profile.jpg"
    },

    // ==================
    // WORK EXPERIENCE
    // ==================
    experience: [
        {
            company: "Terra",
            role: "UX Designer → Product Owner (UX-Led)",
            period: "December 2024 – Present",
            achievements: [
                "Owned end-to-end UX execution for four AI-native titles, covering FTUE, core loop validation, and AI interaction design, achieving 17% Day-1 retention and 12% overall app retention at launch; reduced early AI complexity by 17% through modular onboarding systems.",
                "Outlined AI interaction frameworks, including prompt flows, behavioral guardrails, and narrative constraints, to stabilize LLM-driven gameplay and improve predictability across live iterations.",
                "Standardized Figma design systems aligned with Unity implementation constraints, improving designer–developer handoff and reducing UI build cycles by ~67% (≈1 week saved per iteration) across 8 teams.",
                "Validated product direction through rapid 2-week proof-of-concept cycles, synthesizing insights from 200+ user interviews and cohort-based metrics to inform roadmap prioritization and early kill/iterate decisions.",
                "Executed UX for a self-service AI analytics platform, removing analyst bottlenecks and reducing insight latency from 4+ hours to real time, enabling 2× faster PMF validation across 8 game teams.",
                "Led design-driven execution for AI-native games from 0 → 1, contributing to PMF initiatives across 15+ games and 11+ features for 8L+ users.",
                "Contributed to top-10% global retention outcomes, improving Day-1 retention from 15% → 42% and Day-7 retention from 0.2% → 9% through iterative UX improvements.",
                "Refactored friction-heavy onboarding and gameplay touchpoints, validating improvements via cohort analysis, A/B testing, funnel analysis, and telemetry, and supporting social-first features that drove 1.5× retention and 2× virality."
            ]
        },
        {
            company: "Société Générale – Global Solution Centre",
            role: "UX Design Intern",
            period: "April 2024 – August 2024",
            achievements: [
                "Refined engagement personas, user journeys, and information architecture to improve task efficiency and support alignment with business OKRs.",
                "Created wireframes and interactive prototypes to clearly communicate design intent, validate usability, and support iterative product development.",
                "Contributed to a scalable platform with three integrated modules by standardizing design frameworks and visual systems, ensuring consistency, usability, and maintainability across the product."
            ]
        },
        {
            company: "Remapped",
            role: "UX Design Intern",
            period: "February 2024 – December 2024",
            achievements: [
                "Developed user-centered, scalable interfaces that enhanced engagement and accessibility for a career-focused platform.",
                "Applied UX strategies to support diverse user needs, increasing retention by 15% and strengthening brand credibility.",
                "Achieved overall CTR improvement of 7% and engagement time increase of 9%, positioning the platform as a career growth resource startup."
            ]
        },
        {
            company: "Bata India Limited",
            role: "Technical Product Design Intern",
            period: "August 2021 – September 2021",
            achievements: [
                "Interned in the Footwear Collection Department, translating 8+ design concepts into production-ready prototypes aligned with manufacturing requirements.",
                "Collaborated on 12+ fit-focused patterns and created technical drawings and specifications to support accurate production handoff.",
                "Conducted industry and market trend research and developed 5+ digital prototypes using CAD tools to support product innovation and design validation.",
                "Participated in 6+ cross-functional design–production meetings, contributing to improved workflow alignment between design and manufacturing teams."
            ]
        }
    ],

    // ==================
    // EDUCATION
    // ==================
    education: [
        {
            institution: "Pearl Academy, Delhi",
            degree: "Bachelor's Degree – User Experience & Interaction Design",
            grade: "First Class",
            period: "2020 – 2024",
            project: "A speculative study on the 'no-interface' paradigm, proposing how interaction design may transform as technological singularity renders traditional interfaces obsolete."
        }
    ],

    // ==================
    // SKILLS
    // ==================
    skills: {
        "Product and Design Skills": [
            "Product Design & End-to-End UX Execution",
            "UX Strategy & Problem Framing",
            "User Research & Usability Testing",
            "Interaction Design & Information Architecture",
            "Design Systems",
            "Accessibility & Inclusive Design (WCAG fundamentals)",
            "Data-Informed Decision Making",
            "Activation & Retention Optimization",
            "Funnel & Cohort Analysis",
            "A/B Testing & Experimentation",
            "Cross-Functional Collaboration",
            "Rapid Iteration"
        ],
        "Technical Tools": [
            "Figma",
            "Mixpanel",
            "Git",
            "GitHub",
            "Jira",
            "Miro",
            "CleverTap",
            "Google Analytics",
            "Unity (UX collaboration context)",
            "Basic C#",
            "Microsoft Excel",
            "PowerPoint",
            "Word",
            "Front-end collaboration"
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
