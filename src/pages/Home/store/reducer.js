import * as actionTypes from './constant'

const defaultState = {
    activityinfo: [],
    activitylist: [],
    gameinfo: [],
    saleinfo: [],
    loading: true
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_ACTIVITYINFO:
            return {
                ...state,
                activityinfo: action.data
            }
        case actionTypes.CHANGE_ACTIVITYLIST:
            return {
                ...state,
                activitylist: action.data
            }
        case actionTypes.CHANGE_GAMEINFO:
            return {
                ...state,
                gameinfo: action.data
            }
        case actionTypes.CHANGE_SALEINFO:
            return {
                ...state,
                saleinfo: action.data
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