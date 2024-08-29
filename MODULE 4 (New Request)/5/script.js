function fetchAndDisplayProducts() {
    const apiUrl = 'https://fakestoreapi.com/products';

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((products) => {
            const container = document.getElementById('products-container');
            container.innerHTML = '';

            products.forEach((product) => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';

                const img = document.createElement('img');
                img.src = product.image;
                img.alt = product.title;
                productDiv.appendChild(img);

                const detailsDiv = document.createElement('div');
                detailsDiv.innerHTML = `
                    <h2>${product.title}</h2>
                    <p><strong>Price:</strong> $${product.price}</p>
                    <p><strong>Category:</strong> ${product.category}</p>
                    <p>${product.description}</p>
                `;
                productDiv.appendChild(detailsDiv);

                // Append the product div to the container
                container.appendChild(productDiv);
            });
        })
        .catch((error) => {
            console.error('Error fetching products:', error);
        });
}

fetchAndDisplayProducts();