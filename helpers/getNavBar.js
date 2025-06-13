function getNavBar(currentPath = '') {
    const isDashboard = currentPath.startsWith('/dashboard');
    const categories = ['Shirts', 'Pants', 'Shoes', 'Accessories'];

    let html = `<nav><ul>`;

    html += `<li><a href="/products">All products</a></li>`;

    if (!isDashboard) {
        categories.forEach(category => {
            html += `<li><a href="/products?category=${category}">${category}</a></li>`;
        });
    }

    if (isDashboard) {
        html += `<li><a href="/dashboard/new">Add new product</a></li>`;
        html += `<li><a href="/products">Back to shop</a></li>`;
        html += `<li><a href="/logout">Logout</a></li>`;
    } else {
        html += `<li><a href="/dashboard">Admin Dashboard</a></li>`;
        html += `<li><a href="/login">Login</a></li>`;
    }

    html += `</ul></nav>`;
    return html;
};

module.exports = getNavBar;