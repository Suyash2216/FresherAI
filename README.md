# 🚀 FresherAI — AI-Powered Career Platform

**Your AI-powered companion for smarter resumes, interview preparation, and career growth.**

FresherAI is an AI-powered career platform designed to help users improve their resumes, prepare for interviews, and navigate their career journey with personalized guidance. It combines modern web technologies with generative AI to deliver intelligent career assistance through a full-stack application.

## ✨ Key Features

- **AI Resume Analysis:** Analyze uploaded resumes and generate AI-powered feedback to help identify areas for improvement.
- **Resume Text Extraction:** Process uploaded PDF resumes and extract text for AI-based analysis.
- **Interview Preparation:** Support interview practice and preparation through AI-assisted functionality.
- **Personalized Career Roadmaps:** Provide career guidance and roadmaps based on the platform's implemented workflows.
- **Microservices Architecture:** Organize backend functionality into dedicated services for authentication, resume processing, interviews, roadmaps, and billing.
- **API Gateway:** Route client requests to backend services and centralize request-level middleware.
- **Authentication and Authorization:** Use JWT-based authentication to protect application endpoints.
- **Redis Caching:** Cache resume data to reduce repeated database reads and improve retrieval efficiency.

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| Frontend | React.js |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Caching | Redis |
| AI Integration | Google Gemini API |
| Authentication | JSON Web Tokens (JWT) |
| Architecture | Microservices, API Gateway |
| File Processing | PDF text extraction |
| Development Tools | Git, GitHub, Postman, npm |

## 🏗️ Architecture Overview

FresherAI uses a service-oriented backend structure to separate responsibilities and keep application functionality organized.

```text
                    Client Application
                           |
                           v
                      API Gateway
                           |
                  Authentication Check
                           |
          +----------------+----------------+
          |                |                |
          v                v                v
    Resume Service   Interview Service  Roadmap Service
          |                |                |
          v                v                v
    PDF Text Extract   AI Workflows     Career Guidance
          |
          v
      Gemini API
          |
          v
    Structured Feedback
          |
          v
     MongoDB + Redis
```

*Architecture diagram is a conceptual overview. Verify
