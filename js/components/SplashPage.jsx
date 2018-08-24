/**
 * The module containing the components rendered on the Splash Page
 *
 */

const Splash =
    React.createElement('div', { className: 'Container' },
        React.createElement('div', { className: 'headerWrapper'},
        React.createElement('div', { className: 'logoWrapper animated bounceInDown'},
            React.createElement('img', { src: './assets/logo.png'})
        ),
            React.createElement('div', { className: 'nameWrapper'},
                React.createElement('h1', { className: 'Heading'}, 'Hi there. I\'m Laurence.'),
                React.createElement('h3', { className: 'Tagline'}, 'I\'m a software engineer & visual creative living in NYC.'),
                React.createElement('div', { className: 'enterWrapper'},
                    React.createElement('a', { href: 'http://www.laurencecruz.com'},
                        React.createElement('button', {className: 'enterButton'}, 'Enter')
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
