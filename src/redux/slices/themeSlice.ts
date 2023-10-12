import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
    theme: string;
}

const initialState: AuthState = {
    theme: "light"
};

const themeSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.theme = action.payload;
        }
    }
})

export default themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
