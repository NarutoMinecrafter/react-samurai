import { initialStateType, actions } from './users-reducer';
import usersReducer from './users-reducer';

let state: initialStateType

beforeEach(() => 
//@ts-ignore
state = {
    users: [
        { name: 'Ivan', id: 0, followed: false, photos: { large: null, small: null } },
        { name: 'Ivan', id: 1, followed: false, photos: { large: null, small: null } },
        { name: 'Ivan', id: 2, followed: true, photos: { large: null, small: null } },
        { name: 'Ivan', id: 3, followed: true, photos: { large: null, small: null } }
    ],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFeching: true,
    followingProgress: []
}
)
test("follow succees", () => {
    const newState = usersReducer(state, actions.follow(1))

    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})

test("unfollow succees", () => {
    const newState = usersReducer(state, actions.unFollow(3))

    expect(newState.users[2].followed).toBeTruthy()
    expect(newState.users[3].followed).toBeFalsy()
})