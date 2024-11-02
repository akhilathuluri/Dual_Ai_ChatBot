import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Chat, ApiKeys } from '../types/chat';

interface State {
  chats: Chat[];
  currentChatId: string | null;
  apiKeys: ApiKeys | null;
  setApiKeys: (keys: ApiKeys) => void;
  addChat: (chat: Chat) => void;
  setCurrentChat: (id: string) => void;
  addMessage: (chatId: string, message: Message) => void;
}

export const useStore = create<State>()(
  persist(
    (set) => ({
      chats: [],
      currentChatId: null,
      apiKeys: null,
      setApiKeys: (keys) => set({ apiKeys: keys }),
      addChat: (chat) => set((state) => ({ 
        chats: [...state.chats, chat],
        currentChatId: chat.id
      })),
      setCurrentChat: (id) => set({ currentChatId: id }),
      addMessage: (chatId, message) => set((state) => ({
        chats: state.chats.map((chat) =>
          chat.id === chatId
            ? { ...chat, messages: [...chat.messages, message] }
            : chat
        ),
      })),
    }),
    {
      name: 'chat-storage',
    }
  )
);