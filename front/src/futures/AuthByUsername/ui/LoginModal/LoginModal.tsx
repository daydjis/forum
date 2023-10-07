import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    onClose?: ()=> void;
    isOpen: boolean;
}

export const LoginModal = (props: LoginModalProps) => {
    const {
        className,
        onClose,
        isOpen,
    } = props;

    return (
        <Modal
            className={classNames(cls.LoginModal, {}, [className])}
            onClose={onClose}
            isOpen={isOpen}
        >
            <LoginForm />
        </Modal>
    );
};
