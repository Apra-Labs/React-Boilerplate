import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IconState {
    icon: IconDefinition | null;
}

const initialState: IconState = {
    icon: null
};

const themeIconSlice = createSlice({
    name: 'themeIcon',
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<IconDefinition>) => {
            state.icon = action.payload;
        }
    }
})

export default themeIconSlice.reducer;
export const { changeTheme } = themeIconSlice.actions;
