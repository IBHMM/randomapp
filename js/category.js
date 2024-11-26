import { Products } from './data.js';

function initializeCategoryPage() {
    const categoryId = localStorage.getItem('selectedCategoryId');

    if (!categoryId) {
        document.getElementById('category-title').innerText = 'Kateqoriya Seçilməyib';
        document.getElementById('category-items').innerHTML = '<p class="text-gray-600 text-center col-span-full">Kateqoriya seçilməyib və ya mövcud deyil.</p>';
        return;
    }

    const category = Products.find(cat => cat.id === parseInt(categoryId));

    if (!category) {
        document.getElementById('category-title').innerText = 'Kateqoriya Tapılmadı';
        document.getElementById('category-items').innerHTML = '<p class="text-gray-600 text-center col-span-full">Kateqoriya tapılmadı.</p>';
        return;
    }

    // Display category title
    document.getElementById('category-title').innerText = category.name;

    // Populate subcategories in the filter-container
    const filterContainer = document.querySelector('.filter-container');
    filterContainer.innerHTML = '';

    const allButton = document.createElement('button');
    allButton.className = 'filter-btn px-4 py-2 rounded bg-gray-200 hover:bg-gray-300';
    allButton.innerText = 'All';
    allButton.addEventListener('click', () => displayProducts(category.subcategories));
    filterContainer.appendChild(allButton);

    category.subcategories.forEach(subcategory => {
        const button = document.createElement('button');
        button.className = 'filter-btn px-4 py-2 rounded bg-gray-200 hover:bg-gray-300';
        button.innerText = subcategory.name;
        button.dataset.subcategoryId = subcategory.id;

        button.addEventListener('click', () => {
            displayProducts([subcategory]); // Pass only the selected subcategory
        });

        filterContainer.appendChild(button);
    });

    // Display all products by default
    displayProducts(category.subcategories);
}

function displayProducts(subcategories) {
    const categoryItemsContainer = document.getElementById('category-items');
    categoryItemsContainer.innerHTML = '';

    subcategories.forEach(subcategory => {
        subcategory.catalog.forEach((product, index) => {
            // Create product card
            const card = document.createElement('div');
            card.className = 'card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl';
            card.dataset.productId = product.id;

            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.name;
            img.className = 'w-full rounded-lg mb-4';
            card.appendChild(img);

            const title = document.createElement('h4');
            title.className = 'text-lg font-bold mb-2';
            title.innerText = product.name;
            card.appendChild(title);

            const description = document.createElement('p');
            description.className = 'text-gray-600 mb-4';
            description.innerText = product.describtion;
            card.appendChild(description);

            const price = document.createElement('p');
            price.className = 'text-green-600 font-bold';
            price.innerText = `$${product.price}`;
            card.appendChild(price);

            card.addEventListener('click', () => {
                localStorage.setItem('selectedProductId', product.id);
                window.location.href = './product-details.html'; // Redirect to product details page
            });

            categoryItemsContainer.appendChild(card);

            // Add animation with a delay
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 100); // 100ms staggered delay for each card
        });
    });
}


initializeCategoryPage();
