import React from 'react';
import { ApiKeyModal } from './components/ApiKeyModal';
import { Sidebar } from './components/Sidebar';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { LandingPage } from './components/LandingPage';
import { useStore } from './store/useStore';

function App() {
  const { currentChatId, chats } = useStore();
  const currentChat = chats.find((chat) => chat.id === currentChatId);
  const showLandingPage = !currentChatId && chats.length === 0;

  return (
    <div className="flex h-screen bg-gray-100">
      <ApiKeyModal />
      {!showLandingPage && <Sidebar />}
      
      <main className="flex-1 flex flex-col">
        {showLandingPage ? (
          <LandingPage />
        ) : currentChat ? (
          <>
            <div className="flex-1 overflow-y-auto">
              <div className="max-w-6xl mx-auto">
                {currentChat.messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
              </div>
            </div>
            <ChatInput />
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a chat or create a new one to get started
          </div>
        )}
      </main>
    </div>
  );
}

export default App;