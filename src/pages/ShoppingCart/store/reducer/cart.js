import * as actionTypes from '../constants'
//  reducer 分支 goods
let data = {
    list: [],
    lolsaleinfo: [],
    saleList: []
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
                if (item.sid == action.data) {
                    item.check = !item.check
                    // 0 -> 1 不选中状态 -> 选中状态
                    // if(item.nums == 0) {
                    //     item.nums = 1
                    // }
                    item.nums == '0' ? item.nums = '1': ''
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
                if(item.sid == action.data.sid) {
                action.data.status == 'add' ? item.nums ++ : item.nums--;
                item.nums == '0' ? item.check = false : ''
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
        case actionTypes.ADD_GOODS:
                let addlist = state.saleList.find(item => item.sid == action.data)
                let addlist2 = state.lolsaleinfo.find(item => item.sid == action.data)
                console.log(addlist,addlist2)
                console.log([...state.list].indexOf(addlist))
                if ([...state.list].indexOf(addlist) === -1 && addlist) {
                    addlist.check = true
                    let newList = [
                        ...state.list,
                        addlist,
                    ] 
                    console.log(newList)
                    return {
                        ...state,
                        list:newList
                    }
                } else if ([...state.list].indexOf(addlist2) === -1 && addlist2) {
                    addlist2.check = true
                    let newList2 = [
                        ...state.list,
                        addlist2
                    ] 
                    console.log(newList2)
                    return {
                        ...state,
                        list:newList2
                    }
                } else return state
        
        case actionTypes.CHANGE_SALEINFO:
                return {
                    ...state,
                    saleList: action.data
            }
        case actionTypes.CAHNGE_LOLSALEINFO: 
            return {
                ...state,
                lolsaleinfo: action.data
            }
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