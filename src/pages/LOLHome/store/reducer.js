const defaultState = {
    activitylolinfo: [],
    lolsaleinfo: [],
    lolgift: [],
    lolinfo: [],
    loading: true
}
import * as actionTypes from './constant'

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CAHNGE_ACTIVITYLOLINFO:
            return {
                ...state,
                activitylolinfo: action.data
            }
        case actionTypes.CAHNGE_LOLSALEINFO: 
            return {
                ...state,
                lolsaleinfo: action.data
            }
        case actionTypes.CAHNGE_LOLGIFT: 
            return {
                ...state,
                lolgift: action.data
            }
        case actionTypes.CAHNGE_LOLINFO: 
            return {
                ...state,
                lolinfo: action.data
            }
        case actionTypes.CAHNGE_LOLLOADING:
            return {
                ...state,
                loading: action.data
            }
        default:
            return state
    }
    

}