import axios from "axios";

export const baseUrl = "https://www.fastmock.site/mock/cfc81e73033082b126f9464c167c4e75/beers"

// 使用设计模式 
// 配置新建一个 axios 实例
const axiosInstance = axios.create({
    baseURL: baseUrl
})

export { axiosInstance }