import React, { useState } from 'react';
import { KeyRound } from 'lucide-react';
import { useStore } from '../store/useStore';

export function ApiKeyModal() {
  const [geminiKey, setGeminiKey] = useState('');
  const [groqKey, setGroqKey] = useState('');
  const setApiKeys = useStore((state) => state.setApiKeys);
  const apiKeys = useStore((state) => state.apiKeys);

  if (apiKeys) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApiKeys({ gemini: geminiKey, groq: groqKey });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <KeyRound className="w-12 h-12 text-indigo-600" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-6">Welcome to Dual AI Chat</h2>
        <p className="text-gray-600 mb-6 text-center">
          Please enter your API keys to get started
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Google Gemini API Key
            </label>
            <input
              type="password"
              value={geminiKey}
              onChange={(e) => setGeminiKey(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Groq API Key
            </label>
            <input
              type="password"
              value={groqKey}
              onChange={(e) => setGroqKey(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Start Chatting
          </button>
        </form>
      </div>
    </div>
  );
}