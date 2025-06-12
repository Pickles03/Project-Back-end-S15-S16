function getProductForm(action, method = 'POST', product = {}) {
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];
    const categories = ['Shirts', 'Pants', 'Shoes', 'Accessories'];

    return `
    <form action='${action}' method='${method}' enctype='multipart/form-data'>
        <label>Name:</label>
        <input type='text' name='name' value='${product.name || ''}' required/>

        <label>Description:</label>
        <textarea name='description' required>${product.description || ''}></textarea>

        <label>Image URL:</label>
        <input type='file' name='images' accept='image/*' multiple required/>

        <label>Category:</label>
        <select name='category' required>
            ${categories.map(cat => `<option value='${cat}' ${product.category === cat ? 'selected' : ''}>${cat}</option>`).join('')}
        </select>

        <label>Size:</label>
        <select name='size' required>
            ${sizes.map(size => `<option value='${size}' ${product.size === size ? 'selected' : ''}>${size}</option>`).join('')}
        </select>

        <label>Price:</label>
        <input type='number' name='price' value='${product.price || ''}' required step='0.01' min='0' />

        <button type='submit'>Submit</button>
    </form>`;
};

module.exports = {getProductForm};