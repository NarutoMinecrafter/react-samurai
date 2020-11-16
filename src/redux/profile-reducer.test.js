// import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';
import profileReducer, { deletePost } from './profile-reducer';

test('delete post', () => {
    let action = deletePost(100)

    let state = {
        postData: [
            { id: 1, like: '14', message: 'Я воняю попай', ava: 'https://pbs.twimg.com/profile_images/925138876276060160/s8R_QHzp.jpg' },
            { id: 2, like: '144', message: 'О, я тоже', ava: 'https://s3-eu-west-1.amazonaws.com/printio/assets/realistic_views/round_mouse_pad/detailed/2ed47c77a19f8d140d4199ea1110dee60a008220.jpg?1547720769' },
            { id: 3, like: '4', message: 'Прикольна', ava: 'https://pbs.twimg.com/profile_images/925138876276060160/s8R_QHzp.jpg' },
            { id: 4, like: '1', message: 'Соглы', ava: 'https://s3-eu-west-1.amazonaws.com/printio/assets/realistic_views/round_mouse_pad/detailed/2ed47c77a19f8d140d4199ea1110dee60a008220.jpg?1547720769' },
            { id: 5, like: '16', message: 'Привет, Мир!', ava: 'https://i.ytimg.com/vi/nfb4N8LXs68/maxresdefault.jpg' },
            { id: 6, like: '10', message: 'Hello, World!', ava: 'https://i.ytimg.com/vi/0k_A0kEkKxs/maxresdefault.jpg' },
        ],
    }

    let newState =  profileReducer(state, action)

    expect(newState.postData.length).toBe(6)
});