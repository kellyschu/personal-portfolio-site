const navbarLinks = document.querySelectorAll('#navbar ul li a');

navbarLinks.forEach(link => {
    link.addEventListener('click', function() {
        navbarLinks.forEach(link => link.classList.remove('active'));
        
        this.classList.add('active');
    });
})
