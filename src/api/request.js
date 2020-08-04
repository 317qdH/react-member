import { axiosInstance } from './config'

export const getInfo = (data) => {
    return axiosInstance.post('/carte/home_page',data)
}