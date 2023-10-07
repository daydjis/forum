import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import {useSelector} from "react-redux";
import {getProfileInfo} from "entities/Profile/model/selector/getProfileInfo";
import {Button} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = (props: ProfileCardProps) => {

    const {
        className,
    } = props;

    const profileData= useSelector(getProfileInfo);

    const changeReadOnlyMode = () => {

    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.profileInfoWrapper}>
              <div className={cls.profileInfoInput}>
                  <Input
                      placeholder='Name'
                      value={profileData?.first}
                  />
                  <Input
                      placeholder="Role"
                      value={profileData?.username}
                  />
              </div>
                <img src={profileData?.avatar} className={cls.profileimg} />
            </div>
                <Button
                    className={cls.Profilebtn}
                    onClick={changeReadOnlyMode}
                >
                    Редактировать
                </Button>
        </div>
    );
};
