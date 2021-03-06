import axios from "axios";
// import { message } from "antd";

let baseURL = "http://localhost:8877/api/v1"; // 本地服务器

// 创建axios实例
const fetch = axios.create({
  baseURL: baseURL,
  timeout: 7000, // 超时设置
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

// 封装请求拦截器
fetch.interceptors.request.use((config) => {
  // 在这里做一些检测或者包装等处理
  // console.log('请求拦截', config)
  // 鉴权 token添加
  config.headers.Authorization = localStorage.getItem("token") || "";
  return config;
});

// 封装响应拦截器
fetch.interceptors.response.use(
  (response) => {
    // let code = response.data.code;
    // 请求成功
    // console.log("响应拦截", response);
    // 数据过滤，根据后端标识字符来进行数据
    // if (code == 0) {
    //   return response.data.data;
    // } else if (code == 1) {
    //   message.error("token 无效");
    //   return response;
    // } else if (code == 2) {
    //   message.warning(response.data.message);
    // } else {
    //   console.log("");
    // }

    if (response.data && response.data.success) {
      return response.data.data;
    } else {
      console.log("网络异步，请稍后再试");
    }
  },
  (error) => {
    // 请求失败;
    return Promise.reject(error);
  }
);

export default fetch;
