function getProductForm(action, method = 'POST', product = {}) {
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];
    const categories = ['Shirts', 'Pants', 'Shoes', 'Accessories'];

    return `
    <form action='${action}' method='${method}' enctype='multipart/form-data' class='form-container'>
        <div class='form-group'>    
            <label>Name:</label>
            <input type='text' name='name' value='${product.name || ''}' required/>
        </div>

        <div class='form-group'>   
            <label>Description:</label>
            <textarea name='description' required>${product.description || ''}</textarea>
        </div>

        <div class='form-group'>   
            <label>Image URL:</label>
            <input type='file' name='images' accept='image/*' multiple required/>
        </div>


        <div class='form-row'>
            <div class='form-group'>   
                <label>Category:</label>
                <select name='category' required>
                    ${categories.map(cat => `<option value='${cat}' ${product.category === cat ? 'selected' : ''}>${cat}</option>`).join('')}
                </select>
            </div>
            <div class='form-group'>
                <label>Size:</label>
                <select name='size' required>
                    ${sizes.map(size => `<option value='${size}' ${product.size === size ? 'selected' : ''}>${size}</option>`).join('')}
                </select>
            </div>
            <div class='form-group'>
                <label>Price:</label>
                <input type='number' name='price' value='${product.price || ''}' required step='0.01' min='0' />
            </div>
        </div>
        <button type='submit'>Submit</button>
    </form>`;
};

module.exports = {getProductForm};