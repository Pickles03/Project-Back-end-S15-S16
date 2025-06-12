function getProductCard(products, isDashboard) {
    let html = '<section class="product-grid">';

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        html += '<div class="product-card">';
        html += `<img src="${product.image}" alt="${product.name}">`;
        html += `<h2>${product.name}</h2>`;
        html += `<p>${product.description}</p>`;
        html += `<p>Price: $${product.price.toFixed(2)}</p>`;
        html += `<a href="/products/${product._id}">View Details</a>`;

        if (isDashboard) {
            html += `<a href="/dashboard/${product._id}/edit">Edit</a>`;
            html += `
                <form action="/dashboard/${product._id}/delete?_method=DELETE" method="POST" style="display:inline;">
                    <button type="submit">Delete</button>
                </form>
                `;
        }

        html += '</div>';
    }

    html += '</section>';
    return html;

};

module.exports = getProductCard;