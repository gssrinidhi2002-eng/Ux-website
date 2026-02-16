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

        // Short bio that appears in the header
        headerBio: "Product designer working across UX and product thinking. I design digital products by focusing on how people actually use them—what slows them down, what confuses them, and what keeps them coming back. Currently working on games and internal tools, owning UX from early exploration through launch.",

        // Longer bio for the About page
        fullBio: "I design and ship AI-native and enterprise products, working end-to-end from discovery to launch. My work spans AI interaction design, internal tools, and consumer experiences, with a strong focus on retention, usability, and UX-led product decisions.",

        // Contact & links
        email: "gssrinidhi2002@gmail.com",
        phone: "+91 94422 33012",
        portfolio: "https://www.srinidhigs.com/#works",
        linkedin: "https://www.linkedin.com/in/srinidhi-gs-47a348200/",
        behance: "https://www.behance.net/srinidhig",

        // Resume PDF (place file in /public or /assets)
        resume: "images/SRINIDHIGS_RESUME-PD.pdf",

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
    // Projects are now in a separate file: js/projects-data.js
    // This keeps project data separate and makes it easier to manage
    // All project fields are optional except 'id'

    projects: [] // Empty - using projects-data.js instead
};

// Don't change anything below this line
// ==========================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = websiteData;
}
