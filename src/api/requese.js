import axios from "axios"
import { Toast,Indicator } from "mint-ui"

var instance = axios.create({
    baseURL: "http://www.liulongbin.top:3005",
    timeout: 2000,
    headers: { "Content-Type": "application/json" }
});

instance.interceptors.request.use(config => {
    Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
    return config;
},
    error => {
        Toast("前端报错")
        Indicator.close();
        return Promise.reject(error);
    });

instance.interceptors.response.use(res => {
    Indicator.close();
    if(res.data.status === 0) return res.data
    if(res.data.status != 0) return Promise.reject(res);
}, error => {
    Toast("后端报错")
    Indicator.close();
    return Promise.reject(error);
});

export default instance