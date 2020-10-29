import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {

    let postElement = props.posts.map(post => <Post like={post.like} message={post.message} ava={post.ava} key={post} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost()
    }
    
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text)
    }

    return (
        <div className={s.content}>
            <div>
                <div>
                    My post
                </div>
                <div>
                    <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={addPost} >add post</button>
                </div>
                <div>
                    New Post
            </div>
                {postElement}
                <Post />
                
            </div>
        </div>
    )
}

export default MyPost;

// ХэшРоутер