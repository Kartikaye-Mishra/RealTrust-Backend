# Project Name
RealTrust

This project is a full-stack application that includes features such as project management, client management, user contact forms, newsletter subscriptions, and image uploads with Cloudinary integration.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Middleware](#middleware)
- [Environment Variables](#environment-variables)
- [Models](#models)
- [Controllers](#controllers)
- [Routes](#routes)
- [Cloudinary Integration](#cloudinary-integration)
- [Newsletter Functionality](#newsletter-functionality)
- [Admin Access](#admin-access)
- [Running the Project](#running-the-project)

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Cloudinary Account

### Installation


1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo.git
   cd your-repo

2. Install the dependencies:

    npm install
    Create a .env file and configure your environment variables.
    
3. Running the Project
    Start the server: npm start

### Project Structure

.
├── src/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── utils/
├── uploads/
├── server.js
├── .env
├── package.json
└── README.md

### API Endpoints

#### Projects

- **GET /api/projects**: Retrieve all projects
- **POST /api/projects**: Add a new project (Admin only, requires image upload)
- **PUT /api/projects/:id**: Update a project (Admin only)
- **DELETE /api/projects/:id**: Delete a project (Admin only)

#### Clients

- **GET /api/clients**: Retrieve all clients
- **POST /api/clients**: Add a new client (Admin only, requires image upload)
- **PUT /api/clients/:id**: Update a client (Admin only)
- **DELETE /api/clients/:id**: Delete a client (Admin only)

#### Users

- **POST /api/users**: Add a new user
- **GET /api/users**: Retrieve all users
- **PUT /api/users/:id**: Update a user
- **DELETE /api/users/:id**: Delete a user

#### Newsletter

- **POST /api/newsletter/subscribe**: Subscribe to the newsletter

### Middleware

- **authMiddleware.js**: Handles authentication for admin routes.

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

MONGODB_URI=your_mongo_db_connection_string
JWT_SECRET=your_super_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=5000
FRONTEND_URL=your_frontend_url


### Models

#### Project Model

Defines the schema for project data including name, description, and image URL.

#### Client Model

Defines the schema for client data including name, description, designation, and image URL.

#### Newsletter Model

Defines the schema for storing newsletter subscriptions, including email and subscription date.

### Controllers

#### Project Controller

Handles project-related actions such as creating, updating, and deleting projects. Integrates with Cloudinary for image uploads.

#### Client Controller

Handles client-related actions such as creating, updating, and deleting clients. Integrates with Cloudinary for image uploads.

#### Newsletter Controller

Handles newsletter subscriptions and ensures that users can subscribe to receive updates.

### Routes

#### Project Routes

Defines routes for project-related actions, with appropriate authentication for admin actions.

#### Client Routes

Defines routes for client-related actions, with appropriate authentication for admin actions.

#### Newsletter Routes

Defines routes for handling newsletter subscriptions.

### Cloudinary Integration

Cloudinary is used for managing image uploads in the project. Images are uploaded to Cloudinary, and the URLs are stored in the database.

#### Cloudinary Configuration

Ensure your `.env` file includes your Cloudinary credentials:

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

### Newsletter Functionality

Allows users to subscribe to a newsletter using their email addresses. Admins can view all subscriptions.

### Admin Access

Certain routes are protected and require admin authentication. Admins can create, update, and delete projects and clients. They also have access to view all users and newsletter subscriptions.

### Running the Project

Start the server:
```bash
npm start


    