const Splash =
    React.createElement('div', { className: 'logo animated bounceInDown' },
        React.createElement('div', { className: 'header-wrapper'},
        React.createElement('div', { className: 'logo-wrapper'},
            React.createElement('img', { src: './assets/logo.png'})
        ),
            React.createElement('div', { className: 'name-wrapper'},
                React.createElement('h1', { className: 'heading'}, 'Hi there. I\'m Laurence.'),
                React.createElement('h3', { className: 'tagline'}, 'I\'m a developer with a penchant for creativty and education.'),
                React.createElement('div', { className: 'enter-wrapper'},
                    React.createElement('a', { href: 'http://www.laurencecruz.com'},
                        React.createElement('button', {className: 'enter-button'}, 'Enter')
                    )
                )
            )
        )
);

ReactDOM.render(
    Splash,
    document.getElementById('site')
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
