import React from 'react';
import { Sparkles, Bot, Zap, Brain, ArrowRight } from 'lucide-react';
import { useStore } from '../store/useStore';

export function LandingPage() {
  const { addChat } = useStore();

  const handleStartChat = () => {
    const newChat = {
      id: Date.now().toString(),
      title: 'New Chat',
      messages: [],
      timestamp: Date.now(),
    };
    addChat(newChat);
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Dual AI Chat Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Experience the power of two leading AI models in one seamless conversation
          </p>
          <button
            onClick={handleStartChat}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
          >
            Go to Chat <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Dual AI Responses</h3>
            <p className="text-gray-600">
              Get responses from both Gemini and Groq simultaneously, comparing their unique perspectives
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Bot className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Advanced AI Models</h3>
            <p className="text-gray-600">
              Powered by Google's Gemini and Groq's advanced language models
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-time Comparison</h3>
            <p className="text-gray-600">
              Compare responses in real-time to get the most comprehensive answers
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-indigo-100 mb-6">
                Enter your API keys and experience the future of AI chat interactions
              </p>
              <div className="flex items-center gap-4">
                <Brain className="w-12 h-12 text-indigo-200" />
                <p className="text-sm text-indigo-200">
                  Your keys are stored locally and never leave your browser
                </p>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400&h=400"
              alt="AI Visualization"
              className="w-64 h-64 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}