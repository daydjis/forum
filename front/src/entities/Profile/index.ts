import { Profile, ProfileSchema } from 'entities/Profile/model/types/Profile';
import { fetchProfileData } from './model/service/getProfileInfo/getProfileInfo';
import { profileActions, profileReducer } from './model/slice/ProfileSlice';

export {
    ProfileSchema,
    Profile,
    profileReducer,
    profileActions,
    fetchProfileData,
};
