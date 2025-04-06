# AI LLM Finance App

This repository contains the code for an AI-powered finance application that leverages large language models (LLM) for financial analysis and recommendations. The backend is built using **FastAPI**, with the **Zilliz Vector Database** for efficient retrieval of vector-based data, and the frontend is developed using **React**. This app is containerized using **Docker** for easy deployment.

## Tech Stack

- **Backend**: FastAPI (Python)
- **Frontend**: React (JavaScript)
- **Database**: Zilliz Vector DB (Milvus) for storing and querying vector embeddings
- **Containerization**: Docker for building and running the application
- **AI**: LLM (e.g., GPT models) for financial analysis and insights

## Features

- **Financial Querying**: Users can input financial questions (e.g., stock prices, investment strategies, market analysis) and get insights powered by an LLM model.
- **Vector-based Data Retrieval**: The Zilliz Vector DB enables efficient storage and retrieval of financial data in the form of vector embeddings.
- **Interactive UI**: The React frontend provides a user-friendly interface for interacting with the app.
- **Dockerized Deployment**: The entire app is containerized using Docker, making it easy to deploy and scale.

## Project Structure

```plaintext
.
├── backend/
│   ├── app/
│   │   ├── main.py               # FastAPI application entry point
│   │   ├── models.py             # Database models and Pydantic schemas
│   │   ├── services/             # LLM service, Vector DB service, etc.
│   │   └── utils/                # Helper functions and utilities
│   ├── Dockerfile                # Dockerfile for backend
│   ├── requirements.txt          # Python dependencies
│   └── .env                      # Environment variables for FastAPI app
├── frontend/
│   ├── src/
│   │   ├── components/           # React components
│   │   ├── App.js                # Main React App file
│   │   └── index.js              # Entry point for React application
│   ├── Dockerfile                # Dockerfile for frontend
│   ├── package.json              # React app dependencies
│   └── .env                      # React app environment variables
├── docker-compose.yml            # Docker Compose file to run both services
└── README.md                     # This file
