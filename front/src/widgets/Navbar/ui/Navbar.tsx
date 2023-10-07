import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, {
    memo, useCallback, useState,
} from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'futures/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthUserData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
    const { t } = useTranslation();

    const [IsAuthModal, setIsIsAuthModal] = useState(false);

    const dispatch = useDispatch();

    const authData = useSelector(getAuthUserData);

    const onCloseAuthModal = useCallback(() => {
        setIsIsAuthModal(false);
    }, []);

    const onShowAuthModal = useCallback(() => {
        setIsIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <Button
                    onClick={onLogout}
                    theme={ButtonTheme.INVERTED_OUTLINE}
                    className={cls.links}
                >
                    {t('Выйти')}
                </Button>
            </div>
        );
    }
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button
                onClick={onShowAuthModal}
                theme={ButtonTheme.INVERTED_OUTLINE}
                className={cls.links}
            >
                {t('Войти')}
            </Button>
            <LoginModal onClose={onCloseAuthModal} isOpen={IsAuthModal} />
        </div>
    );
});
