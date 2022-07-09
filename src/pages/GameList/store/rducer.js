import * as actionTypes from './constants'

const defaultState = {
    games: [],
    loading: true
}
export default (state = defaultState,action) => {
    switch (action.type) {
        case actionTypes.CHANGE_GAMELIST:
            return {
                ...state,
                games: action.data
            }
        case actionTypes.CHANGE_LOADING:
            return {
                ...state,
                loading: action.data
            }
        default:
            return state
    }
}