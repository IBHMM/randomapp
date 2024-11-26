import { Products } from "./data.js";

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

const hmlinks = document.querySelectorAll('#homemenulinks');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    mobileMenuButton.classList.toggle('open');
});

addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        mobileMenu.classList.remove('open');
        mobileMenuButton.classList.remove('open');
    }
});

hmlinks.forEach((hmlink) => {
    hmlink.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileMenuButton.classList.remove('open');
    });
});


function generateParentCategories() {
    const container = document.getElementById('products-container');

    container.innerHTML = '';

    Products.forEach((category) => {
        const card = document.createElement('div');
        card.className = 'bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer';
        card.dataset.categoryId = category.id;

        const img = document.createElement('img');
        img.src = category.img;
        img.alt = category.name;
        img.className = 'w-full rounded-lg mb-4 h-40';
        card.appendChild(img);

        const title = document.createElement('h4');
        title.className = 'text-lg font-bold mb-2';
        title.innerText = category.name;
        card.appendChild(title);

        const description = document.createElement('p');
        description.className = 'text-gray-600';
        description.innerText = `Explore the features of ${category.name}`;
        card.appendChild(description);

        card.addEventListener('click', () => {
            localStorage.setItem('selectedCategoryId', category.id);
            window.location.href = 'category.html';
        });

        container.appendChild(card);
    });
}

// Initialize product cards
function initialize() {
    console.log(Products)
    generateParentCategories();
}

// Call initialize function on page load
initialize();
