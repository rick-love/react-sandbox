# React App Sandbox
- This sandbox is for testing new features and functionality with React




# Folder Structure
- Root folder will function as the Git Repository Root Folder


# Process
cd root folder
npx create-react app frontend

# Clean Up Files
- ./public/index.html - Update Title and Header
- Delete: App.css, App.test.js, logo.svg, setupTest.js
- Remove all code from index.css and convert to index.scss (Update index.js -> import './index.scss')

# Update App.js
- Convert to an arrow function and an empty fragment

# Enable Git
- We want the Git Repository in the Root folder not the front-end
- ./frontend -  ls -a (Show hidden files and folders)
- rm -rf .git
- Move Git Ignore into the Root and update to ignore .env node_modules/
- cd to root folder
- git init (Node_Modules should now be greyed out)

# Packages
npm install dotenv --save

