import axios from 'axios'

const url = 'http://127.0.0.1:8000/api/'

export const addUser = (data) => {
    data.photo = data.photo[0]
    data.signature = data.signature[0]
    data.username = data.email
    return axios.post(`${url}user/`,data,{headers:{'Content-Type':'multipart/form-data'}})
}

export const addDefaulter = (data) => {
    return axios.post(`${url}defaulter/`,data)
}
