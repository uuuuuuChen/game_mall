import * as actionTypes from '../constants'
import { getAllGoodsRequest } from '../../api/index'

export const checkGoodsAction = (goodsId) => ({
    type: actionTypes.CHECK_GOODS,
    data: goodsId
})

// data  {goodsId, status: "add|minus"}
export const changeGoodsNumAction = (data) => ({
    type: actionTypes.CHNAGE_GOODS_NUM,
    data: data
})

export const checkAllGoodsAction = (data) => ({
    type: actionTypes.CHECK_ALL_GOODS,
    data
})

export const setAllGoods = (data) => ({
    type: actionTypes.SET_ALL_GOODS,
    data
})

export const getAllGoodsAction = () => {
    return (dispatch) => {
        getAllGoodsRequest()
            .then(data => {
                // console.log(data)
                dispatch(setAllGoods(data))
            })
    }
}