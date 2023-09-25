import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import themeIconReducer from './reducers/themeIconSlice';

export const store = configureStore({
    reducer: {
        authReducer,
        themeIconReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch