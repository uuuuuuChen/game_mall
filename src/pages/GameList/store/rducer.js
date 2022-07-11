import * as actionTypes from './constants'

const defaultState = {
    games: [],
    selectedgamelist: [],
    loading: true
}
export default (state = defaultState,action) => {
    switch (action.type) {
        case actionTypes.CHANGE_GAMELIST:
            return {
                ...state,
                games: action.data
            }
        case actionTypes.CHANGE_SELECTEDGAMELIST:
            return {
                ...state,
                selectedgamelist: action.data
            }
        case actionTypes.ADD_LIST:
                // console.log(action.data, '----------')
                // console.log(state)
                // let prevSelectedgamelist = state.selectedgamelist
                // 不能用下标  要用id
                let addedGame = state.games.find(item =>  item.cid == action.data)
                let games = state.games.filter(item => item.cid != action.data)
                // console.log(addedGame)
                let newSelectedGameList = [
                    ...state.selectedgamelist,
                    addedGame
                ]
                return {
                    ...state,
                    games,
                    selectedgamelist: newSelectedGameList
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