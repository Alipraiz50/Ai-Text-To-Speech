AI Text-to-Speech Converter
An AI-powered Text-to-Speech Converter built with Next.js. This application provides seamless text-to-speech conversion, enabling users to convert text into realistic, natural-sounding speech using AI-driven technologies.

Features
AI-Powered Voice Synthesis: Uses state-of-the-art AI models to create lifelike, expressive voices.
Multi-Voice Support: Choose from a variety of voices to fit different contexts or personalities.
Responsive Design: Optimized for use on desktops, tablets, and mobile devices.
Customizable Playback Speed: Adjust the speaking rate to suit different use cases.
Easy-to-Use Interface: Simple and intuitive layout to make text-to-speech conversion quick and easy.
Technology Stack
Frontend: Next.js - React framework with server-side rendering and static generation.
AI API: Integrates with a text-to-speech API which was Eleven labs
Styling: Uses Tailwind CSS for modern, responsive styling.
UI Components: Built with Material-UI (MUI) for a consistent and accessible design.
Getting Started
These instructions will help you set up the project on your local machine.

Prerequisites
Node.js (v14 or later) and npm installed on your machine.
API Key for the Text-to-Speech service (e.g., ElevenLabs, Google Cloud Text-to-Speech).
Installation
Clone the Repository

bash
Copy code
git clone https://github.com/Ali-Praiz50/ai-text-to-speech-converter.git
cd ai-text-to-speech-converter
Install Dependencies

bash
Copy code
npm install
Set Up Environment Variables

Create a .env.local file in the root of the project and add your Text-to-Speech API credentials:

plaintext
Copy code
NEXT_PUBLIC_API_KEY=your_api_key
NEXT_PUBLIC_API_URL=https://api.elevenlabs.io/v1  # Example for ElevenLabs
Run the Application

Start the development server:

bash
Copy code
npm run dev
The application should be available at http://localhost:3000.

Building for Production
To create a production build:

bash
Copy code
npm run build
npm start
Folder Structure
plaintext
Copy code
├── components           # Reusable React components
├── lib                  # API and utility functions
├── pages
│   ├── index.tsx        # Home page with text-to-speech converter
│   ├── about.tsx        # About page with project details
├── public               # Static assets
├── styles               # Global and component-specific styles
└── README.md
Usage
Open the application and enter text in the input field.
Select a voice from the dropdown menu.
Click the "Convert to Speech" button.
The app will use AI to generate and play the audio output for the entered text.
Contributing
If you'd like to contribute to the project, please follow these steps:

Fork the repository.
Create a new branch for your feature (git checkout -b feature-name).
Commit your changes (git commit -m 'Add a feature').
Push to the branch (git push origin feature-name).
Open a Pull Request.
License
This project was designed by me

Acknowledgments
Next.js - The React framework used for the app.
Tailwind CSS - CSS framework for styling.
Material-UI - UI components.
ElevenLabs API - Text-to-Speech API 
