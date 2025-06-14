# Clothing Store (Backend)

This project is a backend server for a clothing store, built with Node.js, Express, and MongoDB (hosted on Atlas). It supports full CRUD functionality for managing products via an admin dashboard and a public-facing product catalog. Images are uploaded to Cloudinary using `multer`.

## Technologies used

- **Node.js + Express** – server-side application
- **MongoDB Atlas** – NoSQL cloud database
- **Mongoose** – ORM for MongoDB
- **Cloudinary** – Image upload & storage
- **Multer** – Middleware for handling `multipart/form-data`
- **dotenv** – Manage environment variables
- **Method Override** – Support PUT/DELETE via forms
- **Express-session** – Simple session handling

## Basic information about the web service

**.env** information will be included in the submission form to preserve security and privacy

## Features

### Admin Dashboard

- Protected by `requireAuth` middleware in the `authMiddleware.js`
- Add new product
- Edit product
- Delete product
- Upload images to Cloudinary 

### Public Shop (Client view)

- View all products
- Filter by category
- View product details

## Walkthrough

Upon opening the website, the client will be met with the main home page of the shop display, being able to view all of the products at once, as well as being able to filter them by categories at will. 

They will also have the option to access `Admin Dashboard` which will initially be protected by a `login` request, username and password to which are listed in the `.env` file.

### Once logged in:
- View all products in the dashboard (`/dashboard`)
- Add a new product (`/dashboard/new`)
- View individual products (`/dashboard/:productId`)
- Edit product info (`/dashboard/:productId/edit`)
- Delete products (`/dashboard/:productId/delete`)

#### Notes
- Styling has been applied using css (`app.use(express.static('front'));`)