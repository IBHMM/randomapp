import { Products } from './data.js'; 

// function generateProductsSection(products) {
//     const productsContainer = document.getElementById('products-container');
//     productsContainer.innerHTML = ''; // Clear previous content

//     products.forEach((category) => {
//         // Create a category container
//         const categoryContainer = document.createElement('div');
//         categoryContainer.className = `category mb-16 transition-all duration-500 ease-in-out cursor-pointer`;
//         categoryContainer.dataset.categoryId = category.id;

//         // Add category title
//         const categoryTitle = document.createElement('h3');
//         categoryTitle.className = 'text-2xl font-bold mb-8 text-blue-800 category-title';
//         categoryTitle.innerText = category.name;
//         categoryContainer.appendChild(categoryTitle);

//         // Create a grid for the subcategories
//         const gridContainer = document.createElement('div');
//         gridContainer.className = 'grid md:grid-cols-3 lg:grid-cols-4 gap-6';

//         // Add subcategories
//         category.subcategories.forEach((subcategory) => {
//             const card = document.createElement('div');
//             card.className = 'subcategory bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer';
//             card.dataset.subcategoryId = subcategory.id;

//             const img = document.createElement('img');
//             img.src = subcategory.image;
//             img.alt = subcategory.name;
//             img.className = 'w-full rounded-lg mb-4';
//             card.appendChild(img);

//             const subcategoryTitle = document.createElement('h4');
//             subcategoryTitle.className = 'text-lg font-bold mb-2';
//             subcategoryTitle.innerText = subcategory.name;
//             card.appendChild(subcategoryTitle);

//             const description = document.createElement('p');
//             description.className = 'text-gray-600';
//             description.innerText = `Explore the features of ${subcategory.name}`;
//             card.appendChild(description);

//             // Add click event to redirect and store the subcategory ID
//             card.addEventListener('click', () => {
//                 localStorage.setItem('selectedSubcategoryId', subcategory.id);
//                 window.location.href = 'category.html';
//             });

//             gridContainer.appendChild(card);
//         });

//         // Add click event to the category container
//         categoryContainer.addEventListener('click', () => {
//             localStorage.setItem('selectedCategoryId', category.id);
//             window.location.href = 'category.html';
//         });

//         categoryContainer.appendChild(gridContainer);
//         productsContainer.appendChild(categoryContainer);
//     });
// }

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

        // Append card to container
        container.appendChild(card);
    });
}

// Initialize product cards
function initialize() {
    generateParentCategories();
}

// Call initialize function on page load
initialize();
