import * as actionTypes from '../constants'
//  reducer 分支 goods
let data = {
    list: []

}

export default function(state = data, action) {
    switch (action.type) {
        // reducer 重新计算，财务的角度
        // 选择或反选
        // action { type: actionTyes.CHECK_GOODS, data: goodsId}
        case actionTypes.CHECK_GOODS:
            // 在reducer 重新计算前的状态？  旧状态
            let checkList = state.list
            checkList.map(item => {
                if (item.goodsId == action.data) {
                    item.check = !item.check
                    // 0 -> 1 不选中状态 -> 选中状态
                    item.goodsNum == '0' ? item.goodsNum == '1' : ''
                }
            })
            // 新状态
            return Object.assign({}, state, {
                list: [...checkList]
            })
            break;
        // 商品数量 + - action{ type: CHECK_GOODS_NUM, data: {id, status: 'add|minus'}}  
        case actionTypes.CHNAGE_GOODS_NUM:
            let changeList = state.list
            changeList.map((item) => {
                if(item.goodsId == action.data.goodsId) {
                action.data.status == 'add' ? item.goodsNum ++ : item.goodsNum--;
                item.goodsNum == '0' ? item.check = false : ''
                // -1  UI 去做 item.goodsNum > 0 && <button><button/>
            }
            })
            return Object.assign({}, state, {list: [...changeList]})
            break;
        case actionTypes.CHECK_ALL_GOODS:
            // 全选和取消全选 
            // state 旧状态  保全
            let checkAllList = state.list
            checkAllList.map(item => {
                item.check = !action.data
            })
            // 新状态 完整正确的
            return  Object.assign({}, state, {list: [...checkAllList]})
            break;
        case actionTypes.SET_ALL_GOODS:
            let list = action.data
            list.map(item => item.check = true)
            return Object.assign({}, state, { list: action.data })
        default:
            // let list = state.list
            // list.map(item => {
            //     item.check = true
            // })
            // 返回一个全新的对象
            // 为了搞定引用式赋值
            // 使用了Object.assign  未来  ImmutableJS
            // 将新的状态与原来的状态在物理层面上  绝对区分开
            // redux 有洁癖 新状态， 但是旧的状态是丢了
            // 每一刻的状态都留下来，可以被追溯
            // {
            //     ...state,
            //     list:
            // }
            // assign( )方法，用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象，它将返回目标对象。
            // return Object.assign({}, state, { list: [...list]})
            return state
    }    
}