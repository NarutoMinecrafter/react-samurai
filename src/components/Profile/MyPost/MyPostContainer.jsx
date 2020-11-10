// import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPost from './MyPost';

const mapStateToProps = (state) => { 
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addPost: (value) => {
            dispatch(addPostActionCreator(value))
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer;

// ХэшРоутер