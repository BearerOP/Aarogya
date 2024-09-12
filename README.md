---

# Aarogya

Aarogya is a Health Management Information System (HMIS) application that provides schematic data of patients from various health welfare complexes.

## Installation and Setup

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (>=14.x.x)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/BearerOP/Aarogya.git
   cd Aarogya
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` File**

   Create a `.env` file in the root of your project and add the necessary environment variables. Example:

   ```env
   MONGO_URI=mongodb://localhost:27017/aarogya
   ```

4. **Run the Application**

   To start the application in development mode, use:

   ```bash
   npm start
   ```

   This will use `nodemon` to automatically restart the server on code changes.

### Linting and Formatting

- **Lint the Code**

  Run the following command to check for linting issues:

  ```bash
  npm run lint
  ```

  To get a summary of linting results, use:

  ```bash
  npm run lint:check
  ```

- **Format the Code**

  To format the code using Prettier, run:

  ```bash
  npm run prettier
  ```

## Contribution

We welcome contributions to Aarogya! Here’s how you can contribute:

1. **Fork the Repository**

   Click the "Fork" button on the top right of the repository page on GitHub to create a personal copy of the repository.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/your-username/Aarogya.git
   cd Aarogya
   ```

3. **Create a Branch**

   Create a new branch for your changes:

   ```bash
   git checkout -b your-feature-branch
   ```

4. **Make Your Changes**

   Make the necessary changes to the codebase.

5. **Commit Your Changes**

   Commit your changes with a descriptive message:

   ```bash
   git add .
   git commit -m "Add your descriptive commit message here"
   ```

6. **Push to Your Fork**

   Push your changes to your forked repository:

   ```bash
   git push origin your-feature-branch
   ```

7. **Open a Pull Request**

   Go to the original repository on GitHub and open a pull request from your forked repository’s branch.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Contact

For any questions or issues, please open an issue on the [GitHub repository](https://github.com/BearerOP/Aarogya/issues).

---