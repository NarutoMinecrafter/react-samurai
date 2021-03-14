import axios from 'axios';
import { postDataType, loginFormDataType, photosType, profileType } from '../types/type';

const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7802d808-b439-4064-bd0e-6ffed702ca50"
    }
})

export enum resultCodeEnum {
    Succes = 0,
    Error = 1
}

export enum resultCodeCapthaEnum { CapthaIsRequaried = 10 }

export type ResponseType<D> = {
    resultCode: resultCodeEnum
    messages: string[]
    data: D
}

// export const getUsers = (currentPage, pageSize) => instans.get(`users?page=${currentPage}&count=${pageSize}`).then(data)

type getUsersResponseType = {
    items: [
        {
            name: string
            id: number
            photos: photosType
            status: null | string
            followed: boolean
        }
    ]
    totalCount: number
    error: null | string
}

export const usersAPI = {
    getUsers(currentPage: num, pageSize: num, term: str, friend: Null<bool> = null) {
        return instans.get<getUsersResponseType>
            (`users?page=${currentPage}&count=${pageSize}${term && `&term=${term}`}${friend !== null ? `&friend=${friend}` : ''}`).then(res => res.data)
    },
    deleteFollow(id: number) { return instans.delete<ResponseType<{}>>(`follow/${id}`).then(res => res.data) },
    postFollow(id: number) { return instans.post<ResponseType<{}>>(`follow/${id}`).then(res => res.data) },
    // getProfile(userId: number) { return ProfileAPI.getProfile(userId) }
}

type pgotosResponsDataType = { photos : photosType }

export const ProfileAPI = {
    getProfile(userId: number) { return instans.get<profileType>(`profile/${userId}`).then(res => res.data) },
    getStatus(userId: number) { return instans.get<any>(`profile/status/${userId}`).then(res => res.data) },
    updateStatus(status: string) { return instans.put<ResponseType<{}>>(`profile/status`, { status }).then(res => res.data) },
    savePofileDescription(profileData: profileType) { return instans.put<ResponseType<{}>>(`profile`, profileData).then(res => res.data) },
    uploadPhoto(file: any) {
        let formData = new FormData()
        formData.append('image', file)
        return instans.put<ResponseType<pgotosResponsDataType>>(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    }
}

export type getMeResponseDataType = {
    id: number
    email: string
    login: string
}
export const getMe = () => instans.get<ResponseType<getMeResponseDataType>>(`auth/me`).then(res => res.data)

type loginResponseType = {
    resultCode: resultCodeEnum | resultCodeCapthaEnum
    messages: string[]
    data: { userId: number }
}
export const login = (userLoginData: loginFormDataType) => instans.post<loginResponseType>(`auth/login`, userLoginData).then(res => res.data)

export const logout = () => instans.delete<ResponseType<{}>>(`auth/login`).then(res => res.data)

export const getCapthaUrlApi = () => instans.get<{url: str}>(`security/get-captcha-url`).then(res => res.data)

// logout().then((res: AxiosResponse<>) => res.data)
// промисы