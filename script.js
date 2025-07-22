 // Filter functionality
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                
                // Update active button
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Filter gallery items
                document.querySelectorAll('.gallery-item').forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                        item.style.animation = 'slideInUp 0.6s ease-out forwards';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Scroll to top functionality
        window.addEventListener('scroll', () => {
            const scrollTop = document.querySelector('.scroll-top');
            if (window.pageYOffset > 300) {
                scrollTop.classList.add('visible');
            } else {
                scrollTop.classList.remove('visible');
            }
        });

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'linear-gradient(135deg, rgba(86, 171, 47, 0.95) 0%, rgba(168, 230, 207, 0.95) 100%)';
                navbar.style.backdropFilter = 'blur(15px)';
            } else {
                navbar.style.background = 'linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)';
                navbar.style.backdropFilter = 'blur(10px)';
            }
        });

        // Image loading optimization
        document.querySelectorAll('.gallery-item img').forEach(img => {
            img.addEventListener('load', () => {
                img.style.opacity = '1';
            });
        });
  