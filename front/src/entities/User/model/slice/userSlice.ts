import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from 'entities/User/model/types/user';
import { LOCALSTORAGE_USER_AUTH_KEY } from 'shared/const/localstorage';

const initialState: UserSchema = {
};
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        InitAuthData: (state) => {
            const user = localStorage.getItem(LOCALSTORAGE_USER_AUTH_KEY);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(LOCALSTORAGE_USER_AUTH_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
