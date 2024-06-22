# Express TypeScript Starter

This repository provides a basic setup for building an Express.js application using TypeScript. It includes:

- TypeScript configuration (`tsconfig.json`)
- Basic Express server setup (`app.ts`)
- Decorators for creating controllers and routes
- Example controller (`UserController`) demonstrating GET and POST routes

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14.x or higher)
- npm (v6.x or higher) or yarn (v1.x or higher)
- TypeScript (v4.x or higher)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rootz491/express-oop-boilerplate
   cd express-oop-boilerplate
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Compile TypeScript:**

   ```bash
   npm run build
   ```

4. **Run the server:**

   ```bash
    npm start
   ```

   The server will start at http://localhost:3000.

## Project Structure

The project structure is organized as follows:

```
.
├── src/ # Source files
│ ├── controllers/ # Controllers defining route handlers
│ ├── decorators/ # Custom decorators (e.g., for routes)
│ ├── utils/ # Utility functions
│ ├── app.ts # Entry point for the application
│ └── ... # Other TypeScript files
├── dist/ # Compiled JavaScript files (generated after build)
├── node_modules/ # Dependencies installed by npm or yarn
├── package.json # Project manifest
├── tsconfig.json # TypeScript configuration
└── README.md # Project documentation
```

## Contributing

Contributions are welcome! Fork the repository and submit a pull request for any enhancements or fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](https://mit-license.org/) for details.
