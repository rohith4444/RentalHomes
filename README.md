# RentalHomes

A full-stack web application designed to connect property owners with potential renters, making it easier to find, list, and manage rental properties.

## Overview

RentalHomes is a platform where:
- Property owners can list their properties for rent
- Renters can search, view, and compare available properties
- Users can create accounts to manage their profiles and property listings
- Users can save favorite properties and contact property owners

## Tech Stack

### Frontend
- **React.js** - JavaScript library for building the user interface
- **React Router** - For navigation within the application
- **CSS** - Styling using custom CSS with styled-components
- **React Icons** - For UI icons and graphics
- **Google Maps API** - For property location visualization

### Backend
- **Spring Boot** - Java-based framework for building the backend server
- **Spring Data JPA** - For database operations and ORM
- **MySQL** - Database for storing application data
- **Hibernate** - ORM tool for mapping Java objects to database tables
- **Lombok** - For reducing boilerplate code
- **Model Mapper** - For mapping between entities and DTOs

## Features

### Property Management
- List new properties with details and media
- Update property information
- View and manage listed properties

### Property Discovery
- Search for properties by location, price, type, etc.
- View property details including photos, specifications, and contact information
- Save favorite properties
- Compare multiple properties

### User Accounts
- User registration and authentication
- Profile management
- Property owner and renter interfaces

### Communication
- Contact form for inquiries
- Feedback submission

## Project Structure

### Frontend Structure
- `/src/components` - React components organized by feature
- `/src/components/common` - Reusable UI components
- `/src/components/home` - Home page components
- `/src/components/account` - User account management
- `/src/components/loginsignup` - Authentication components

### Backend Structure
- `/backend/src/main/java/Backend/crud/model` - Entity classes
- `/backend/src/main/java/Backend/crud/repository` - Data access layer
- `/backend/src/main/java/Backend/crud/controller` - REST API endpoints
- `/backend/src/main/java/Backend/crud/service` - Business logic
- `/backend/src/main/java/Backend/crud/DAO` - Data Access Objects for API requests/responses

## API Endpoints

### Customer Endpoints
- `GET /api/v1/customers` - Get all customers
- `POST /api/v1/customers` - Create a new customer
- `GET /api/v1/customers/{id}` - Get customer by ID
- `PUT /api/v1/customers/{id}` - Update customer information

### Property Endpoints
- `GET /api/rh/house` - Get all houses
- `POST /api/rh/house` - Create a new house listing
- `GET /api/rh/house/{id}` - Get house by ID
- `PUT /api/rh/house/{id}` - Update house information

### Feedback & Leads
- `GET /api/v1/feedbacks` - Get all feedbacks
- `POST /api/v1/feedbacks` - Submit feedback
- `GET /api/v1/leads` - Get all leads
- `POST /api/v1/leads` - Submit a lead

## Setup & Installation

### Prerequisites
- Node.js and npm
- JDK 17
- MySQL

### Frontend Setup
1. Clone the repository
2. Navigate to the project root directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

### Backend Setup
1. Navigate to the backend directory
2. Configure database connection in `application.properties`
3. Build the project:
   ```bash
   ./mvnw clean install
   ```
4. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```

## Upcoming Updates
- Virtual property tour requests
- Comprehensive online rental application procedure
- Qualified real estate agent assistance
- Premium membership plans
- Online rent payment solutions

## Contributors
- Rohith Reddy Mandala - Co-Founder
- Sandeep Varma Indukuri - Co-Founder

## License
This project is licensed under the Apache License 2.0

## Note
This is a personal project created for learning and demonstration purposes.