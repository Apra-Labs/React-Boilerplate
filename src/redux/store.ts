import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import langReducer from './slices/languageSlice';

export const store = configureStore({
    reducer: {
        authReducer,
        langReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch