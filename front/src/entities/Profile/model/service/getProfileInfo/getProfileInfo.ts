import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile } from 'entities/Profile/model/types/Profile';
import {ThunkConfig} from "app/providers/StoreProvider/config/StateSchema";

export const fetchProfileData = createAsyncThunk<Profile, void,  ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        try {
            const response = await thunkAPI.extra.api.get<Profile>('/profile');

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
