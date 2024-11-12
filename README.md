# Dual AI Chat 🤖✨

A modern web application that provides simultaneous interactions with both Google's Gemini and Groq AI models, offering real-time comparison of responses in an elegant interface.

![dual-aichatbot](https://github.com/user-attachments/assets/107dae03-164f-4520-a7f2-d2c4473cf9c3)


## ✨ Features

- **Dual AI Responses**: Get simultaneous responses from both Gemini and Groq AI models
- **Real-time Comparison**: Compare different AI perspectives side by side
- **Secure Key Management**: API keys are stored locally in your browser
- **Modern UI/UX**: Clean, responsive interface with dark mode sidebar
- **Markdown Support**: Rich text formatting in AI responses
- **Chat History**: Easy access to previous conversations
- **Mobile Responsive**: Seamless experience across all devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- API keys for:
  - Google Gemini AI
  - Groq AI

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/dual-ai-chat.git
cd dual-ai-chat
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔑 API Key Setup

1. Visit the landing page
2. Click "Go to Chat"
3. Enter your API keys in the modal:
   - Gemini API key from [Google AI Studio](https://ai.google.dev/)
   - Groq API key from [Groq Cloud](https://console.groq.com/)

Your API keys are stored securely in your browser's local storage and are never sent to our servers.

## 🛠️ Tech Stack

- **Frontend Framework**: React
- **Styling**: Tailwind CSS
- **Icons**: Lucide Icons
- **Markdown Rendering**: React Markdown
- **State Management**: Custom store using React hooks
- **Build Tool**: Vite (assumed)

## 📂 Project Structure

```
src/
├── components/
│   ├── ApiKeyModal.tsx    # API key input modal
│   ├── ChatInput.tsx      # Message input component
│   ├── ChatMessage.tsx    # Individual message display
│   ├── LandingPage.tsx    # Welcome/landing page
│   └── Sidebar.tsx        # Chat history sidebar
├── services/
│   └── ai.ts             # AI API integration
├── store/
│   └── useStore.ts       # Application state management
└── types/
    └── chat.ts           # TypeScript interfaces
```

## 💡 Usage

1. **Starting a New Chat**
   - Click "New Chat" in the sidebar
   - Or use the "Go to Chat" button on the landing page

2. **Sending Messages**
   - Type your message in the input field
   - Click "Send" or press Enter
   - Receive responses from both AI models

3. **Viewing History**
   - Access previous chats from the sidebar
   - Click on any chat to load its conversation

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- Google Gemini AI for their powerful language model
- Groq for their advanced AI capabilities
- The React community for amazing tools and libraries

## 📧 Support

For support, please open an issue in the GitHub repository or contact the maintainers.

---

Made with ❤️ by Athuluri Akhil
