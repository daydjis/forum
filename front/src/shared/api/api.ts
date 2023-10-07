import axios from 'axios';
import { LOCALSTORAGE_USER_AUTH_KEY } from 'shared/const/localstorage';

export const $api = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        authorization: localStorage.getItem(LOCALSTORAGE_USER_AUTH_KEY),
    },
});
