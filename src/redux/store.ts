import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import themeReducer from './reducers/themeSlice'

export const store = configureStore({
    reducer: {
        authReducer,
        themeReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch