// =====================================================
// 📁 PROJECTS DATA
// =====================================================
// This file contains ALL your project data
// All fields are OPTIONAL - missing fields won't break your website!
// 
// USAGE:
// 1. Copy the template below
// 2. Fill in what you have (leave out what you don't)
// 3. Save and refresh - it just works!
//
// =====================================================

/* =====================================================
   📝 TEMPLATE - Copy this for each new project
   =====================================================

{
    // REQUIRED (only this one!)
    id: "unique-project-id",              // lowercase, no spaces, use hyphens
    
    // RECOMMENDED (for best display)
    title: "Project Title",               // Shows on cards and detail page
    description: "One-line summary",      // Shows on project cards
    thumbnail: "images/projects/thumb.jpg", // Card image
    
    // OPTIONAL - Basic Info
    tags: ["UX DESIGN", "FEATURED"],      // Category tags (uppercase looks best)
    year: "2024",                         // Year completed
    role: "Lead Designer",                // Your role
    collaborators: "Team Name",           // Who you worked with
    
    // OPTIONAL - Detail Page
    details: "Full project description...", // Long description for detail page
    images: [                             // Additional images for detail page
        "images/projects/detail1.jpg",
        "images/projects/detail2.jpg"
    ],
    
    // OPTIONAL - Links
    liveLink: "https://project-url.com",  // Live project URL
    caseStudyLink: "https://case-study-url.com", // External case study
    githubLink: "https://github.com/user/repo"   // GitHub repo
},

   ===================================================== */

const projectsData = [

    // ==================
    // YOUR PROJECTS
    // ==================

    {
        id: "The-Paradox-of-Choice",
        title: "The Paradox of Choice",
        description: "Spotify",
        tags: ["Monetization", "Personalization", "Retention"],
        thumbnail: "images/projects/spotify/spotify_Thumbnail.png",
        year: "2025",
        role: "R&R / Product Strategy",
        //collaborators: "Terra Design Team, Engineering",
        details: " Spotify must balance personalization, monetization, and regional UX—avoiding over-personalization, minimizing churn from ads or paywalls, and adapting to regional ARPU differences—to sustainably grow engagement, retention, and revenue.",
        images: [
            "images/projects/spotify/spotify.png"
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

    /* =====================================================
       💡 MINIMAL EXAMPLE - Only required field
       ===================================================== 
    
    {
        id: "simple-project"
        // That's it! Website won't break.
        // It'll show with defaults for missing fields
    },
    
       ===================================================== */

    /* =====================================================
       💡 EXAMPLE WITH SOME FIELDS - Mix and match!
       ===================================================== 
    
    {
        id: "another-project",
        title: "Cool Project",
        thumbnail: "images/projects/cool.jpg",
        tags: ["WEB DESIGN"]
        // No description, year, role, etc. - perfectly fine!
    },
    
       ===================================================== */

];

// Don't change below this line
// ==========================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projectsData;
}
