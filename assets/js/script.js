document.addEventListener('DOMContentLoaded', function() {
    // Handle welcome alert on homepage
    const section = document.querySelector('section');
    if (window.location.pathname === '/index.html') {
        section.addEventListener('click', function() {
            alert('Welcome to the Luxurious Website!');
        });
    }

    // Booking page logic
    const travelTypeSelect = document.getElementById('travel-type');
    const groupTypeSection = document.getElementById('group-type-section');

    if (travelTypeSelect && groupTypeSection) {
        travelTypeSelect.addEventListener('change', function() {
            if (this.value === 'group') {
                groupTypeSection.style.display = 'block';
            } else {
                groupTypeSection.style.display = 'none';
            }
        });
    }

    // Handle login/logout state
    const signinLink = document.getElementById('signin-link');
    const signupLink = document.getElementById('signup-link');
    const logoutLink = document.getElementById('logout-link');

    function checkAuth() {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (isLoggedIn) {
            signinLink.style.display = 'none';
            signupLink.style.display = 'none';
            logoutLink.style.display = 'block';
        } else {
            signinLink.style.display = 'block';
            signupLink.style.display = 'block';
            logoutLink.style.display = 'none';
        }
    }

    logoutLink.addEventListener('click', function(event) {
        event.preventDefault();
        localStorage.setItem('isLoggedIn', 'false');
        checkAuth();
    });

    checkAuth();
});
