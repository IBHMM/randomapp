import { Products } from "./data.js";

// function initializeCatalogPage() {
//   const subcategoryId = localStorage.getItem("selectedSubcategoryId");

//   if (!subcategoryId) {
//     document.getElementById("category-title").innerText =
//       "Alt kateqoriya seçilməyib";
//     document.getElementById("category-items").innerHTML =
//       '<p class="text-gray-600 text-center col-span-full">Alt kateqoriya seçilməyib və ya mövcud deyil.</p>';
//     return;
//   }

//   let selectedSubcategory;
//   Products.forEach((category) => {
//     const subcategory = category.subcategories.find(
//       (sub) => sub.id === parseInt(subcategoryId)
//     );
//     if (subcategory) {
//       selectedSubcategory = subcategory;
//     }
//   });

//   if (!selectedSubcategory) {
//     document.getElementById("category-title").innerText =
//       "Alt kateqoriya tapılmadı";
//     document.getElementById("category-items").innerHTML =
//       '<p class="text-gray-600 text-center col-span-full">Alt kateqoriya tapılmadı.</p>';
//     return;
//   }

//   // Update the title
//   document.getElementById("category-title").innerText =
//     selectedSubcategory.name;

//   // Populate the items
//   const categoryItemsContainer = document.getElementById("category-items");
//   categoryItemsContainer.innerHTML = "";

//   selectedSubcategory.catalog.forEach((item) => {
//     const card = document.createElement("div");
//     card.className =
//       "bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow";

//     const img = document.createElement("img");
//     img.src = item.image;
//     img.alt = item.name;
//     img.className = "w-full rounded-lg mb-4";
//     card.appendChild(img);

//     const title = document.createElement("h4");
//     title.className = "text-lg font-bold mb-2";
//     title.innerText = item.name;
//     card.appendChild(title);

//     const description = document.createElement("p");
//     description.className = "text-gray-600";
//     description.innerText = item.describtion;
//     card.appendChild(description);

//     const price = document.createElement("p");
//     price.className = "text-blue-600 font-bold mt-4";
//     price.innerText = `₼${item.price}`;
//     card.appendChild(price);

//     categoryItemsContainer.appendChild(card);
//   });
// }

function generateProductsSection(products) {
    const productsContainer = document.getElementById('selectedSubcategoryId');
    productsContainer.innerHTML = ''; 

    products.forEach((category) => {
        const categoryContainer = document.createElement('div');
        categoryContainer.className = `category mb-16 transition-all duration-500 ease-in-out cursor-pointer`;
        categoryContainer.dataset.categoryId = category.id;

        const categoryTitle = document.createElement('h3');
        categoryTitle.className = 'text-2xl font-bold mb-8 text-blue-800 category-title';
        categoryTitle.innerText = category.name;
        categoryContainer.appendChild(categoryTitle);

        const gridContainer = document.createElement('div');
        gridContainer.className = 'grid md:grid-cols-3 lg:grid-cols-4 gap-6';

        category.subcategories.forEach((subcategory) => {
            const card = document.createElement('div');
            card.className = 'subcategory bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer';
            card.dataset.subcategoryId = subcategory.id;

            const img = document.createElement('img');
            img.src = subcategory.image;
            img.alt = subcategory.name;
            img.className = 'w-full rounded-lg mb-4';
            card.appendChild(img);

            const subcategoryTitle = document.createElement('h4');
            subcategoryTitle.className = 'text-lg font-bold mb-2';
            subcategoryTitle.innerText = subcategory.name;
            card.appendChild(subcategoryTitle);

            const description = document.createElement('p');
            description.className = 'text-gray-600';
            description.innerText = `Explore the features of ${subcategory.name}`;
            card.appendChild(description);

            card.addEventListener('click', () => {
                localStorage.setItem('selectedSubcategoryId', subcategory.id);
                window.location.href = 'category.html';
            });

            gridContainer.appendChild(card);
        });

        categoryContainer.addEventListener('click', () => {
            localStorage.setItem('selectedCategoryId', category.id);
            window.location.href = 'category.html';
        });

        categoryContainer.appendChild(gridContainer);
        productsContainer.appendChild(categoryContainer);
    });
}

function initializeGoBackButton() {
  const goBackBtn = document.getElementById("go-back-btn");
  goBackBtn.addEventListener("click", () => {
    window.location.href = "./category.html"; // Adjust the path if necessary
  });
}

generateProductsSection();
initializeGoBackButton();
