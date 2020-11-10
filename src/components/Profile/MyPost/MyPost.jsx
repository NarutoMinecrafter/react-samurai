import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthcreator, required } from '../../../utils/validator';
import { Textarea } from '../../common/FormsControl/FormsControl';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = (props) => {
    let postElement = props.posts.map(post => <Post like={post.like} message={post.message} ava={post.ava} key={post} />)

    let addPost = (value) => {
        props.addPost(value.textarea)
    }

    return (
        <div className={s.content}>
            <div>
                <div>
                    My post
                </div>
                <NewPostTextReactForm onSubmit={addPost} />
                <div>
                    New Post
            </div>
                {postElement}
                <Post />

            </div>
        </div>
    )
}
const maxLength10 = maxLengthcreator(10)

const NewPostTextForm = (props) => {
    const reset = () => setTimeout(props.reset, 1)

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Textarea} placeholder='input post text...' name='textarea' validate={[required, maxLength10]} /></div>
            <div>
            <button type="submit" onClick={reset}>add post</button>
                
            </div>
        </form>
    )
}

const NewPostTextReactForm = reduxForm({form: 'NewPostText'})(NewPostTextForm)

export default MyPost;

// ХэшРоутер