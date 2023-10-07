import { classNames } from 'shared/lib/classNames/classNames';

interface AuthProps {
    className?: string;
}

export const Auth = (props: AuthProps) => {
    const {
        className,
    } = props;

    return (
        <div className={classNames('', {}, [className])} />
    );
};
