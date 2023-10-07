export { LoginModal } from './ui/LoginModal/LoginModal';
export interface LoginSchema {
    username: string;
    password: string;
    isLoading: boolean;
    error?: string;
}

