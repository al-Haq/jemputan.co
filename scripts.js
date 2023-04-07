const products = [
    {
        id: 1,
        name: 'Product 1',
        image: 'images/1.jpg',
        price: 19.99
    },
    {
        id: 2,
        name: 'Product 2',
        image: 'images/2.jpg',
        price: 29.99
    },
    {
        id: 3,
        name: 'Product 3',
        image: 'images/3.jpg',
        price: 39.99
    },
    {
        id: 4,
        name: 'Product 4',
        image: 'images/4.jpg',
        price: 49.99
    },
    {
        id: 5,
        name: 'Product 5',
        image: 'https://via.placeholder.com/200',
        price: 59.99
    },
    {
        id: 6,
        name: 'Product 6',
        image: 'https://via.placeholder.com/200',
        price: 69.99
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.querySelector('.products');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.image}" alt="${product.name}">
            <div class="preview-container">
                <img src="${product.image}" alt="${product.name} Preview">
            </div>
            <p>Price: MYR ${product.price.toFixed(2)}</p>
        `;

        productsContainer.appendChild(productDiv);
    });
});
