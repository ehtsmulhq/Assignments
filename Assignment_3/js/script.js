// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navLinkItems = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinkItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for nav links
navLinkItems.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        const navHeight = document.querySelector('nav').offsetHeight;
        const targetPosition = targetSection.offsetTop - navHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Active section highlighting in navigation
const sections = document.querySelectorAll('section');

function highlightNav() {
    let current = '';
    const navHeight = document.querySelector('nav').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinkItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNav);

// Back to top button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll animations
const fadeElements = document.querySelectorAll('.fade-in');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate skill bars when visible
            if (entry.target.classList.contains('skill-category')) {
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    setTimeout(() => {
                        bar.style.width = width + '%';
                    }, 100);
                });
            }
        }
    });
}, observerOptions);

fadeElements.forEach(element => {
    observer.observe(element);
});

// Render skills
function renderSkills() {
    const skillsContainer = document.getElementById('skillsContainer');
    
    skillsData.forEach((category, index) => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category fade-in';
        categoryDiv.style.transitionDelay = `${index * 100}ms`;
        
        let skillsHTML = `<h3 class="skill-category-title">${category.title}</h3>`;
        
        category.skills.forEach(skill => {
            skillsHTML += `
                <div class="skill-item">
                    <div class="skill-info">
                        <span class="skill-name">${skill.name}</span>
                        <span class="skill-level">${skill.level}</span>
                    </div>
                    <div class="skill-bar">
                        <div class="skill-progress" data-width="${skill.width}"></div>
                    </div>
                </div>
            `;
        });
        
        categoryDiv.innerHTML = skillsHTML;
        skillsContainer.appendChild(categoryDiv);
        observer.observe(categoryDiv);
    });
}

// Render projects
function renderProjects() {
    const projectsContainer = document.getElementById('projectsContainer');
    
    projectsData.forEach((project, index) => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'quest-card fade-in';
        projectDiv.style.transitionDelay = `${index * 100}ms`;
        
        const techBadges = project.technologies.map(tech => 
            `<span class="tech-badge">${tech}</span>`
        ).join('');
        
        projectDiv.innerHTML = `
            <div class="quest-header" style="background: ${project.gradient}">
                <div class="quest-difficulty">${project.difficulty}</div>
                <h3 class="quest-title">${project.title}</h3>
            </div>
            <div class="quest-content">
                <p>${project.description}</p>
                <div class="tech-badges">
                    ${techBadges}
                </div>
                <div class="quest-actions">
                    <a href="${project.demoLink}" class="btn-small btn-demo" target="_blank">Play Demo</a>
                    <a href="${project.codeLink}" class="btn-small btn-code" target="_blank">View Code</a>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectDiv);
        observer.observe(projectDiv);
    });
}

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    if (name && email && subject && message) {
        alert('Quest accepted! Your message has been received. I\'ll join your party soon!');
        contactForm.reset();
    } else {
        alert('Please fill in all quest details!');
    }
});

// Initialize on page load
window.addEventListener('load', () => {
    highlightNav();
    renderSkills();
    renderProjects();
});
