// 外界通过调用api文件夹中的index.js中的一些方法就或从网络获取数据
// 1.导入封装好的网络请求工具类
import http from './axios'

// 2.封装不同API请求的函数
// 2.1获取全局底部工具条数据
// export const getNavbar = function () {
//   return http.get("default/navbar")
// };

export const getNavbar = () => http.get("");

