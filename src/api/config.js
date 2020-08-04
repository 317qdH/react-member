import axios from 'axios';

export const baseUrl = 'http://10.10.7.88:8081';

//axios 的实力及拦截器配置
const axiosInstance = axios.create({
    baseURL:baseUrl
})

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err,'网络错误')
    }
)

export {
    axiosInstance
}