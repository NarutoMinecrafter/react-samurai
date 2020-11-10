import React from 'react'
import s from './Users.module.css';
import defaultAvatar from '../img/userAvatar.jpg'
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../DAL/api';

const Users = (props) => {
    let countPage = Math.ceil(props.totalCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= countPage; i++) {
        pages.push(i)
    }

    return (
        <div>
            USERS
            <div>
                {
                    pages.map(p => {
                        return <samp
                            className={props.currentPage === p && s.activePage}
                            onClick={() => props.pageChenget(p)}
                        >{p} </samp>
                    })
                }
            </div>
            {props.users.map(u => (
                <div key={u.id} className={s.user_container} >
                    <div className={s.ava} >
                        <NavLink to={`/profile/${u.id}`}>
                            <div> <img src={u.photos.small ? u.photos.small : defaultAvatar} alt='' /> </div>
                        </NavLink>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingProgress.some(id => id === u.id)} 
                                onClick={ () => props.deleteFollow(u.id) } >UnFollow</button>

                                : <button disabled={props.followingProgress.some(id => id === u.id)} 
                                onClick={ () => props.postFollow(u.id) } >Follow</button>}
                        </div>
                    </div>
                    <div className={s.description} >
                        <div className={s.n} >{u.name}</div>
                        <div className={s.s} >{"u.status"}</div>
                        <div className={s.lc} >{"u.location.country"}</div>
                        <div className={s.ls} >{"u.location.sity"}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Users