import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { LOCALSTORAGE_USER_AUTH_KEY } from 'shared/const/localstorage';

interface loginByUsernameProps {
    username: string,
    password: string
}

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps, {rejectValue: string}>(
    'login/loginByUsername',
    async (authData, { extra, dispatch, rejectWithValue }) => {
        try {
            // @ts-ignore
            const response = await extra.api.post<User>('/login', {
                ...authData,
            });

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(LOCALSTORAGE_USER_AUTH_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
