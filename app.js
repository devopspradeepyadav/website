(function() {
    'use strict';
    
    // Data from the provided JSON
    const developerData = {
        "developer": {
            "name": "Pradeep Yadav",
            "title": "DevOps Engineer & Full-Stack Developer",
            "github": "https://github.com/devopspradeepyadav",
            "bio": "Passionate DevOps engineer with expertise in containerization, cloud deployment, and full-stack development. Experienced in Docker, Kubernetes, Linux systems, and modern web technologies."
        },
        "projects": [
            {
                "id": 1,
                "title": "Container Orchestration Platform",
                "description": "Advanced Kubernetes deployment with automated CI/CD pipeline using Docker and GitLab",
                "category": "DevOps",
                "technologies": ["Kubernetes", "Docker", "GitLab CI", "Linux"],
                "github_repo": "https://github.com/devopspradeepyadav/k8s-platform",
                "image": "img/project1.jpg"
            },
            {
                "id": 2,
                "title": "E-commerce Web Application",
                "description": "Full-stack e-commerce platform with containerized microservices architecture",
                "category": "Web Development",
                "technologies": ["React", "Node.js", "Docker", "MongoDB"],
                "github_repo": "https://github.com/devopspradeepyadav/ecommerce-app",
                "image": "img/project2.jpg"
            },
            {
                "id": 3,
                "title": "Cloud Infrastructure Automation",
                "description": "Terraform-based infrastructure as code for Google Cloud Platform deployments",
                "category": "DevOps",
                "technologies": ["Terraform", "GCP", "Ansible", "Python"],
                "github_repo": "https://github.com/devopspradeepyadav/cloud-automation",
                "image": "img/project3.jpg"
            },
            {
                "id": 4,
                "title": "Monitoring & Logging System",
                "description": "Comprehensive monitoring solution with Prometheus, Grafana, and ELK stack",
                "category": "DevOps",
                "technologies": ["Prometheus", "Grafana", "ELK", "Docker"],
                "github_repo": "https://github.com/devopspradeepyadav/monitoring-stack",
                "image": "img/project4.jpg"
            },
            {
                "id": 5,
                "title": "WordPress Deployment Pipeline",
                "description": "Automated WordPress deployment with Docker containerization and SSL",
                "category": "Web Development",
                "technologies": ["WordPress", "Docker", "Nginx", "SSL"],
                "github_repo": "https://github.com/devopspradeepyadav/wordpress-deploy",
                "image": "img/project5.jpg"
            },
            {
                "id": 6,
                "title": "Linux System Administration Tools",
                "description": "Collection of shell scripts and tools for Linux system administration",
                "category": "Backend",
                "technologies": ["Bash", "Linux", "Python", "Cron"],
                "github_repo": "https://github.com/devopspradeepyadav/linux-tools",
                "image": "img/project6.jpg"
            }
        ],
        "skills": [
            {"name": "🐋 Docker", "level": "Advanced"},
            {"name": "☸️ Kubernetes", "level": "Advanced"},
            {"name": "🐧 Linux", "level": "Expert"},
            {"name": "⚛️ React", "level": "Intermediate"},
            {"name": "🟢 Node.js", "level": "Intermediate"},
            {"name": "🐍 Python", "level": "Intermediate"},
            {"name": "☁️ GCP", "level": "Advanced"},
            {"name": "🏗️ Terraform", "level": "Advanced"},
            {"name": "🤖 Jenkins", "level": "Advanced"},
            {"name": "🦊 GitLab CI/CD", "level": "Advanced"},
            {"name": "⛵ Helm", "level": "Intermediate"},
            {"name": "⛵ Helm", "level": "Intermediate"},
            {"name": "📜 Ansible", "level": "Intermediate"},
            {"name": "🍃 MongoDB", "level": "Intermediate"},
            {"name": "🐬 MySQL", "level": "Intermediate"},
            {"name": "🕵🏼‍♂️ Prometheus", "level": "Intermediate"},
            {"name": "📊 Grafana", "level": "Intermediate"},
            {"name": "🪵 ELK Stack", "level": "Intermediate"},
            {"name": "💻 Bash Scripting", "level": "Advanced"},
            {"name": "🚀 ArgoCD", "level": "Intermediate"},     
            {"name": "🌉 Istio", "level": "Intermediate"},      
            {"name": "☁️ AWS", "level": "Advanced"},           
            {"name": "🔷 Azure", "level": "Intermediate"},     
            {"name": "🐳 Podman", "level": "Intermediate"},   
            {"name": "📦 Nginx", "level": "Advanced"},         
            {"name": "🛰️ OpenShift", "level": "Intermediate"}, 
            {"name": "🔐 Vault", "level": "Intermediate"},     
            {"name": "📡 Istio Gateway", "level": "Intermediate"}, 
            {"name": "⚙️ CircleCI", "level": "Intermediate"},
            {"name": "🔵 Go (Golang)", "level": "Intermediate"},
            {"name": "🛡️ DevSecOps", "level": "Intermediate"},
            {"name": "⚡ GitHub Actions", "level": "Intermediate"}
        ]
    };

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeApp);
    } else {
        initializeApp();
    }

    function initializeApp() {
        console.log('Initializing portfolio app...');
        
        // Initialize all components
        setupLoadingScreen();
        renderProjects();
        renderSkills();
        setupNavigation();
        setupScrollAnimations();
        setupHeaderScroll();
        setupProjectFiltering();
        setupSmoothScrolling();
        setupInteractiveEffects();
        setupGitHubLinks();
        
        console.log('Portfolio app initialized successfully');
    }

    // Loading Screen
    function setupLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
            }, 2000);
        }
    }

    // Setup GitHub links explicitly
    function setupGitHubLinks() {
        // Handle all GitHub links on the page
        document.addEventListener('click', function(e) {
            const target = e.target.closest('a');
            
            if (target) {
                const href = target.getAttribute('href');
                
                // Handle GitHub links
                if (href && href.includes('github.com')) {
                    e.preventDefault();
                    window.open(href, '_blank', 'noopener,noreferrer');
                    return;
                }
                
                // Handle View My Work button
                if (target.textContent.includes('View My Work')) {
                    e.preventDefault();
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                        projectsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                    return;
                }
            }
        });
        
        console.log('GitHub links setup completed');
    }

    // Render projects dynamically
    function renderProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        if (!projectsGrid) {
            console.error('Projects grid not found');
            return;
        }
        
        // Clear existing content
        projectsGrid.innerHTML = '';
        
        developerData.projects.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsGrid.appendChild(projectCard);
        });
        
        console.log(`Rendered ${developerData.projects.length} project cards`);
    }

    // Create individual project card
    function createProjectCard(project) {
        const card = document.createElement('div');
        card.className = 'project-card fade-in';
        card.setAttribute('data-category', project.category);
        card.setAttribute('data-title', project.title.toLowerCase());
        card.setAttribute('data-tech', project.technologies.join(' ').toLowerCase());
        
        const techTags = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        card.innerHTML = `
            <div class="project-card__header">
                <h3 class="project-card__title">${project.title}</h3>
                <span class="project-card__category">${project.category}</span>
            </div>
            <p class="project-card__description">${project.description}</p>
            <div class="project-card__tech">
                ${techTags}
            </div>
            <div class="project-card__footer">
                <a href="${project.github_repo}" target="_blank" rel="noopener noreferrer" class="project-card__link">
                    <span>View on GitHub</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M7 17l9.2-9.2M17 17V7H7"/>
                    </svg>
                </a>
            </div>
        `;

        return card;
    }

    // Render skills dynamically
    function renderSkills() {
        const skillsGrid = document.getElementById('skills-grid');
        if (!skillsGrid) {
            console.error('Skills grid not found');
            return;
        }
        
        // Clear existing content
        skillsGrid.innerHTML = '';
        
        developerData.skills.forEach(skill => {
            const skillCard = createSkillCard(skill);
            skillsGrid.appendChild(skillCard);
        });
        
        // Animate skill bars after rendering
        setTimeout(() => {
            animateSkillBars();
        }, 500);
        
        console.log(`Rendered ${developerData.skills.length} skill cards`);
    }

    // Create individual skill card
    function createSkillCard(skill) {
        const card = document.createElement('div');
        card.className = 'skill-card fade-in';
        
        const levelPercentage = getSkillPercentage(skill.level);
        
        card.innerHTML = `
            <h4 class="skill-card__name">${skill.name}</h4>
            <p class="skill-card__level">${skill.level}</p>
            <div class="skill-card__bar">
                <div class="skill-card__progress" data-percentage="${levelPercentage}"></div>
            </div>
        `;

        return card;
    }

    // Convert skill level to percentage
    function getSkillPercentage(level) {
        const levels = {
            'Beginner': 25,
            'Intermediate': 50,
            'Advanced': 75,
            'Expert': 95
        };
        return levels[level] || 50;
    }

    // Animate skill bars when they come into view
    function animateSkillBars() {
        const skillCards = document.querySelectorAll('.skill-card');
        
        skillCards.forEach(card => {
            const progressBar = card.querySelector('.skill-card__progress');
            if (progressBar) {
                const percentage = progressBar.getAttribute('data-percentage');
                progressBar.style.width = percentage + '%';
            }
        });
    }

    // Navigation functionality
    function setupNavigation() {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');

        // Mobile menu toggle
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', (e) => {
                e.preventDefault();
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
        }

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu) {
                    navMenu.classList.remove('active');
                }
                if (navToggle) {
                    navToggle.classList.remove('active');
                }
            });
        });

        // Update active nav link on scroll
        window.addEventListener('scroll', throttle(updateActiveNavLink, 100));
    }

    // Update active navigation link based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    // Header scroll effect
    function setupHeaderScroll() {
        const header = document.getElementById('header');
        
        if (header) {
            window.addEventListener('scroll', throttle(() => {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }, 100));
        }
    }

    // Scroll animations
    function setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all elements with fade-in classes
        const fadeElements = document.querySelectorAll('.fade-in, .fade-in-delayed');
        fadeElements.forEach(el => {
            observer.observe(el);
        });
    }

    // Project filtering and search - FIXED VERSION
    function setupProjectFiltering() {
        const searchInput = document.getElementById('project-search');
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        let currentFilter = 'all';
        let currentSearch = '';

        // Search functionality - FIXED
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                currentSearch = e.target.value.toLowerCase();
                filterProjects(currentFilter, currentSearch);
            });
        }

        // Filter button functionality
        filterButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                currentFilter = button.getAttribute('data-filter');
                filterProjects(currentFilter, currentSearch);
            });
        });
    }

    // Filter projects based on category and search term - FIXED VERSION
    function filterProjects(category, searchTerm) {
        const projectCards = document.querySelectorAll('.project-card');
        let visibleCount = 0;
        
        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const cardTitle = card.getAttribute('data-title') || '';
            const cardTech = card.getAttribute('data-tech') || '';
            
            const matchesCategory = category === 'all' || cardCategory === category;
            const matchesSearch = !searchTerm || 
                cardTitle.includes(searchTerm) || 
                cardTech.includes(searchTerm);
            
            if (matchesCategory && matchesSearch) {
                card.style.display = 'block';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                visibleCount++;
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                
                setTimeout(() => {
                    if (card.style.opacity === '0') {
                        card.style.display = 'none';
                    }
                }, 300);
            }
        });

        // Show message if no projects found
        const projectsGrid = document.getElementById('projects-grid');
        let noResultsMsg = document.querySelector('.no-results-message');
        
        if (visibleCount === 0 && searchTerm) {
            if (!noResultsMsg) {
                noResultsMsg = document.createElement('div');
                noResultsMsg.className = 'no-results-message';
                noResultsMsg.style.cssText = `
                    grid-column: 1 / -1;
                    text-align: center;
                    padding: 2rem;
                    color: var(--color-text-secondary);
                    font-size: var(--font-size-lg);
                `;
                projectsGrid.appendChild(noResultsMsg);
            }
            noResultsMsg.textContent = `No projects found matching "${searchTerm}"`;
            noResultsMsg.style.display = 'block';
        } else if (noResultsMsg) {
            noResultsMsg.style.display = 'none';
        }
    }

    // Smooth scrolling for navigation links
    function setupSmoothScrolling() {
        document.addEventListener('click', (e) => {
            // Handle internal navigation links
            if (e.target.matches('a[href^="#"]') || e.target.closest('a[href^="#"]')) {
                const link = e.target.matches('a[href^="#"]') ? e.target : e.target.closest('a[href^="#"]');
                const targetId = link.getAttribute('href');
                
                // Don't prevent default for external links or empty anchors
                if (targetId && targetId !== '#' && !link.getAttribute('href').includes('github.com')) {
                    e.preventDefault();
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        const header = document.getElementById('header');
                        const headerHeight = header ? header.offsetHeight : 80;
                        const targetPosition = targetElement.offsetTop - headerHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        });
    }

    // Interactive effects
    function setupInteractiveEffects() {
        // Add hover effects to project cards
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest('.project-card')) {
                const card = e.target.closest('.project-card');
                card.style.transform = 'translateY(-8px)';
                card.style.transition = 'transform 0.3s ease';
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.closest('.project-card')) {
                const card = e.target.closest('.project-card');
                card.style.transform = 'translateY(0)';
            }
        });

        // Add ripple effect to buttons
        document.addEventListener('click', (e) => {
            if (e.target.matches('.btn') || e.target.closest('.btn')) {
                const button = e.target.matches('.btn') ? e.target : e.target.closest('.btn');
                if (!button.getAttribute('href')?.includes('github.com')) {
                    createRippleEffect(e, button);
                }
            }
        });
    }

    function createRippleEffect(e, button) {
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            background-color: rgba(255,255,255,0.3);
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.remove();
            }
        }, 600);
    }

    // Utility function for throttling events
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Only activate if not typing in input field
        if (!e.target.matches('input, textarea, select')) {
            switch(e.key.toLowerCase()) {
                case 'g':
                    window.open('https://github.com/devopspradeepyadav', '_blank');
                    break;
                case 'p':
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                    break;
                case 'c':
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    break;
            }
        }
    });

    // Error handling
    window.addEventListener('error', (e) => {
        console.error('Portfolio app error:', e.error);
    });

    console.log('Portfolio website script loaded');
    console.log('Keyboard shortcuts: G (GitHub), P (Projects), C (Contact)');
})();