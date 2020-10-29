// import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPost from './MyPost';

const mapStateToProps = (state) => { 
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer;

// ХэшРоутер