# Vanilla JS SPA
A simple Single Page Application built with Vanilla JavaScript.

## Getting Started

### Prerequisites
- Node.js and npm installed.

### Installation

```bash
git clone git@github.com:your-username/vanilla-js-spa.git
cd vanilla-js-spa
npm install
npm run dev
```

### Obtaining a NASA API Key
1. Visit the NASA API website: https://api.nasa.gov/.
2. Sign up for an API Key by filling out the form.
3. Copy the API Key provided after registration.

### Setting Up Environment Variables
Create a `.env` file in the root directory of the project:
```makefile
NASA_API_KEY=YOUR_NASA_API_KEY
```
* Replace YOUR_NASA_API_KEY with the API Key you obtained.
* **Important**: Do not share or commit your API Key (add `.env` to `.gitignore`)

### Running the Application
Start the development server:
```bash
npm run dev
```

Open your browser and navigate to http://localhost:3000/ to see the app.

### Running Tests
Run the test suite:
```bash
npm test
```

### Building the Project
Create a production build:
```bash
npm run build
```
* The built files will be in the dist directory.

### Deployment
The app is deployed via GitHub Pages.

### License: 
ISC