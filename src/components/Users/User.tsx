import React from 'react'
import s from './Users.module.css'
import defaultAvatar from '../img/userAvatar.jpg'
import { NavLink } from 'react-router-dom'
import { usersType } from '../../types/type'

type PropsType = {
    u: usersType
    followingProgress: Array<number>
    deleteFollow: (userid: number) => void
    postFollow: (userid: number) => void
}

const User: React.FC<PropsType> = ({ u, followingProgress, deleteFollow, postFollow }) => {
    return (
        <div className={s.user_container} >
            <div className={s.ava} >
                <NavLink to={`/profile/${u.id}`}>
                    <div> <img src={u.photos.small ? u.photos.small : defaultAvatar} alt='' /> </div>
                </NavLink>
                <div>
                    {u.followed
                        ? <button disabled={followingProgress.some(id => id === u.id)}
                            onClick={() => deleteFollow(u.id)} >UnFollow</button>

                        : <button disabled={followingProgress.some(id => id === u.id)}
                            onClick={() => postFollow(u.id)} >Follow</button>}
                </div>
            </div>
            <div className={s.description} >
                <div className={s.n} >{u.name}</div>
                <div className={s.s} >{"u.status"}</div>
                <div className={s.lc} >{"u.location.country"}</div>
                <div className={s.ls} >{"u.location.sity"}</div>
            </div>
        </div>
    )
}

export default User