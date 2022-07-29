// import { createStore, applyMiddleware, compose } from "redux";
// import reducer from "./reducer";
// import thunk from 'redux-thunk' // 异步reducer 变化
// import logger from 'redux-logger' // redux 调试更优秀
// // 合并函数
// // 没有安装redux-dev-tools  compose 百搭 提前去合并一下，为了不报错
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducer,
//     // 多个中间件  compose合并成一个中间件对象
//     compose( 
//         // UI组件 中间件s redux-thunk -> applyMiddleware 启用(进入中间件序列)  logger  Store
//         composeEnhancers(applyMiddleware(thunk)),  // 引入一个中间件 完成异步action请求
//         applyMiddleware(logger)  // 加入中间件，启用logger
//     )    
// )

// export default store

import  reducer  from "./reducer/cart";
import * as actionCreators1 from './actionCreators'
export {
    reducer,
    actionCreators1
}