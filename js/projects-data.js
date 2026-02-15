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
        id: "cosmos-speculative",
        title: "COSMOS",
        description: "Your Gateway to Galactic Living",
        tags: ["Immersive", "Speculative Design", "Future of Living"],
        thumbnail: "images/projects/cosmos/cosmos_thumbnail.png",
        year: "2024",
        role: "3D Modeling & Rendering · UX/UI Design · Branding",
        //collaborators: "Game Development Team",
        details: "Your gateway to immerse in a space megastructure look around and experience the humanity’s potential in the coming hundreds of years. Live the crazy ideas of science books and sci-fi movies just the way you want there is no stopping from now on with cosmos where collective creativity is a dream.",
        images: [
            "images/projects/cosmos/COSMOS.png",
        ]
    },

    {
        id: "Wander-app",
        title: "Wander",
        description: "Designing for slow travel, mindful discovery, and personal storytelling",
        tags: ["DESIGN SYSTEMS", "App design", "Travel"],
        thumbnail: "images/projects/Wander/wander thumbnail.png",
        year: "2022",
        role: "UX UI Designer",
        //collaborators: "Société Générale GSC Team",
        details: "Wander explores how digital travel experiences can move beyond efficiency and recommendations to support reflection, curiosity, and personal narrative. The project combines visual storytelling, interface design, and experiential flow to create a travel companion that encourages users to slow down, notice their surroundings, and engage meaningfully with places. Through mood-driven visuals, intuitive navigation, and content pacing, Wander prioritizes feeling over optimization. The design reframes travel as a personal journey shaped by memory, atmosphere, and discovery—challenging conventional travel apps that prioritize speed, volume, and utility over experience.",
        images: [
            "images/projects/Wander/Wander.png"
        ]
    },

    {
        id: "yono-ui",
        title: "YONO Redesign",
        description: "Reimagining digital banking for clarity, trust, and everyday usability",
        tags: ["UX Redesign", "Financial Systems", "Accessibility"],
        thumbnail: "images/projects/YONO/yono Thumbnail.png",
        year: "2021",
        role: "UX UI",
        //collaborators: "Remapped Team",
        details: "I worked on analyzing usability gaps in the existing experience, restructuring key flows, and designing interface screens to improve clarity and accessibility. My contributions included wireframing, visual design, and supporting the development of a cohesive design system across core user journeys",
        images: [
            "images/projects/YONO/Yono.png"
        ]
    },

    {
        id: "The-dilemma",
        title: "The Dilemma",
        description: "Visual Language of Fear",
        tags: ["DESIGN SYSTEMS", "GAME DESIGN", "TERRA"],
        thumbnail: "images/projects/Dilemma/Dilemma_thumbnail.png",
        year: "2024",
        role: "Visual Researcher & Director",
        //collaborators: "8 Game Teams at Terra",
        details: "The idea is to merge my story as an artist in design school and my newfound knowledge about mise en scene. The dilemma I usually face too much to exaggeration. To understand the psychology of the artist and what one can be inspired by and how those inspirations might necessarily affect the artist’s mental health. How is it so normal yet not so normal and how it is changes with time? More passage of time, the crazier the situation gets. Is it a dilemma for everyone or only a few go through?",
        images: [
            "images/projects/Dilemma/Dilemma.png"
        ]
    },

    {
        id: "social-enterprise",
        title: "Krishi",
        description: "A complex, “wicked” systems problem where agriculture, education, ecology, and social values intersect—resisting linear or purely technical solutions.",
        tags: ["Systems Thinking", "Social Impact", "Experiential Learning"],
        thumbnail: "images/projects/Krishi/krishi_thumbnail.png",
        year: "2021",
        role: "Systems Design & Research Lead",
        //collaborators: "Bata India Design & Production Teams",
        details: "Agriculture is a complex, “wicked” systems problem where ecological processes, education, community knowledge, and social values are deeply interconnected. Traditional, top-down or purely technical approaches fail to address these interdependencies, leaving critical gaps in how sustainability, equity, and food systems are understood and taught. Addressing this challenge requires participatory, experiential learning models that acknowledge multiple perspectives and work with nature rather than against it.",
        images: [
            "images/projects/Krishi/krishi.png"
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
