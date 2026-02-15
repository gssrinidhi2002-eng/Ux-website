// =====================================================
// WEBSITE FUNCTIONALITY
// =====================================================
// This file handles loading data and making the website work
// You don't need to edit this file - all your content is in data.js

document.addEventListener('DOMContentLoaded', function () {

    // Check which page we're on and initialize accordingly
    const currentPage = window.location.pathname;

    if (currentPage.includes('about.html')) {
        initAboutPage();
    } else if (currentPage.includes('project.html')) {
        initProjectPage();
    } else {
        initHomePage();
    }
});

// ==================
// HOME PAGE
// ==================
function initHomePage() {
    // Update header
    updateHeader();

    // Generate project grid
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    websiteData.projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('a');
    card.href = `project.html?id=${project.id}`;
    card.className = 'project-card';

    card.innerHTML = `
    <img src="${project.thumbnail}" alt="${project.title}" class="project-thumbnail" 
         onerror="this.src='https://via.placeholder.com/800x600/f5f5f5/666666?text=${encodeURIComponent(project.title)}'">
    <div class="project-info">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>
  `;

    return card;
}

// ==================
// ABOUT PAGE
// ==================
function initAboutPage() {
    // Update header
    updateHeader();

    const data = websiteData.personal;

    // Update profile section
    document.getElementById('profile-image').src = data.profileImage;
    document.getElementById('profile-image').onerror = function () {
        this.src = 'https://via.placeholder.com/200x200/f5f5f5/666666?text=Profile';
    };
    document.getElementById('about-name').textContent = data.name;
    document.getElementById('bio-text').textContent = data.fullBio;

    // Update contact links
    const contactLinks = document.getElementById('contact-links');
    contactLinks.innerHTML = `
    <a href="mailto:${data.email}" class="contact-link">Email</a>
    ${data.linkedin ? `<a href="${data.linkedin}" target="_blank" class="contact-link">LinkedIn</a>` : ''}
    ${data.behance ? `<a href="${data.behance}" target="_blank" class="contact-link">Behance</a>` : ''}
    ${data.phone ? `<a href="tel:${data.phone}" class="contact-link">Phone</a>` : ''}
  `;

    // Generate experience section
    const experienceContainer = document.getElementById('experience-container');
    websiteData.experience.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.className = 'experience-item';

        expItem.innerHTML = `
      <div class="item-header">
        <div class="item-title">${exp.company}</div>
        <div class="item-meta">${exp.role} • ${exp.period}</div>
      </div>
      <ul class="achievements-list">
        ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
      </ul>
    `;

        experienceContainer.appendChild(expItem);
    });

    // Generate education section
    const educationContainer = document.getElementById('education-container');
    websiteData.education.forEach(edu => {
        const eduItem = document.createElement('div');
        eduItem.className = 'education-item';

        eduItem.innerHTML = `
      <div class="item-header">
        <div class="item-title">${edu.institution}</div>
        <div class="item-meta">${edu.degree} ${edu.grade ? `(${edu.grade})` : ''} • ${edu.period}</div>
      </div>
      ${edu.project ? `<p style="font-size: 14px; color: #666; margin-top: 8px;"><strong>Project:</strong> ${edu.project}</p>` : ''}
    `;

        educationContainer.appendChild(eduItem);
    });

    // Generate skills section
    const skillsContainer = document.getElementById('skills-container');
    Object.keys(websiteData.skills).forEach(category => {
        const skillsCategory = document.createElement('div');
        skillsCategory.className = 'skills-category';

        skillsCategory.innerHTML = `
      <h4>${category}</h4>
      <ul class="skills-list">
        ${websiteData.skills[category].map(skill => `<li>${skill}</li>`).join('')}
      </ul>
    `;

        skillsContainer.appendChild(skillsCategory);
    });
}

// ==================
// PROJECT DETAIL PAGE
// ==================
function initProjectPage() {
    // Update header
    updateHeader();

    // Get project ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    // Find the project
    const project = websiteData.projects.find(p => p.id === projectId);

    if (!project) {
        document.getElementById('project-container').innerHTML = '<p class="error">Project not found</p>';
        return;
    }

    // Update page title
    document.title = `${project.title} - ${websiteData.personal.name}`;

    // Populate project details
    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-year').textContent = project.year;
    document.getElementById('project-role').textContent = project.role;
    document.getElementById('project-collaborators').textContent = project.collaborators;
    document.getElementById('project-description').textContent = project.details;

    // Add tags
    const tagsContainer = document.getElementById('project-tags');
    project.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'tag';
        tagSpan.textContent = tag;
        tagsContainer.appendChild(tagSpan);
    });

    // Add images
    const imagesContainer = document.getElementById('project-images');
    project.images.forEach((imagePath, index) => {
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = `${project.title} - Image ${index + 1}`;
        img.className = 'project-image';
        img.onerror = function () {
            this.src = `https://via.placeholder.com/1000x750/f5f5f5/666666?text=${encodeURIComponent(project.title + ' - Image ' + (index + 1))}`;
        };
        imagesContainer.appendChild(img);
    });
}

// ==================
// SHARED FUNCTIONS
// ==================
function updateHeader() {
    const data = websiteData.personal;

    // Update site title
    const siteTitle = document.getElementById('site-title');
    if (siteTitle) {
        siteTitle.textContent = data.name;
    }

    // Update header bio
    const headerBio = document.getElementById('header-bio');
    if (headerBio) {
        headerBio.textContent = data.headerBio;
    }

    // Update page title
    document.title = `${data.name} - ${data.title}`;
}
