# Code_ace

**An AI-powered coding platform with integrated interview preparation**

Code_ace is a web application that enables users to practice coding challenges, prepare for technical interviews, and leverage AI-driven assistance. Built with a Node.js/Express backend and a React frontend, the platform offers problem management, live coding, AI hints, and a customizable interview simulator.

## Features

| Category | Description |
| :-- | :-- |
| Coding Challenges | Browse and solve algorithmic problems across various difficulty levels. |
| Interview Simulator | Timed mock interviews with real-world questions and feedback. |
| AI Code Assistant | Contextual AI hints and code completions to guide your solutions. |
| User Authentication | Secure sign-up, login, and session management. |
| Analytics \& Progress | Track solved problems, success rate, and improvement over time. |
| Responsive UI | Mobile and desktop-friendly interface built with React and Tailwind CSS. |

## Tech Stack

| Layer | Technology |
| :-- | :-- |
| Frontend | React, Tailwind CSS |
| Backend | Node.js, Express |
| Database | MongoDB |
| AI Service | OpenAI API (GPT) |
| Testing | Jest, Supertest |
| Environment | dotenv |

## Repository Structure

```
Code_ace/
│
├── BackendContest/      # AI interview question generator module
├── backend/             # Server-side code
│   ├── controllers/     # Route handlers
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API endpoint definitions
│   ├── middleware/      # Auth and error handling
│   ├── utils/           # AI integration and helpers
│   ├── tests/           # Backend tests
│   ├── app.js           # Express app initialization
│   ├── server.js        # Entry point
│   └── .env             # Environment variables
│
├── frontend/            # Client-side code
│   ├── public/          # Static assets
│   ├── src/             # React application source
│   │   ├── components/  # UI components
│   │   ├── pages/       # Route pages
│   │   ├── services/    # API calls and AI hooks
│   │   ├── styles/      # Tailwind configuration
│   │   └── App.jsx      # Main React component
│   ├── package.json     # Frontend dependencies
│   └── tailwind.config.js
│
└── CODE.docx            # Detailed design and requirements document
```


## Installation

1. **Clone the repository**

```bash
git clone https://github.com/sandeep131431/Code_ace.git
cd Code_ace
```

2. **Configure environment variables**
Create a `.env` file in `backend/` with:

```
MONGO_URI=<Your MongoDB connection string>
JWT_SECRET=<Your JWT secret>
OPENAI_API_KEY=<Your OpenAI API key>
```

3. **Install dependencies**

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

4. **Run the application**
In separate terminals:

```bash
# Start backend (port 5000)
cd backend
npm start

# Start frontend (port 3000)
cd ../frontend
npm start
```

5. **Access the app**
Open http://localhost:3000 in your browser.

## Usage

1. **Register or log in.**
2. **Select a coding challenge** by topic or difficulty.
3. **Write and run code** in the integrated editor with AI hints.
4. **Simulate an interview** with timed questions and review feedback.
5. **View analytics** on your progress and revisit unsolved problems.

## Testing

- **Backend tests** use Jest and Supertest:

```bash
cd backend
npm test
```

- **Frontend tests** can be run via:

```bash
cd frontend
npm test
```


## Contributing

Contributions are welcome! Please fork the repository, create feature branches, and submit pull requests. Ensure all new features are tested and documented.

## License

This project is released under the MIT License.

## Contact

For questions or feedback, open an issue on GitHub or reach out to the maintainers directly.

<div style="text-align: center">⁂</div>

[^1]: https://github.com/sandeep131431/Code_ace

[^2]: https://github.com/sandeep131431/Code_ace/tree/main/BackendContest

[^3]: https://github.com/sandeep131431/Code_ace/tree/main/backend

[^4]: https://github.com/sandeep131431/Code_ace/tree/main/frontend

[^5]: https://github.com/sandeep131431/Code_ace/blob/main/CODE.docx

[^6]: https://github.com/sandeep131431/Code_ace/raw/refs/heads/main/CODE.docx
