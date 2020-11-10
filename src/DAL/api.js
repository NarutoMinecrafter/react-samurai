import * as axios from 'axios';

let data = response => response.data

const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "7802d808-b439-4064-bd0e-6ffed702ca50"
    }
})

// export const getUsers = (currentPage, pageSize) => instans.get(`users?page=${currentPage}&count=${pageSize}`).then(data)

export const usersAPI = {
    getUsers(currentPage, pageSize) {return instans.get(`users?page=${currentPage}&count=${pageSize}`).then(data)},
    deleteFollow(id) {return instans.delete(`follow/${id}`).then(data)},
    postFollow(id) {return instans.post(`follow/${id}`).then(data)},
    getProfile(userId) {return ProfileAPI.getProfile(userId)}
}

export const ProfileAPI = {
    getProfile(userId) {return instans.get(`profile/${userId}`).then(data)},
    getStatus(userId) {return instans.get(`profile/status/${userId}`).then(data)},
    updateStatus(status) {return instans.put(`profile/status`, {status}).then(data)}
}

export const getMe = () => instans.get(`auth/me`).then(data) 

export const login = (userLoginData) => instans.post(`auth/login`, userLoginData).then(data)

export const logout = () => instans.delete(`auth/login`).then(data)

// промисы