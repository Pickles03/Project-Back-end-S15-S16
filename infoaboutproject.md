# Clothing Store (Backend)

This project is a backend server for a clothing store, built with Node.js, Express, and MongoDB (hosted on Atlas). It supports full CRUD functionality for managing products via an admin dashboard and a public-facing product catalog. Images are uploaded to Cloudinary using `multer`.

## Live Demo

> Add your Render deployment link here once deployed.

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

- Protected by `requireAuth` middleware
- Add new product
- Edit product
- Delete product
- Upload images to Cloudinary (up to 5 per category)




