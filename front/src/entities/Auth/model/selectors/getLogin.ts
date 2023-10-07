import { StateSchema } from 'app/providers/StoreProvider';

export const getAuthForm = (state: StateSchema) => state?.loginForm || null;
