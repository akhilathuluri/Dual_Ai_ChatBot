import { GoogleGenerativeAI } from '@google/generative-ai';

interface GroqResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export class AIError extends Error {
  constructor(
    message: string,
    public provider: 'gemini' | 'groq',
    public originalError?: unknown
  ) {
    super(message);
    this.name = 'AIError';
  }
}

export async function getGeminiResponse(apiKey: string, prompt: string) {
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    throw new AIError(
      'Failed to get response from Gemini API. Please check your API key and try again.',
      'gemini',
      error
    );
  }
}

export async function getGroqResponse(apiKey: string, prompt: string) {
  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mixtral-8x7b-32768',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
        max_tokens: 1024,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new AIError(
        `Groq API error: ${errorData.error?.message || response.statusText}`,
        'groq',
        errorData
      );
    }

    const data = await response.json() as GroqResponse;
    
    if (!data.choices?.[0]?.message?.content) {
      throw new AIError(
        'Invalid response format from Groq API',
        'groq'
      );
    }

    return data.choices[0].message.content;
  } catch (error) {
    if (error instanceof AIError) {
      throw error;
    }
    throw new AIError(
      'Failed to get response from Groq API. Please check your API key and try again.',
      'groq',
      error
    );
  }
}