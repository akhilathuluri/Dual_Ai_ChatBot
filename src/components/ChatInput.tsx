import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useStore } from '../store/useStore';
import { getGeminiResponse, getGroqResponse, AIError } from '../services/ai';

export function ChatInput() {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { currentChatId, apiKeys, addMessage } = useStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !currentChatId || !apiKeys) return;

    setError(null);
    const userMessage = {
      id: Date.now().toString(),
      content: input,
      role: 'user' as const,
      timestamp: Date.now(),
    };

    addMessage(currentChatId, userMessage);
    setInput('');
    setIsLoading(true);

    try {
      const [geminiResponse, groqResponse] = await Promise.allSettled([
        getGeminiResponse(apiKeys.gemini, input),
        getGroqResponse(apiKeys.groq, input),
      ]);

      // Handle Gemini response
      if (geminiResponse.status === 'fulfilled') {
        addMessage(currentChatId, {
          id: Date.now().toString() + '-gemini',
          content: geminiResponse.value,
          role: 'assistant',
          source: 'gemini',
          timestamp: Date.now(),
        });
      } else if (geminiResponse.reason instanceof AIError) {
        addMessage(currentChatId, {
          id: Date.now().toString() + '-gemini-error',
          content: `Error: ${geminiResponse.reason.message}`,
          role: 'assistant',
          source: 'gemini',
          timestamp: Date.now(),
        });
      }

      // Handle Groq response
      if (groqResponse.status === 'fulfilled') {
        addMessage(currentChatId, {
          id: Date.now().toString() + '-groq',
          content: groqResponse.value,
          role: 'assistant',
          source: 'groq',
          timestamp: Date.now(),
        });
      } else if (groqResponse.reason instanceof AIError) {
        addMessage(currentChatId, {
          id: Date.now().toString() + '-groq-error',
          content: `Error: ${groqResponse.reason.message}`,
          role: 'assistant',
          source: 'groq',
          timestamp: Date.now(),
        });
      }
    } catch (error) {
      setError('Failed to process responses. Please try again.');
      console.error('Error getting AI responses:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="border-t bg-white p-4">
      {error && (
        <div className="max-w-3xl mx-auto mb-4">
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg">
            {error}
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 flex items-center gap-2"
        >
          <Send size={20} />
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
}