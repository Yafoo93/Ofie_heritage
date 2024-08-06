document.addEventListener('DOMContentLoaded', function() {
    const section = document.querySelector('section');
    if (window.location.pathname === '/index.html') {
        section.addEventListener('click', function() {
            alert('Welcome Ofie Heritage Tours!');
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
});
