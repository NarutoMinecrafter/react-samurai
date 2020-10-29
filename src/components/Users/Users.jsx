import Axios from 'axios';
import React  from 'react'
import s from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers({ users:[
                { id: 1, followed: true, location: {sity: 'Konoha', country: 'Fire'}, status: 'Не  смейте меня недооценивать', fullname: 'Naruto', ava: 'https://pbs.twimg.com/profile_images/925138876276060160/s8R_QHzp.jpg' },
                { id: 2, followed: true, location: {sity: 'Kiev', country: 'Ukranian'}, status: 'Попа бегемота', fullname: 'Dmitry', ava: 'https://s3-eu-west-1.amazonaws.com/printio/assets/realistic_views/round_mouse_pad/detailed/2ed47c77a19f8d140d4199ea1110dee60a008220.jpg?1547720769' },
                { id: 3, followed: false, location: {sity: 'Moscow', country: 'Russia'}, status: 'Ваш хейт это просто мой пиар', fullname: 'Vadim', ava: 'https://pbs.twimg.com/profile_images/925138876276060160/s8R_QHzp.jpg' },
                { id: 4, followed: false, location: {sity: 'Rostov', country: 'Russia'}, status: 'it-kamasutra.com', fullname: 'Ivan', ava: 'https://s3-eu-west-1.amazonaws.com/printio/assets/realistic_views/round_mouse_pad/detailed/2ed47c77a19f8d140d4199ea1110dee60a008220.jpg?1547720769' },
                { id: 5, followed: true, location: {sity: 'Odesa', country: 'Ukranian'}, status: 'Зелёный няша крипер', fullname: 'Ира', ava: 'https://i.ytimg.com/vi/nfb4N8LXs68/maxresdefault.jpg' },
                { id: 6, followed: false, location: {sity: 'Minsk', country: 'Belarus'}, status: '...', fullname: 'Vasya', ava: 'https://i.ytimg.com/vi/0k_A0kEkKxs/maxresdefault.jpg' },
            ]
        })
    }
    
    return(
        <div>
            USERS
            {props.users.map( u => (
                <div key={u.id} className={s.user_container} >
                    <div className={s.ava} >
                        <div> <img src={u.ava} alt='' /> </div>
                        <div>
                            {u.followed 
                                ? <button onClick={ () => { props.unfollow(u.id) } } >UnFollow</button> 
                                : <button onClick={ () => { props.follow(u.id) } } >Follow</button>}
                        </div>
                    </div>
                    <div className={s.description} >
                        <div className={s.n} >{u.fullname}</div>
                        <div className={s.s} >{u.status}</div>
                        <div className={s.lc} >{u.location.country}</div>
                        <div className={s.ls} >{u.location.sity}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Users