Prerequisites
Install Node.js (version 18 or higher)

# Using Homebrew

brew install node

# Or download from https://nodejs.org/

Install Git (if not already installed)

brew install git
Setup Instructions
Clone/Download the Project

# If you have the project files, navigate to the project directory

cd path/to/your-soteco-project
Install Dependencies

npm install
Start the Development Server

npm run dev
This command will:

Start the Express backend server on port 5000
Start the Vite development server
Enable hot module replacement for live updates
Access the Application

Open your browser and go to: http://localhost:5000
The application should load with the SOTECO website
VSCode Setup
Install Recommended Extensions

- ES7+ React/Redux/React-Native snippets
- TypeScript Importer
- Tailwind CSS IntelliSense
- Auto Rename Tag
- Prettier - Code formatter
- ESLint
  Open the Project in VSCode

code .
Project Structure
├── client/ # React frontend
│ ├── src/
│ │ ├── components/ # UI components
│ │ ├── pages/ # Page components
│ │ ├── lib/ # Utilities and types
│ │ └── hooks/ # Custom React hooks
├── server/ # Express backend
│ ├── index.ts # Server entry point
│ ├── routes.ts # API routes
│ └── storage.ts # Data storage
├── shared/ # Shared types and schemas
└── package.json # Dependencies and scripts
Available Scripts
npm run dev - Start development server
npm run build - Build for production
npm run start - Start production server
npm run check - TypeScript type checking
Features
Bilingual Support: Switch between Serbian and English
Responsive Design: Works on desktop, tablet, and mobile
Contact Form: Functional contact form with validation
Professional UI: Modern design with Tailwind CSS and Shadcn components
Troubleshooting
If you encounter issues:

Port conflicts: Make sure port 5000 is available
Node version: Ensure you're using Node.js 18+
Clear cache: Delete node_modules and run npm install again
Browser cache: Hard refresh the browser (Cmd+Shift+R)
The application should now be running locally with all bilingual functionality and professional design intact.
# soteco
# soteco
