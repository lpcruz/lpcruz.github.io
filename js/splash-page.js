// Get the Logo
var logo = document.querySelector('.logo-wrapper img');

// Make the logo bounce on hover
logo.addEventListener('mouseover', function() {
    if (logo.style.top === '30px') {
        return;
    } else {
        logo.className += ' animated bounce';
    }
});

logo.addEventListener('mouseout', function() {
    logo.classList.remove('animated', 'bounce');
});
