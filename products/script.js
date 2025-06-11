document.addEventListener("DOMContentLoaded", () => {
    const productCat = localStorage.getItem("selectedProductId");
    
    if (!productCat) {
      console.error("Product ID not found in localStorage.");
      return;
    }

    console.log("Loaded Product ID:", productCat);
    const products = mockData[productCat] || [];

    const container = document.getElementById("product-container");

    if (products.length === 0) {
      container.innerHTML = "<p>No products found.</p>";
      return;
    }
    console.log(products);
    container.innerHTML = products.map(product => `
      <div class="box">
      <a href="item.html" onclick="getProductName('${product.title}')">
        <img src="${product.image}" alt="${product.title}" style="width:40vw; height: 100%;">
          <div class="overlay" style="display: flex; justify-content: center; align-items: center;">
            ${product.title}
          </div>
      </a>
      </div>
    `).join('');
    
    });
 function getProductName(productName){
  localStorage.setItem("selectedProductName", productName);

    console.log("Product ID stored:", productName);
    return productName;
  }