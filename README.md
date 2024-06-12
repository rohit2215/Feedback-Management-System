# Feedback-Management-System

The Feedback Management System is a web application designed to collect and display user feedback. It consists of a backend built with Nest.js and a frontend built with React. The backend handles feedback submission and retrieval, while the frontend provides a user interface for submitting and viewing feedback.

Technology Stack:
Backend
Node.js: JavaScript runtime for building scalable network applications.
Nest.js: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
TypeScript: A statically typed superset of JavaScript that enhances development efficiency and code quality.
Express.js: A minimal and flexible Node.js web application framework.

Frontend
React: A JavaScript library for building user interfaces.
TypeScript: Enhances React development with static types.
CSS: For styling the frontend components.

Project Structure

1.Backend

backend/
├── src/
│   ├── app.module.ts
│   ├── main.ts
│   ├── feedback/
│   │   ├── feedback.controller.ts
│   │   ├── feedback.module.ts
│   │   ├── feedback.service.ts
│   │   └── dto/
│   │       └── create-feedback.dto.ts
├── .gitignore
├── nest-cli.json
├── package.json
├── README.md
├── tsconfig.build.json
└── tsconfig.json

2.Frontend

frontend/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── FeedbackForm.tsx
│   │   ├── FeedbackList.tsx
│   ├── App.tsx
│   ├── index.tsx
│   ├── styles/
│   │   ├── FeedbackForm.css
│   │   ├── FeedbackList.css
│   │   └── App.css
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock

Backend Setup
Install Dependencies:

bash
cd backend
npm install
Run the Server:
npm run start:dev
The server will start on http://localhost:3000.

Backend API Endpoints
Retrieve all feedback entries:

1.URL: /feedback
Method: GET
Response: Returns a list of all feedback entries.
Submit new feedback:

2.URL: /feedback
Method: POST
Body:
json

{
  "name": "string",
  "feedback": "string"
}
Response: Returns the submitted feedback entry.

Frontend Setup
Install Dependencies:

bash
cd frontend
npm install
Run the Application:
npm start
The application will start on http://localhost:3001.

Frontend Components
FeedbackForm.tsx: A form for submitting new feedback.
FeedbackList.tsx: A list displaying all feedback entries.


Backend
app.module.ts: The root module of the application.
main.ts: The entry point of the application.
feedback.controller.ts: Handles incoming HTTP requests related to feedback.
feedback.module.ts: The module that encapsulates feedback-related components.
feedback.service.ts: Contains business logic for managing feedback entries.
create-feedback.dto.ts: Data Transfer Object for creating new feedback entries.

Frontend

FeedbackForm.tsx:

Renders a form with fields for the user's name and feedback message.
Submits the form data to the backend API.

FeedbackList.tsx:

Fetches and displays a list of all feedback entries from the backend.

App.tsx:

Main component that renders the FeedbackForm and FeedbackList components.
Manages the state for triggering a refresh of the feedback list after new feedback is submitted.

CSS Files:
Contains styles for the respective components to ensure a clean and appealing UI.
Enabling CORS in Backend
To allow requests from the frontend, enable CORS in main.ts:


This project demonstrates how to build a full-stack application with a Nest.js backend and a React frontend. The backend handles API requests for managing feedback, while the frontend provides a user-friendly interface for submitting and viewing feedback.
