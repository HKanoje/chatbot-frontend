# Orbot - A RAG-based Chatbot Frontend

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Live_Demo-black?style=for-the-badge&logo=vercel)](https://chatbot-frontend-one-ashy.vercel.app/)

This is the frontend for Orbot, a powerful and intuitive chatbot powered by a Retrieval-Augmented Generation (RAG) backend. This application provides a clean, modern, and user-friendly interface for interacting with the chatbot, including support for file uploads to enrich the conversation context.


## ✨ Key Features

- **Modern Chat Interface:** A clean and intuitive chat interface for seamless conversations.
- **File Uploads:** Supports PDF, images (JPEG, PNG), Excel (XLS, XLSX), CSV, and text files to provide more context to the chatbot.
- **Conversation History:** Keeps track of the current conversation, allowing the chatbot to maintain context.
- **Loading Indicators:** Provides visual feedback while the AI is processing a response.
- **Error Handling:** Gracefully handles and displays errors from the backend.
- **Responsive Design:** Built with Tailwind CSS for a great experience on all screen sizes.

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/chatbot-frontend.git
    cd chatbot-frontend
    ```

2.  **Install the dependencies:**

    ```bash
    npm install
    ```

3.  **Set up the environment variables:**

    Create a `.env` file in the root of the project and add the following:

    ```
    VITE_API_BASE_URL=http://localhost:8000
    ```

    Replace `http://localhost:8000` with the URL of your running backend API.

### Running the Development Server

To start the development server, run the following command:

```bash
npm run dev
```

This will start the application in development mode. Open [http://localhost:5173](http://localhost:5173) to view it in the browser. The page will reload if you make edits.

## 🛠️ Project Structure

The project is structured as follows:

```
/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── chat/
│   │   │   ├── ChatInput.jsx
│   │   │   ├── ChatMessage.jsx
│   │   │   ├── Header.jsx
│   │   │   └── LoadingIndicator.jsx
│   │   └── common/
│   ├── hooks/
│   │   └── useChat.js
│   ├── pages/
│   │   └── ChatPage.jsx
│   ├── services/
│   │   └── chatService.js
│   ├── utils/
│   │   ├── constants.js
│   │   └── fileValidator.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.production
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

-   **`src/components`**: Contains reusable React components.
-   **`src/hooks`**: Contains custom React hooks, with `useChat.js` managing the chat state and logic.
-   **`src/pages`**: Contains the main pages of the application.
-   **`src/services`**: Handles communication with the backend API.
-   **`src/utils`**: Contains constants and utility functions.

## 📜 Available Scripts

In the project directory, you can run:

-   `npm run dev`: Runs the app in the development mode.
-   `npm run build`: Builds the app for production to the `dist` folder.
-   `npm run lint`: Lints the code using ESLint.
-   `npm run preview`: Serves the production build locally.

## 📦 Building for Production

To build the application for production, run the following command:

```bash
npm run build
```

This will create a `dist` folder in the project root with the optimized and minified production build of the application.

## 🤖 Backend API

This frontend requires a running instance of the Orbot RAG backend. You can find the repository for the backend [here](https://github.com/HKanoje/chatbot-backend.git).

The frontend communicates with the backend via a REST API. The base URL for the API is configured in the `.env` file.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.