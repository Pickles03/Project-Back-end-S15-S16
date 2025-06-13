function getProductCard(products, isDashboard) {
    let html = '<section class="product-grid">';

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        html += '<div class="product-card">';
        html += `<img src="${product.image}" alt="${product.name}" width="200" height="200">`;
        html += `<h2>${product.name}</h2>`;
        html += `<p>${product.description}</p>`;
        html += `<p>Price: $${product.price.toFixed(2)}</p>`;
        html += `<a href="${isDashboard ? `/dashboard/${product._id}` : `/products/${product._id}`}">View Details</a>`;
        html += '</div>';
    }

    html += '</section>';
    return html;

};

module.exports = getProductCard;