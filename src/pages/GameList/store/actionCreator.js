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
const deleteList = (data) => ({
    type: actionTypes.DETELE_LIST,
    data
})
const deleteSearchList = (data) => ({
    type: actionTypes.DETELE_SEARCH_LIST,
    data
})
const searchResult = (data) => ({
    type: actionTypes.GET_SEARCHRESULT,
    data
})
const changeLoading = (data) => ({
    type: actionTypes.CHANGE_GAMELISTLOADING,
    data
})
export const getSelectedGameList = () => {
    return (dispatch) => {
        getSelectedGameListsRequest()
            .then(data => {
                // console.log(data)
                dispatch(changeSelectedGameList(data.data))
                dispatch(changeLoading(false))
            })
    }
}
export const getGameList = () => {
    return (dispatch) => {
        getGameListsRequest()
            .then(data => {
                dispatch(changeGameList(data.data))
                
            })
    }
}

export const AddListData = (data) => {
    return (dispatch) => {
       dispatch(addList(data))
    //    dispatch(changeSelectedGameList(data.data))
    }
}

export const DeleteListData = (data) => {
    return (dispatch) => {
       dispatch(deleteList(data))
    //    dispatch(changeSelectedGameList(data.data))
    }
}

export const DeleteSearchListData = (data) => {
    return (dispatch) => {
       dispatch(deleteSearchList(data))
    }
}

export const getSearchResult = (query) => {
    return (dispatch) => {
        // console.log(query)
        dispatch(searchResult(query))
    }
}
