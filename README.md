# AI LLM Finance App

This repository contains the **frontend** code for an AI-powered finance application that leverages large language models (LLM) for financial analysis and recommendations. The frontend is developed using **React**, and the backend—built with **FastAPI** and powered by **Zilliz Vector DB (Milvus)**—has been **moved to a private repository**.

## ⚙️ Tech Stack

- **Frontend**: React (JavaScript)
- **Backend**: FastAPI (Python) – _Note: Backend code is not included in this public repository_
- **Database**: Zilliz Vector DB (Milvus) for storing and querying vector embeddings
- **Containerization**: Docker for building and running the application
- **AI**: LLM (e.g., GPT models) for financial analysis and insights

## 🚀 Features

- **Financial Querying**: Users can input financial questions (e.g., stock prices, investment strategies, market analysis) and get insights powered by an LLM model.
- **Vector-based Data Retrieval**: The Zilliz Vector DB enables efficient storage and retrieval of financial data in the form of vector embeddings.
- **Interactive UI**: The React frontend provides a user-friendly interface for interacting with the app.
- **Dockerized Deployment**: The app is containerized using Docker for easy deployment and scaling.

> 🛑 **Disclaimer**: The backend code (FastAPI and Zilliz Vector DB integration) has been moved to a private repository for security and architectural reasons. This public repository only contains the frontend code and code relevant to the UI.

## 📁 Project Structure

```plaintext
.
├── frontend/
│   ├── src/
│   │   ├── components/           # React components
│   │   ├── App.js                # Main React App file
│   │   └── index.js              # Entry point for React application
│   ├── package.json              # React app dependencies
└── README.md                     # This file
