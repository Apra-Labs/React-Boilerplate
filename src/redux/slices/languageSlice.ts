import { createSlice } from "@reduxjs/toolkit";

interface languageState {
    language: string;
}

const initialState: languageState = {
    language: "English"
};

const languageSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
        }
    }
})

export default languageSlice.reducer;
export const { changeLanguage } = languageSlice.actions;
