function fetchProducts() {
    const apiUrl = 'https://fakestoreapi.com/products';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Products:', data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }
  
  // Call the function to fetch and log products
  fetchProducts();
  