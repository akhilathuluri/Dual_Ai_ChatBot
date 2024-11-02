export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  source?: 'gemini' | 'groq';
  timestamp: number;
}

export interface Chat {
  id: string;
  title: string;
  messages: Message[];
  timestamp: number;
}

export interface ApiKeys {
  gemini: string;
  groq: string;
}