import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import langReducer from './reducers/languageSlice';

export const store = configureStore({
    reducer: {
        authReducer,
        langReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch