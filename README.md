# React App Sandbox
- This sandbox is for testing new features and functionality with React, react-bootstrap and bootswatch theme (Cerulean)




# Folder Structure
- Root folder will function as the Git Repository Root Folder


# Process
cd root folder
npx create-react app frontend

# Clean Up Files
- ./public/index.html - Update Title and Header
- Delete: App.css, App.test.js, logo.svg, setupTest.js
- Remove all code from index.css

# Update App.js
- Convert to an arrow function and an empty fragment

# Enable Git
- We want the Git Repository in the Root folder not the front-end
- ./frontend -  ls -a (Show hidden files and folders)
- rm -rf .git
- Move Git Ignore into the Root and update to ignore .env node_modules/
- cd to root folder
- git init (Node_Modules should now be greyed out)

# Create Header and Footer Components
- mkdir ./src/components
- touch Header.js Footer.js - update HTML Tags to <header> , <footer>
- import into App.js

# React-Bootstrap Setup
- https://bootswatch.com/
- Download min.css and place in .src folder - Update index.js -> import './bootstrap.min.css'
- Stop Server - Install in FRONTEND FOLDER - react-bootstrap

- https://react-bootstrap.github.io/getting-started/introduction
- npm install react-bootstrap

# Add dummy data to src folder and public/images

# Screens
- .src/screens/surfProductsScreen.js and HomeScreen

# Router
- Add React-router-dom to ./frontend folder
- Update App.js
- Update Header and SurfProductScreen with 'LinkContainer' from react-router-bootstrap






# Packages
npm install dotenv --save
npm i react-router-dom react-router-bootstrap

