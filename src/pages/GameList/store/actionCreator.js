import * as actionTypes from './constants'
import { 
    getGameListsRequest,
    getSelectedGameListsRequest
} from '@/api/request'

const changeGameList = (data) => ({
    type: actionTypes.CHANGE_GAMELIST,
    data
})
const changeSelectedGameList = (data) => ({
    type: actionTypes.CHANGE_SELECTEDGAMELIST,
    data
})
const addList = (data) => ({
    type: actionTypes.ADD_LIST,
    data
})
const changeLoading = (data) => ({
    type: actionTypes.CHANGE_LOADING,
    data
})
export const getSelectedGameList = () => {
    return (dispatch) => {
        getSelectedGameListsRequest()
            .then(data => {
                // console.log(data)
                dispatch(changeSelectedGameList(data.data))
            })
    }
}
export const getGameList = () => {
    return (dispatch) => {
        getGameListsRequest()
            .then(data => {
                dispatch(changeGameList(data.data))
                // dispatch(changeLoading(false))
            })
    }
}

export const AddListData = (data) => {
    return (dispatch) => {
       dispatch(addList(data))
    //    dispatch(changeSelectedGameList(data.data))
    }
}