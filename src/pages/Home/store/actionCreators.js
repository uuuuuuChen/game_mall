import { 
    getActivitiesInfoRequest, 
    getActivitiesRequest,
    getGamesInfoRequest,
    getSalesInfoRequest
} 
from '@/api/request'
import * as actionTypes from './constant'

export const changeActivityInfo = (data) => ({
    type: actionTypes.CHANGE_ACTIVITYINFO,
    data
})

export const getActivityInfo = () => {
    return (dispatch) => {
        getActivitiesInfoRequest()
            .then(data => {
                const action = changeActivityInfo(data.data)
                dispatch(action)
            })
    }
}


export const changeActivityList = (data) => ({
    type: actionTypes.CHANGE_ACTIVITYLIST,
    data
})

export const getActivityList = () => {
    return (dispatch) => {
        getActivitiesRequest()
            .then(data => {
                // console.log(data.data)
                const action = changeActivityList(data.data)
                dispatch(action)
            })
    }
}


export const changeGameInfo = (data) => ({
    type: actionTypes.CHANGE_GAMEINFO,
    data
})

export const getGameInfo = () => {
    return (dispatch) => {
        getGamesInfoRequest()
            .then(data => {
                dispatch(changeGameInfo(data.data))
            })
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
                dispatch(changeLoading(false))
            })
    }
}

export const changeLoading = (data) => ({
    type: actionTypes.CHANGE_LOADING,
    data
})