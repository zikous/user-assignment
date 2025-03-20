# User Management System

This project is a **User Management System** with a **NestJS** backend API and a **Next.js** frontend application. It supports user management (CRUD operations) and includes JWT-based authentication for admin users.

---

## Features

- **User Management**: Create, read, update, delete, search, and filter users.
- **Authentication**: Admin login with JWT and protected routes.
- **Database**: SQLite database managed with **Prisma** ORM.
- **Frontend**: Built with **Next.js** and styled using **Tailwind CSS**.
- **Backend**: Modular API built with **NestJS**.

---

## Technologies Used

### Frontend
- **Next.js**: React framework for SSR and routing.
- **Tailwind CSS**: Utility-first CSS framework.
- **React Hook Form**: Form management and validation.
- **Axios**: HTTP client for API integration.

### Backend
- **NestJS**: Scalable Node.js framework.
- **Prisma**: Database toolkit for TypeScript.
- **SQLite**: Lightweight database.
- **JWT**: Secure authentication.
- **Bcrypt**: Password hashing.

### Tools
- **pnpm**: Efficient package manager.
- **Postman**: API testing.
- **Prisma Studio**: Database visualization.

---

## Project Setup

### Prerequisites

Install [pnpm](https://pnpm.io/):

```sh
npm install -g pnpm
```

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/zikous/user-assignment
    cd user-assignment
    ```

2. Copy environment variables:

    ```sh
    cp backend/.env.example backend/.env
    cp backoffice/.env.example backoffice/.env
    ```

3. Install dependencies:

    ```sh
    pnpm install
    ```

4. Setup the database:

    ```sh
    cd backend
    pnpx prisma migrate dev
    node prisma/seed.js
    ```

5. Start the project:

    ```sh
    cd ..
    pnpm dev
    ```

---

## What I Did

- Built a **NestJS** API for user management and authentication.
- Used **Prisma** ORM for database interactions and seeding.
- Developed a **Next.js** frontend with **Tailwind CSS** for styling.
- Integrated frontend and backend with **Axios**.
- Implemented JWT-based authentication and protected routes.
- Added input validation, error handling, and user-friendly messages.

---

## How to Test

1. **Admin Login**: Use default credentials from `.env` (e.g., `username: admin`, `password: adminpassword`).
2. **User Management**: Log in to create, update, delete, or search users.
3. **Protected Routes**: Verify redirection to login when accessing protected routes without authentication.
4. **Database Management**: Use Prisma Studio:

    ```sh
    cd backend
    pnpx prisma studio
    ```

---

## Future Improvements

- Add role-based access control.
- Implement pagination for user lists.
- Write unit and integration tests.
- Deploy to a cloud platform (e.g., Vercel, AWS).

