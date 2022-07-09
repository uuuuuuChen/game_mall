import * as actionTypes from './constants'
import { getGameListsRequest } from '@/api/request'

const changeGameList = (data) => ({
    type: actionTypes.CHANGE_GAMELIST,
    data
})
const changeLoading = (data) => ({
    type: actionTypes.CHANGE_LOADING,
    data
})
export const getGameList = () => {
    return (dispatch) => {
        getGameListsRequest()
            .then(data => {
                dispatch(changeGameList(data.data))
                dispatch(changeLoading(false))
            })
    }
}