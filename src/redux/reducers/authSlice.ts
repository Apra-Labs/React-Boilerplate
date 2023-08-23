import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
    name: string;
    email: string;
    phoneNumber: string;
}

interface AuthState {
    isLoggedIn: boolean;
    user: any;
}

const initialState: AuthState = {
    isLoggedIn: false,
    user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.isLoggedIn = true;
            state.user = action.payload
        },
        logOut: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        }
    }
})

export default authSlice.reducer;
export const { login, logOut } = authSlice.actions;
