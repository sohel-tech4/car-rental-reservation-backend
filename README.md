# Car Rental Reservation System

## Description

A car rental business. To keep track of my cars and manage customer rentals, I have decided to built a web app with a database designed based on the following models:

## Live:

https://car-rental-reservation-system-backend-five.vercel.app

## Live:

https://github.com/sohel-tech4/car-rental-reservation-backend.git

## Technology Stack:

- Use TypeScript as the programming language.
- Use Express.js as the web framework.
- Use Mongoose as the Object Data Modeling (ODM) and validation library for MongoDB

## API Endpoints

### 1\. Sign Up

**Route**: `/api/auth/signup` (**POST**)

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "role": "user", // role can be user or admin
  "password": "password123",
  "phone": "1234567890",
  "address": "123 Main St, City, Country"
}
```

**Response**:

```json
{
  "success": true,
  "statusCode": 201,
  "message": "User registered successfully",
  "data": {
    "_id": "6071f0fbf98b210012345678",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "role": "user",
    "phone": "1234567890",
    "address": "123 Main St, City, Country",
    "createdAt": "2024-06-10T12:00:00.000Z",
    "updatedAt": "2024-06-10T12:00:00.000Z"
  }
}
```

###

### 2\. Sign In

**Route**: `/api/auth/signin`(**POST**)

**Request Body:**

```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "User logged in successfully",
  "data": {
    "_id": "6071f0fbf98b210012345678",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "role": "user",
    "phone": "1234567890",
    "address": "123 Main St, City, Country",
    "createdAt": "2024-06-10T12:00:00.000Z",
    "updatedAt": "2024-06-10T12:00:00.000Z"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9... (your JWT token)"
}
```

### 3\. Create a Car (Only accessible to the Admin)

**Route**: `/api/cars`(**POST**)

**Request Headers:**

````Authorization:

**Request Body:**

```json
{
  "name": "Tesla Model 3",
  "description": "An electric car with advanced technology and performance.",
  "color": "White",
  "isElectric": true,
  "features": ["AC", "Bluetooth", "Long Range Battery"],
  "pricePerHour": 500
}
````

**Response:**

```json
{
  "success": true,
  "statusCode": 201,
  "message": "Car created successfully",
  "data": {
    "_id": "608a6d8d03a1b40012abcdef",
    "name": "Tesla Model 3",
    "description": "An electric car with advanced technology and performance.",
    "color": "White",
    "isElectric": true,
    "features": ["AC", "Bluetooth", "Long Range Battery"],
    "pricePerHour": 500,
    "status": "available",
    "isDeleted": false,
    "createdAt": "2024-04-28T12:00:00.000Z",
    "updatedAt": "2024-04-28T12:00:00.000Z"
  }
}
```

### 4\. Get All Cars

**Route**: `/api/cars`(**GET**)

**Response Body:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Cars retrieved successfully",
  "data": [
    {
      "_id": "608a6d8d03a1b40012abcdef",
      "name": "Tesla Model 3",
      "description": "An electric car with advanced technology and performance.",
      "color": "White",
      "isElectric": true,
      "features": ["AC", "Bluetooth", "Long Range Battery"],
      "pricePerHour": 500,
      "status": "available",
      "isDeleted": false,
      "createdAt": "2024-04-28T12:00:00.000Z",
      "updatedAt": "2024-04-28T12:00:00.000Z"
    }
    // more data
  ]
}
```

### 5\. Get A Car

**Route**: `/api/cars/:id`(**GET**)

**Response Body:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "A Car retrieved successfully",
  "data": {
    "_id": "608a6d8d03a1b40012abcdef",
    "name": "Tesla Model 3",
    "description": "An electric car with advanced technology and performance.",
    "color": "White",
    "isElectric": true,
    "features": ["AC", "Bluetooth", "Long Range Battery"],
    "pricePerHour": 500,
    "status": "available",
    "isDeleted": false,
    "createdAt": "2024-04-28T12:00:00.000Z",
    "updatedAt": "2024-04-28T12:00:00.000Z"
  }
}
```

### **6\. Update A Car (Only Accessible to the Admin)**

**Route:** `/api/cars/:id`(**PUT**)

**Request Headers:**

````Authorization

**Request Body:**

```json
{
  "color": "Black"
}
````

**Response Body:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Car updated successfully",
  "data": {
    "_id": "608a6d8d03a1b40012abcdef",
    "name": "Tesla Model 3",
    "description": "An electric car with advanced technology and performance.",
    "color": "Black",
    "isElectric": true,
    "features": ["AC", "Bluetooth", "Long Range Battery"],
    "pricePerHour": 500,
    "status": "available",
    "isDeleted": false,
    "createdAt": "2024-04-28T12:00:00.000Z",
    "updatedAt": "2024-04-29T12:00:00.000Z"
  }
}
```

###

### **7\. Delete A Car (Only Accessible to the Admin)**

**Route:** `/api/cars/:id`(**DELETE**) \[SOFT DELETE\]

**Request Headers:**

**Response Body:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Car Deleted successfully",
  "data": {
    "_id": "608a6d8d03a1b40012abcdef",
    "name": "Tesla Model 3",
    "description": "An electric car with advanced technology and performance.",
    "color": "Black",
    "isElectric": true,
    "features": ["AC", "Bluetooth", "Long Range Battery"],
    "pricePerHour": 500,
    "status": "available",
    "isDeleted": true,
    "createdAt": "2024-04-28T12:00:00.000Z",
    "updatedAt": "2024-05-29T12:00:00.000Z"
  }
}
```

### **8\. Get All Bookings (Accessible to the Admin)**

**Route:** `/api/bookings`(**GET**)

**Query Parameters:**

**Response Body:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Bookings retrieved successfully",
  "data": [
    {
      "_id": "60d9c4e4f3b4b544b8b8d1c7",
      "date": "2024-06-15",
      "startTime": "13:00",
      "endTime": null,
      "user": {
        "_id": "6071f0fbf98b210012345688",
        "name": "Tom",
        "email": "tom@example.com",
        "role": "user",
        "phone": "1234567890",
        "address": "123 Main St, City, Country"
      },
      "car": {
        "_id": "608a6d8d03a1b40012abcdef",
        "name": "Tesla Model 3",
        "description": "An electric car with advanced technology and performance.",
        "color": "White",
        "isElectric": true,
        "features": ["AC", "Bluetooth", "Long Range Battery"],
        "pricePerHour": 500,
        "status": "unavailable",
        "isDeleted": false,
        "createdAt": "2024-04-28T12:00:00.000Z",
        "updatedAt": "2024-04-28T12:00:00.000Z"
      },
      "totalCost": 0,
      "createdAt": "2024-04-28T12:00:00.000Z",
      "updatedAt": "2024-05-29T12:00:00.000Z"
    }
  ]
}
```

### **9\. Book a Car (Only Accessible to the User)**

**Request Body:**

```json
{
  "carId": "60d9c4e4f3b4b544b8b8d1c7",
  "date": "2024-06-15",
  "startTime": "13:00"
}
```

**Response Body:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Car booked successfully",
  "data": {
    "_id": "60d9c4e4f3b4b544b8b8d1c7",
    "date": "2024-06-15",
    "startTime": "13:00",
    "endTime": null,
    "user": {
      "_id": "6071f0fbf98b210012345688",
      "name": "Tom",
      "email": "tom@example.com",
      "role": "user",
      "phone": "1234567890",
      "address": "123 Main St, City, Country"
    },
    "car": {
      "_id": "608a6d8d03a1b40012abcdef",
      "name": "Tesla Model 3",
      "description": "An electric car with advanced technology and performance.",
      "color": "White",
      "isElectric": true,
      "features": ["AC", "Bluetooth", "Long Range Battery"],
      "pricePerHour": 500,
      "status": "unavailable",
      "isDeleted": false,
      "createdAt": "2024-04-28T12:00:00.000Z",
      "updatedAt": "2024-04-28T12:00:00.000Z"
    },
    "totalCost": 0,
    "createdAt": "2024-04-28T12:00:00.000Z",
    "updatedAt": "2024-05-29T12:00:00.000Z"
  }
}
```

### **10\. Get User's Bookings (Only Accessible To the User)**

**Route:** `/api/bookings/my-bookings`(**GET**)

**Request Headers:**

**Response Body:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "My Bookings retrieved successfully",
  "data": [
    {
      "_id": "60d9c4e4f3b4b544b8b8d1c7",
      "date": "2024-06-15",
      "startTime": "13:00",
      "endTime": "15:00",
      "user": {
        "_id": "6071f0fbf98b210012345688",
        "name": "Tom",
        "email": "tom@example.com",
        "role": "user",
        "phone": "1234567890",
        "address": "123 Main St, City, Country"
      },
      "car": {
        "_id": "608a6d8d03a1b40012abcdef",
        "name": "Tesla Model 3",
        "description": "An electric car with advanced technology and performance.",
        "color": "White",
        "isElectric": true,
        "features": ["AC", "Bluetooth", "Long Range Battery"],
        "pricePerHour": 500,
        "status": "unavailable",
        "isDeleted": false,
        "createdAt": "2024-04-28T12:00:00.000Z",
        "updatedAt": "2024-04-28T12:00:00.000Z"
      },
      "totaCost": 1000,
      "createdAt": "2024-04-28T12:00:00.000Z",
      "updatedAt": "2024-05-29T12:00:00.000Z"
    }
  ]
}
```

##

## **11\. Return The Car (Only Accessible To Admin)**

**Route:** `/api/cars/return`(PUT)

**Request Headers:**

**Request Body:**

```json
{
  "bookingId": "60d9c4e4f3b4b544b8b8d1c7",
  "endTime": "15:00"
}
```

**Response Body:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Car returned successfully",
  "data": {
      "_id": "60d9c4e4f3b4b544b8b8d1c7",
      "date": "2024-06-15",
      "startTime": "13:00",
      "endTime": "15:00",
      "user": {
          "_id": "6071f0fbf98b210012345688",
          "name": "Tom",
          "email": "tom@example.com",
          "role": "user",
          "phone": "1234567890",
          "address": "123 Main St, City, Country",
        },
      "car": {
        "_id": "608a6d8d03a1b40012abcdef",
        "name": "Tesla Model 3",
        "description": "An electric car with advanced technology and performance.",
        "color": "White",
        "isElectric": true,
        "features": ["AC", "Bluetooth", "Long Range Battery"],
        "pricePerHour": 500,
        "status": "available"
        "isDeleted": false,
        "createdAt": "2024-04-28T12:00:00.000Z",
        "updatedAt": "2024-04-28T12:00:00.000Z"
      },
      "totalCost":1000,
      "createdAt": "2024-04-28T12:00:00.000Z",
      "updatedAt": "2024-05-29T12:00:00.000Z"
    }
}

```
