import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.content}>
            <div className={s.post}>
                <img src={props.ava} className={s.ava}/>
                {props.message}
                <div className={s.likediv}>
                    {props.like} <img src='https://www.pinclipart.com/picdir/big/539-5397235_got-it-thumbs-up-clipart.png' className={s.like}/>
                </div>
            </div>
        </div>
    )
}

export default Post;