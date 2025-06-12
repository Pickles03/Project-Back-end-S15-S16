function getNavBar(currentPath = '') {
    const isDashboard = currentPath.startsWith('/dashboard');

    const categories = ['Shirts', 'Pants', 'Shoes', 'Accessories'];

    let html = `<nav><ul>`;

    if (!isDashboard) {
        html += `<a href="/products">All Products</a>`
    }

    if (isDashboard) {
        html += `<li><a href="/dashboard/new">Add new product</a></li>`;
        html += `<li><a href="/products">Back to shop</a></li>`;
    } else {
        html += `<li><a href="/dashboard">Admin Dashboard</a></li>`;
    }

    html += `</nav></ul>`;

    return html;
};

module.exports = getNavBar;