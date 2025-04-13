import { createReducer } from "@reduxjs/toolkit";
import { changeSearch } from "../actions/filterActions";

const initialState = {
    searchTerm: ""
};

const filterReducer = createReducer(initialState, (builder) => {
    builder.addCase(changeSearch, (state, action) => {
        state.searchTerm = action.payload;
    });
});

export default filterReducer;