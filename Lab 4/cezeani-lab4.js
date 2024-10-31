(function() {
    document.querySelector('#hero h1').textContent = "Supercharge Your Brand with Stellar Marketing";
    document.querySelector('#hero p').innerHTML = "<strong><em>Leverage innovative strategies from Stellar Marketing to make your business shine and succeed.</em></strong>";
    document.querySelector('#hero').style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
    document.querySelector('header').style.backgroundColor = getComputedStyle(document.querySelector('footer')).backgroundColor;
    document.querySelector('#hero a').remove();

    // Add a new full-width section directly below the hero
    const newSection = document.createElement('section');
    newSection.style.backgroundColor = '#6495ed';
    newSection.style.padding = '32px 0';
    newSection.style.textAlign = 'center';
    newSection.innerHTML = `
        <button id="newCta" style="
            background-color: white;
            color: #6495ed;
            border: 4px solid #6495ed;
            padding: 13px 34px;
            font-size: 13px;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        ">Learn More</button>
    `;
    document.querySelector('main').insertBefore(newSection, document.querySelector('#services'));

    // Add an event listener to the new button
    document.getElementById('newCta').addEventListener('click', function() {
        alert('Thank You for your interest in Stellar Marketing!');
    });

    document.querySelectorAll('#services .material-symbols-outlined').forEach(icon => {
        icon.style.color = '#6495ed';
    });

    document.querySelector('[data-icon="digital"]').textContent = 'ads_click';

    // Change the layout of the tiles in the specialized marketing solutions section
    const style = document.createElement('style');
    style.textContent = `
        @media (min-width: 1024px) {
            [data-section="product_cards"] {
                grid-template-columns: repeat(4, 1fr);
            }
        }
    `;
    document.head.appendChild(style);

    document.querySelector('[alt="Musicians"]').src = 'https://picsum.photos/id/453/400/300';

    // Prevent the form from submitting to the broken URL
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        // Check if name and email are provided
        if (name && email) {
            alert(`Thank you, ${name}! We will be in touch with you shortly at ${email}.`);
        } else {
            alert('Please provide a name and email.');
        }
    });
})();
