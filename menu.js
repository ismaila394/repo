// Menu filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.menu-filter button');
    const menuCategories = document.querySelectorAll('.menu-category');
    const menuItems = document.querySelectorAll('.menu-item');

    // Add click event to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter menu items
            if (filter === 'all') {
                menuCategories.forEach(category => {
                    category.style.display = 'block';
                });
                menuItems.forEach(item => {
                    item.style.display = 'block';
                });
            } else {
                menuCategories.forEach(category => {
                    if (category.getAttribute('data-category') === filter) {
                        category.style.display = 'block';
                    } else {
                        category.style.display = 'none';
                    }
                });
            }
        });
    });

    // Search functionality
    const searchForm = document.querySelector('form[role="search"]');
    const searchInput = document.querySelector('input[type="search"]');
    
    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = searchInput.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                // Show all items if search is empty
                menuCategories.forEach(category => {
                    category.style.display = 'block';
                });
                menuItems.forEach(item => {
                    item.style.display = 'block';
                });
                return;
            }
            
            let hasResults = false;
            
            menuItems.forEach(item => {
                const title = item.querySelector('.menu-title').textContent.toLowerCase();
                const description = item.querySelector('.menu-description').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    item.style.display = 'block';
                    item.closest('.menu-category').style.display = 'block';
                    hasResults = true;
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Hide empty categories
            menuCategories.forEach(category => {
                const visibleItems = category.querySelectorAll('.menu-item[style*="block"], .menu-item:not([style])');
                if (visibleItems.length === 0) {
                    category.style.display = 'none';
                }
            });
            
            if (!hasResults) {
                // Show no results message
                console.log('Aucun résultat trouvé pour: ' + searchTerm);
            }
        });
        
        // Real-time search
        searchInput.addEventListener('input', function() {
            if (this.value === '') {
                // Reset to show all items
                menuCategories.forEach(category => {
                    category.style.display = 'block';
                });
                menuItems.forEach(item => {
                    item.style.display = 'block';
                });
            }
        });
    }

    // Add smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe menu items for animation
    menuItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
});

// Add to cart functionality (placeholder)
function addToCart(itemName, price) {
    // This would integrate with your cart system
    alert(`${itemName} ajouté au panier pour ${price}`);
}

// Phone number formatting
function formatPhoneNumber(phone) {
    return phone.replace(/(\d{3})(\d{2})(\d{2})(\d{2})(\d{2})/, '+$1 $2-$3-$4-$5');
}