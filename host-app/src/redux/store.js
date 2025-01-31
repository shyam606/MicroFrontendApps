// src/app/store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { emailSlice } from './slices/emailSlice';

const rootReducer = combineReducers({
    email: emailSlice.reducer,
})
export const store=configureStore({
    reducer:rootReducer,
})

