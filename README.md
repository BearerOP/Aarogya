---

# Aarogya

A HMIS application that provides schematic data of patients from various health welfare complexes.

## Installation and Setup

Follow these steps to get your development environment set up:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/BearerOP/Aarogya.git
cd Aarogya
```

### Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

### Generate an OpenSSL Secret

To generate a secret key using OpenSSL for your application, run the following command:

```bash
openssl rand -base64 32
```

This will output a 32-byte base64-encoded secret. You can use this secret in your application configuration.

### Create a `.env` File

Create a `.env` file in the root directory of the project and add the following content:

```env
SECRET_KEY=<your_generated_secret>
```

Replace `<your_generated_secret>` with the secret key you generated with OpenSSL.

### Running the Application

To start the application in development mode, run:

```bash
npm start
```

### Running Linting and Formatting

To lint your code, run:

```bash
npm run lint
```

To check for lint errors and see a message if no errors are found, use:

```bash
npm run lint:check
```

To format your code with Prettier, run:

```bash
npm run prettier
```

## Contributing

We welcome contributions to Aarogya! Please refer to the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines on how to contribute.

## License

This project is licensed under the [ISC License](LICENSE).

## Contact

For any questions or issues, please open an issue on our [GitHub repository](https://github.com/BearerOP/Aarogya/issues).

---