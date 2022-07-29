import * as actionTypes from '../constants'
import { getAllGoodsRequest } from '@/api/request'

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

export const addGoods = (data) => ({
    type: actionTypes.ADD_GOODS,
    data
})

export const getAllGoodsAction = () => {
    return (dispatch) => {
        getAllGoodsRequest()
            .then(data => {
                // console.log(data)
                dispatch(setAllGoods(data.data))
            })
    }
}

export const addGoodsAction = (data) => {
    return (dispatch) => {
            dispatch(addGoods(data))
    }
}

export const changeSaleInfo = (data) => ({
    type: actionTypes.CHANGE_SALEINFO,
    data
})

export const getSaleInfo = () => {
    return (dispatch) => {
        getSalesInfoRequest()
            .then(data => {
                dispatch(changeSaleInfo(data.data))
                // dispatch(changeLoading(false))
            })
    }
}

export const changeLolSaleInfo = (data) => ({
    type: actionTypes.CAHNGE_LOLSALEINFO,
    data
})

export const getLolSaleInfo = () => {
    return (dispatch) => {
        getLolSaleRequest()
            .then(data => {
                dispatch(changeLolSaleInfo(data.data))
            })
        
    }
}