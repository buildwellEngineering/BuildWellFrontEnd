import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from './slices/messagesSlice';
import loginStatusReducer from './slices/LoginStatusSlice';
import sectionsReducer from './slices/SectionsSLice.js'

const store = configureStore({
  reducer: {
    messages: messagesReducer,
    LoginStatus: loginStatusReducer,
    sections: sectionsReducer,
  },
});

export default store;
