import { postFollow, deleteFollow } from './users-reducer';
import { usersAPI, resultCodeEnum, ResponseType } from '../DAL/api';
jest.mock('../DAL/api')
const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const result:ResponseType<{}> = {
    resultCode: resultCodeEnum.Succes,
    messages: [],
    data: {}
}

usersAPIMock.postFollow.mockReturnValue(Promise.resolve(result))

test("f", async () => {
    const Thunk = postFollow(1)

    const dispathMock = jest.fn()
    const getStatehMock = jest.fn()

    await Thunk(dispathMock, getStatehMock, {})

    expect(dispathMock).toBeCalledTimes(3)
})

test("unf", async () => {
    const Thunk = deleteFollow(1)

    const dispathMock = jest.fn()
    const getStatehMock = jest.fn()

    await Thunk(dispathMock, getStatehMock, {})

    expect(dispathMock).toBeCalledTimes(3)
})