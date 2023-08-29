import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
    isDarkTheme: boolean;
}

const initialState: ThemeState = {
    isDarkTheme: false,
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setDark: (state) => {
            state.isDarkTheme = true;
        },
        setLight: (state) => {
            state.isDarkTheme = false;
        }
    }
})

export default themeSlice.reducer;
export const { setDark, setLight } = themeSlice.actions;