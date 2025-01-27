# Vite React CRUD API with Handmade JSON Web Server

A lightweight CRUD (Create, Read, Update, Delete) application built with **React** and **Vite**, using a custom JSON-based web server created with **Node.js**.

## Features

- **Frontend**: Built using React and Vite for fast development and performance.
- **Backend**: Custom Node.js server with a handmade JSON data store for simplicity.
- Full CRUD operations:
  - Create new records.
  - Read data from the server.
  - Update existing records.
  - Delete records.
- Lightweight, simple, and easily customizable for small projects or prototyping.

---

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/edwardohazo/react_crud_api.git
cd VITE_APP

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install

cd server
node server.js

cd client
npm run dev

```

The frontend will run on http://localhost:5173.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


