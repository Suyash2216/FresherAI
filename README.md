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

*Architecture diagram is a conceptual overview. Verify the actual request flow and service connections against the current codebase.*

## 📂 Project Structure

The backend is organized into separate services, with shared infrastructure where applicable.

```text
FresherAI/
├── API Gateway
├── Auth Service
├── Resume Service
├── Interview Service
├── Roadmap Service
├── Billing Service
└── Shared Utilities
```

*Update this structure to match the actual folder names in your repository.*

## 🔄 Resume Analysis Workflow

1. The user uploads a resume in PDF format.
2. The Resume Service receives the file.
3. The application extracts text from the PDF.
4. The extracted content is passed to the AI-powered resume workflow.
5. The Gemini API helps generate resume feedback.
6. The application processes the response into structured resume data.
7. Resume data is stored in MongoDB, with Redis used to cache frequently requested results.
8. Subsequent retrieval requests can use cached data when available.

## ⚙️ Getting Started

### Prerequisites

- Node.js and npm
- MongoDB connection
- Redis instance
- Google Gemini API key

### Installation

Clone the repository:

```bash
git clone https://github.com/Suyash2216/FresherAI.git
cd FresherAI
```

Install dependencies for the relevant application and service directories:

```bash
npm install
```

If the project uses separate `package.json` files for individual services, install dependencies within each required directory.

### Environment Variables

Configure the environment variables required by your services. Depending on your implementation, these may include:

```env
MONGODB_URI=your_mongodb_connection_string
REDIS_URL=your_redis_connection_url
GEMINI_API_KEY=your_gemini_api_key
JWT_SECRET=your_jwt_secret
```

Use the exact variable names expected by your code. Keep real credentials in local environment files and never commit secrets to GitHub.

### Run the Application

Start each service using the scripts defined in its `package.json`. Start the API Gateway and required backend services, then launch the frontend according to the project's configuration.

Refer to the individual service scripts and configuration files for exact commands.

## 🔒 Security Considerations

- Keep API keys and database credentials out of source control.
- Protect private endpoints with appropriate authentication and authorization middleware.
- Validate uploaded files and handle invalid PDF content safely.
- Avoid logging sensitive user or resume information.

## 🎯 Project Goals

FresherAI explores the integration of generative AI, backend service separation, document processing, authentication, and caching in a career-focused application.

The project demonstrates practical work with full-stack development, API design, AI integration, and backend architecture.

## 👨‍💻 Developer

**Suyash Pandey**

- GitHub: [@Suyash2216](https://github.com/Suyash2216)
- LinkedIn: [Suyash Pandey](https://www.linkedin.com/in/suyash-pandey-7a468b2b8/)
- LeetCode: [suyashpandey22](https://leetcode.com/u/suyashpandey22/)

## 📌 Future Improvements

- Add a live demo and application screenshots.
- Add automated tests for core API workflows.
- Improve error handling and request validation.
- Document API endpoints and service-to-service communication.
- Add deployment instructions and architecture diagrams based on the final implementation.

---

**FresherAI — Build a stronger resume. Prepare with confidence. Plan your career.**
