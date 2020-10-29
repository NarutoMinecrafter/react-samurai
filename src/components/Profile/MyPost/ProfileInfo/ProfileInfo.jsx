import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <img src='https://izobrazhenie.net/photo/0-0/2461_713574610.jpg' className={s.cap} />
            <div className={s.user}>
                <div className={s.ava} >
                    <img src='https://sun1-18.userapi.com/oshWOD47s62UCB6DiYbyA-WcYMz9yfKTLSU5sg/9KrG1vY3wtE.jpg'  />
                </div>
                <div className={s.desc} >
                    Валера. <br/>
                    Реальный сэкс
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;