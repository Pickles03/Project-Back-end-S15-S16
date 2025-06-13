const Product = require('../models/Product');
const baseHtml = require('../helpers/baseHtml');
const getNavBar = require('../helpers/getNavBar');
const template = require('../helpers/template');
const {getProductForm} = require('../helpers/template');
const getProductCard = require('../helpers/getProductCard');

const showProducts = async (req, res) => {
    try {
        const {category} = req.query;

        const filter = category ? {category} : {};

        const products = await Product.find(filter);
        const isDashboard = req.path.startsWith('/dashboard');
        const content = getNavBar(req.path) + getProductCard(products, isDashboard);
        
        res.send(baseHtml(isDashboard ? 'Dashboard' : 'Store') + content);
    } catch (err) {
        console.log('Error retrieving products:', err);
        res.status(500).send('Error retrieving products');
    }
};

const showProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        if (!product) return res.status(404).send('Product not found');

        const isDashboard = req.path.includes('/dashboard');

        let html = `
        <div class="product-details">
            <img src="${product.image}" alt="${product.name}" width=200px/>
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Category: ${product.category}</p>
            <p><b>Size: </b>${product.size}</p>
            <p>${product.price.toFixed(2)}</p>
        `;

        if(isDashboard) {
            html += `
            <a href="/dashboard/${product._id}/edit">Edit</a>
            <form action="/dashboard/${product._id}/delete?_method=DELETE" method="POST">
                <button type="submit">Delete</button>
            </form>
            `
        }

        html += `</div>`;

        res.send(baseHtml(product.name) + getNavBar(req.path) + html);
    

    } catch (error) {
        res.status(500).send('Error retrieving product');
    }
};

const showNewProduct = async (req, res) => {
    const form = getProductForm('/dashboard', 'POST');
    const content = getNavBar(req.path) + form;
    res.send(baseHtml('Add new product') + content);
};

const createProduct = async (req, res) => {
    try {
        const {name, description, category, size, price} = req.body;
        const imageUrls = req.files.map(file => file.path);

        const newProduct = new Product({
            name,
            description,
            image: imageUrls,
            category,
            size,
            price
        });

        await newProduct.save();
        res.redirect('/dashboard');
    } catch (error) {
        res.status(500).send('Error creating product');
    }
};

const showEditProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        if (!product) return res.status(404).send('Product not found');

        const form = getProductForm(`/dashboard/${product._id}?_method=PUT`, 'POST', product);
        const content = getNavBar(req.path) + form;
        res.send(baseHtml(`Edit ${product.name}`) + content);
    } catch (error) {
        res.status(500).send('Error retrieving product for edit');
    }
};

const updateProduct = async (req, res) => {
    try {
        const {name, description, image, category, size, price} = req.body;
        
        await Product.findByIdAndUpdate(req.params.productId, {
            name,
            description,
            image,
            category,
            size,
            price
        });

        res.redirect(`/dashboard/${req.params.productId}`);
    } catch (error) {
        res.status(500).send('Error updating product');
    }
};

const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.productId);
        res.redirect('/dashboard');
    } catch (error) {
        res.status(500).send('Error deleting product');
    }
};


module.exports = {
    showProducts,
    showProductById,
    showNewProduct,
    createProduct,
    showEditProduct,
    updateProduct,
    deleteProduct
};