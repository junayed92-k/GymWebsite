
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });
        
        // Close mobile menu when clicking on links
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
        });
        
        // Smooth scrolling for navigation links
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Contact form submission
        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name') || contactForm.querySelector('input[type="text"]').value;
            const email = formData.get('email') || contactForm.querySelector('input[type="email"]').value;
            
            // Show success message
            alert(`Thank you ${name}! We've received your message and will get back to you at ${email} within 24 hours.`);
            
            // Reset form
            contactForm.reset();
        });
        
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        const animatedElements = document.querySelectorAll('.animate-fadeInUp, .animate-slideInLeft, .animate-slideInRight');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            observer.observe(el);
        });
        
        // Pricing button interactions
        const pricingButtons = document.querySelectorAll('button[class*="Choose"]');
        pricingButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const planName = e.target.textContent.replace('Choose ', '');
                alert(`Great choice! You've selected the ${planName} plan. Our team will contact you shortly to complete your membership setup.`);
            });
        });
        
        // Join Now button
        const joinButton = document.querySelector('button:contains("JOIN NOW")') || document.querySelector('button');
        if (joinButton && joinButton.textContent.includes('JOIN NOW')) {
            joinButton.addEventListener('click', () => {
                document.querySelector('#pricing').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        }
   