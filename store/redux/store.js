import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name:'favorites',
    initialState: {
        mealIds: []
    },
    // function are used to change our state
    reducers: {
        addFavorite: (state, action) => {
            state.mealIds.push(action.payload.id);
        },
        removeFavorite: (state, action) => {
            state.mealIds.splice(state.mealIds.indexOf(action.payload.id),1);
        }
    }
})
export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
export const store = configureStore({
    reducer: {favoriteMeals:favoritesSlice.reducer}
});