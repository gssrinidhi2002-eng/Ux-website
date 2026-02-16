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

  // Clear loading text
  projectsGrid.innerHTML = '';

  // Use projectsData if available, fallback to websiteData.projects
  const projects = typeof projectsData !== 'undefined' ? projectsData : (websiteData.projects || []);

  projects.forEach(project => {
    const projectCard = createProjectCard(project);
    projectsGrid.appendChild(projectCard);
  });
}

function createProjectCard(project) {
  // Defensive: ensure project has required ID
  if (!project || !project.id) {
    console.warn('Project missing required id field:', project);
    return document.createElement('div'); // Return empty div
  }

  const card = document.createElement('a');
  card.href = `project.html?id=${project.id}`;
  card.className = 'project-card';

  // Defensive: use defaults for missing fields
  const title = project.title || 'Untitled Project';
  const description = project.description || '';
  const thumbnail = project.thumbnail || 'https://via.placeholder.com/800x600/f5f5f5/666666?text=' + encodeURIComponent(title);
  const tags = project.tags || [];

  card.innerHTML = `
    <img src="${thumbnail}" alt="${title}" class="project-thumbnail" 
         onerror="this.src='https://via.placeholder.com/800x600/f5f5f5/666666?text=${encodeURIComponent(title)}'">
    <div class="project-info">
      <h3 class="project-title">${title}</h3>
      ${description ? `<p class="project-description">${description}</p>` : ''}
      ${tags.length > 0 ? `
        <div class="project-tags">
          ${tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      ` : ''}
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
    ${data.resume ? `<a href="${data.resume}" download class="contact-link">Resume</a>` : ''}
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
      ${exp.achievements ? `<ul class="achievements-list">
        ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
      </ul>` : ''}
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

  // Apply dark theme for specific projects
  const darkThemeProjects = ['cosmos-speculative', 'Pukar-game', 'The-dilemma'];
  if (darkThemeProjects.includes(projectId)) {
    document.body.classList.add('dark-theme-cosmos');
  }

  // Use projectsData if available, fallback to websiteData.projects
  const projects = typeof projectsData !== 'undefined' ? projectsData : (websiteData.projects || []);

  // Find the project
  const project = projects.find(p => p && p.id === projectId);

  if (!project) {
    document.getElementById('project-container').innerHTML = `
      <p class="error">Project not found. <a href="index.html">Return to homepage</a></p>
    `;
    return;
  }

  // Defensive: use defaults for missing fields
  const title = project.title || 'Untitled Project';
  const year = project.year || '—';
  const role = project.role || '—';
  const collaborators = project.collaborators || '—';
  const details = project.details || '';
  const tags = project.tags || [];
  const images = project.images || [];

  // Update page title
  document.title = `${title} - ${websiteData.personal.name}`;

  // Update project details
  document.getElementById('project-title').textContent = title;
  document.getElementById('project-year').textContent = year;
  document.getElementById('project-role').textContent = role;
  document.getElementById('project-collaborators').textContent = collaborators;

  // Only show description if it exists
  const descElement = document.getElementById('project-description');
  if (details) {
    descElement.textContent = details;
  } else {
    descElement.style.display = 'none';
  }

  // Hide tags on project detail page (tags only show on home page cards)
  const tagsContainer = document.getElementById('project-tags');
  if (tagsContainer) {
    tagsContainer.style.display = 'none';
  }

  // Add images if they exist
  const imagesContainer = document.getElementById('project-images');
  if (images.length > 0) {
    imagesContainer.innerHTML = images.map(img => `
      <img src="${img}" 
           alt="${title}" 
           class="project-image"
           onerror="this.style.display='none'">
    `).join('');
  } else {
    imagesContainer.style.display = 'none';
  }
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
