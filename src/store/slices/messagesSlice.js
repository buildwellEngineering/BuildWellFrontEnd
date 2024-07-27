

// messagesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: [],
  reducers: {
    setMessages: (state, action) => {
      return action.payload;
    },
    deleteMessage: (state, action) => {
      return state.filter(message => message._id !== action.payload);
    },
    markMessageAsRead: (state, action) => {
      const message = state.find(message => message._id === action.payload);
      if (message) {
        message.readByAdmin = true;
      }
    }
  },
});

export const { setMessages, deleteMessage, markMessageAsRead } = messagesSlice.actions;
export default messagesSlice.reducer;
