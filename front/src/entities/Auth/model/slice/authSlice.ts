import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthSchema } from 'entities/Auth';
import { loginByUsername } from '../service/loginByUsername/loginByUsername';

const initialState: AuthSchema = {
    isLoading: false,
    username: '',
    password: '',
    error: '',
};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload.trim();
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload.trim();
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false;
                window.location.href = '/profile';
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: authActions } = authSlice;
export const { reducer: authReducer } = authSlice;
