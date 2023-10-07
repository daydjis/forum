import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { memo, useCallback } from 'react';
import {  useSelector } from 'react-redux';
import {authActions, authReducer} from 'entities/Auth/model/slice/authSlice';
import { Input } from 'shared/ui/Input/Input';
import { loginByUsername } from 'entities/Auth/model/service/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {getLoginUserName} from "entities/Auth/model/selectors/getLoginUserName";
import {getLoginPassword} from "entities/Auth/model/selectors/getLoginPassword";
import {getLoginLoading} from "entities/Auth/model/selectors/getLoginLoading";
import {getLoginError} from "entities/Auth/model/selectors/getLoginError";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo((props: LoginFormProps) => {
    const {
        className,
    } = props;

    const initialReducers: ReducersList = {
        loginForm: authReducer,
    };

    const dispatch  = useAppDispatch();

    const username = useSelector(getLoginUserName);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginLoading);
    const error = useSelector(getLoginError);


    const enterLogin = useCallback((value:string) => {
        dispatch(authActions.setUsername(value));
    }, [dispatch]);

    const enterPassword = useCallback((value:string) => {
        dispatch(authActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        await dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    const t = useTranslation();

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title="Форма авторизации" />
            {error && <Text text={error} theme={TextTheme.ERROR} />}
            <Input
                className={cls.input}
                placeholder="введите логин"
                type="text"
                onChange={enterLogin}
                value={username}
            />
            <Input
                className={cls.input}
                placeholder="введите пароль"
                type="text"
                onChange={enterPassword}
                value={password}
            />
            <Button
                onClick={onLoginClick}
                disabled={isLoading}
            >
                Войти
            </Button>
        </div>
        </DynamicModuleLoader>
    );
});
