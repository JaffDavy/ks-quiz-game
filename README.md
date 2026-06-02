# KS Quiz Game

## Overview

KS Quiz Game is a React-based trivia application that challenges users with a series of true-or-false questions fetched from an external API. The application was designed to demonstrate effective state management, API integration, routing, and user interaction using modern React development practices.

Users progress through ten trivia questions, submit their answers, and receive a detailed results summary at the end of the quiz. The application ensures a smooth user experience by preventing users from revisiting previously answered questions and maintaining quiz state throughout the game.

---

## Problem Statement

Many online quizzes provide little structure and do not effectively track user progress or results. Building an engaging quiz application requires managing application state across multiple pages, handling asynchronous data fetching, and creating a seamless user flow.

This project was created to provide a structured trivia experience where users can answer questions, track their progress, and view their final results while demonstrating advanced React concepts such as Context API and React Router.

---

## Project Goals

- Build a multi-page React application.
- Fetch trivia questions from an external API.
- Implement React Router for page navigation.
- Use Context API for global state management.
- Track user answers and quiz progress.
- Calculate and display final scores.
- Create a responsive and user-friendly interface.

---

## Technical Architecture

### Frontend

The application was built using React and Vite.

Responsibilities:

- Rendering quiz pages
- Managing user interactions
- Displaying questions and results
- Handling navigation between pages
- Managing application state

### State Management

React Context API was used to manage:

- Current question
- User answers
- Quiz progress
- Final score
- Quiz reset functionality

This allowed state to be shared efficiently across multiple pages without excessive prop drilling.

### Routing

React Router was used to create a multi-page experience:

- Landing Page
- Question Pages
- Results Page

### API Communication

Trivia questions are fetched from an external API when the application loads.

Flow:

Landing Page → Fetch Questions → Quiz Questions → Results Page

---

## Tech Stack

### Frontend

- React
- JavaScript
- Tailwind CSS

### Routing

- React Router

### State Management

- Context API

### Data Fetching

- Fetch API

### Tools

- Git
- GitHub
- VS Code

---

## Features

### Quiz Functionality

- Fetches trivia questions from an external API
- Displays one question at a time
- Supports True/False answers
- Prevents revisiting previous questions
- Tracks user progress

### Score Tracking

- Records user answers
- Calculates final score
- Displays quiz results at completion

### Results Page

- Shows total score
- Displays correct answers
- Displays user answers
- Allows quiz restart

### State Management

- Centralized state using Context API
- Shared state across multiple pages
- Persistent quiz flow throughout navigation

### Responsive Design

- Mobile-friendly interface
- Tablet support
- Desktop support

---

## Folder Structure

```text
src/
├── components/
├── context/
├── pages/
├── routes/
├── App.jsx
└── main.jsx
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/JaffDavy/ks-quiz-game.git
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

---

## Challenges Faced

### State Management Challenge

Managing quiz progress across multiple pages was one of the most challenging aspects of the project. The application needed to track user answers, score calculations, and quiz progression while preventing users from returning to previously answered questions.

### API Integration Challenge

Fetching trivia questions from an external API and transforming the response into a format suitable for the application required careful handling of asynchronous operations and loading states.

### Debugging Experience

Ensuring that quiz results were calculated correctly and displayed consistently on the results page required extensive testing and debugging of state updates throughout the application flow.

### UI Development Challenge

Creating a smooth question-and-answer experience while maintaining responsiveness across different screen sizes required careful component design and layout management.

---

## What I Learned

### Technical Lesson

Through this project, I gained practical experience working with React Context API to manage and share application state across multiple pages without excessive prop drilling.

### State Management Lesson

I learned how to maintain quiz progress, user answers, and score calculations across different routes while ensuring data remained consistent throughout the application.

### API Integration Lesson

I improved my understanding of fetching and consuming external API data using asynchronous JavaScript and React Hooks.

### Component Communication Lesson

Building the quiz application helped me understand how components can communicate through shared state and how Context API simplifies data flow in larger React applications.

### Application Flow Design Lesson

I learned how to design user flows that guide users through a sequence of actions, including answering questions, tracking progress, and displaying results at the end of the quiz.

---

## Future Improvements

- Add difficulty selection
- Add quiz categories
- Add timer functionality
- Save high scores locally
- Add user authentication
- Add leaderboard functionality
- Improve quiz analytics and performance tracking

---

## My Role

Frontend Developer

Responsibilities:

- UI development
- API integration
- State management using Context API
- Routing with React Router
- Testing and debugging
- Responsive design implementation

## Live Demo

https://ks-quiz-game-git-development-jaffdavys-projects.vercel.app
