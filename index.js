document.getElementById('menu-btn').onclick = () => {
    document.querySelector('.navbar').classList.toggle('active');
};

document.addEventListener('DOMContentLoaded', (event) => {
    const images = document.querySelectorAll('.product-images img');
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, 3000);
    });

        //for maps
       

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.products');

    function checkVisibility() {
        const windowHeight = window.innerHeight;
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < windowHeight - 50) { // Adjust the value as needed
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.products-sushi');

    function checkVisibility() {
        const windowHeight = window.innerHeight;
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < windowHeight - 50) { // Adjust the value as needed
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.home');

    function checkVisibility() {
        const windowHeight = window.innerHeight;
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < windowHeight - 50) { // Adjust the value as needed
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.body-up');

    function checkVisibility() {
        const windowHeight = window.innerHeight;
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < windowHeight - 50) { // Adjust the value as needed
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});
