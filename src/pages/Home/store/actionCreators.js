import { 
    getActivitiesInfo, 
    getActivities,
    getGamesInfo,
    getSalesInfo
} 
from '@/api/request'
import * as actionTypes from './constant'

export const changeActivityInfo = (data) => ({
    type: actionTypes.CHANGE_ACTIVITYINFO,
    data
})

export const getActivityInfo = () => {
    return (dispatch) => {
        getActivitiesInfo()
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
        getActivities()
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
        getGamesInfo()
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
        getSalesInfo()
            .then(data => {
                dispatch(changeSaleInfo(data.data))
            })
    }
}