


import axios from "axios";


var token="";
axios.defaults.withCredentials=false;
axios.defaults.headers.common['token'] = token;   //请求头
 axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';



//请求拦截器
axios.interceptors.request.use(function(config){

    return config;
},function(error){
    //ajax请求无法发送
    return Promise.reject(error)
})


//响应拦截
axios.interceptors.response.use(function(response){
    //成功接受后台返回的数据
    return response
},function(error){
    // 后台返回的数据失败
    return Promise.reject(error)
})

export default axios
