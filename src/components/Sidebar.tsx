import React from 'react';
import { PlusCircle, MessageSquare } from 'lucide-react';
import { useStore } from '../store/useStore';

export function Sidebar() {
  const { chats, currentChatId, addChat, setCurrentChat } = useStore();

  const createNewChat = () => {
    const newChat = {
      id: Date.now().toString(),
      title: 'New Chat',
      messages: [],
      timestamp: Date.now(),
    };
    addChat(newChat);
  };

  return (
    <div className="w-64 bg-gray-900 h-screen flex flex-col">
      <div className="p-4">
        <button
          onClick={createNewChat}
          className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <PlusCircle size={20} />
          New Chat
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => setCurrentChat(chat.id)}
            className={`w-full text-left p-3 flex items-center gap-3 hover:bg-gray-800 transition-colors ${
              currentChatId === chat.id ? 'bg-gray-800' : ''
            }`}
          >
            <MessageSquare size={18} className="text-gray-400" />
            <span className="text-gray-300 truncate">
              {chat.title || 'New Chat'}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}