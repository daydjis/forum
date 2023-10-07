import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileInfo = (state: StateSchema) => state.profile?.data;
