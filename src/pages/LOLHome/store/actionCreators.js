import {
    getActivityLolInfoRequest,
    getLolSaleRequest,
    getLolInfoRequest,
    getLolGiftRequest,
    
}
from '@/api/request'
import * as actionTypes from './constant'

export const changeActivityLolInfo = (data) => ({
    type: actionTypes.CAHNGE_ACTIVITYLOLINFO,
    data
})
export const getActivityLolInfo = () => {
    return (dispatch) => {
        getActivityLolInfoRequest()
            .then(data =>{
                const action = changeActivityLolInfo(data.data)
                dispatch(action)
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

export const changeLolGift = (data) => ({
    type: actionTypes.CAHNGE_LOLGIFT,
    data
})

export const getLolGift = () => {
    return (dispatch) => {
        getLolGiftRequest()
            .then(data => {
                dispatch(changeLolGift(data.data))
            })
    }
}

export const changeLolInfo = (data) => ({
    type: actionTypes.CAHNGE_LOLINFO,
    data
})

export const getLolInfo = () => {
    return (dispatch) => {
        getLolInfoRequest()
            .then(data => {
                dispatch(changeLolInfo(data.data))
                dispatch(changeLoading(false))
            })
    }
}

export const changeLoading = (data) => ({
    type: actionTypes.CAHNGE_LOLLOADING,
    data
})