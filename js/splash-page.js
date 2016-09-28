// LogoContainer
const LogoContainer = React.createElement('div', { className: 'logo animated bounceInDown' });

// HeaderWrapper
const HeaderWrapper = React.createElement('div', { className: 'header-wrapper' });

// LogoWrapper
const LogoWrapper = React.createElement('div', { className: 'logo-wrapper' });

// Logo Asset
const Logo = React.createElement('img', { src: './assets/logo.png'});

// NameWrapper
const NameWrapper = React.createElement('div', { className: 'name-wrapper'});

ReactDOM.render(
    LogoContainer,
    document.getElementById('site')
);

ReactDOM.render(
    HeaderWrapper,
    document.querySelector('.logo.animated.bounceInDown')
);

ReactDOM.render(
    LogoWrapper,
    document.querySelector('.header-wrapper')
);

ReactDOM.render(
    Logo,
    document.querySelector('.logo-wrapper')
);


// Make the logo bounce on hover

var logo = document.querySelector('img');

logo.addEventListener('mouseover', function() {
    if (logo.style.top === '30px') {
        return;
    } else {
        logo.className += ' animated bounce';
    }
    console.log ('Logo should be b-b-b-b-bouncing');
});

logo.addEventListener('mouseout', function() {
    logo.classList.remove('animated', 'bounce');
});
