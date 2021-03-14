import React from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import { maxLengthcreator, required } from '../../../utils/validator'
import { Textarea } from '../../common/FormsControl/FormsControl'
import s from './MyPost.module.css'
import Post from './Post/Post'
import { postDataType } from '../../../types/type'

const MyPost: React.FC<PropsType> = (props) => {
    let postElement = props.posts.map(post => <Post like={post.like} message={post.message} ava={post.ava} key={post.id} id={post.id} />)

    let addPost = (value: addPostValue) => {
        props.addPost(value.addPostText)
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
            </div>
        </div>
    )
}

const maxLength10 = maxLengthcreator(10)

const NewPostTextForm: React.FC<InjectedFormProps<{ addPostText: str }, {}> & {}> = (props) => {
    const reset = () => setTimeout(props.reset, 1)

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Textarea} placeholder='input post text...' name='addPostText' validate={[required, maxLength10]} /></div>
            <div>
                <button type="submit" onClick={reset}>add post</button>

            </div>
        </form>
    )
}

const NewPostTextReactForm = reduxForm<{ addPostText: str }, {}>({ form: 'NewPostText' })(NewPostTextForm)

export default MyPost

type PropsType = { addPost: (value: str) => void, posts: postDataType[] }
type addPostValue = { addPostText: str }

// ХэшРоутер