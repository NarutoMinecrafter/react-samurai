// import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../../redux/profile-reducer';
import MyPost from './MyPost';
import { AppStateType } from '../../../redux/redux-store';

const mapStateToProps = (state: AppStateType) => { 
    return {
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = {addPost: actions.addPostActionCreator}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer;

// ХэшРоутер