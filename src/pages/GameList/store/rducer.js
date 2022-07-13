import * as actionTypes from './constants'

const defaultState = {
    games: [],
    selectedgamelist: [],
    searchresult: [],
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
                let newSelectedGameList = [
                    ...state.selectedgamelist,
                    addedGame
                ]
                return {
                    ...state,
                    games,
                    selectedgamelist: newSelectedGameList,
                }
            case actionTypes.DETELE_LIST:
                let deleteGame = state.selectedgamelist.find(item => item.cid == action.data)
                let selectedgamelist = state.selectedgamelist.filter(item => item.cid != action.data)
                let newGameList = [
                    ...state.games,
                    deleteGame
                ]
                let newSearchResult = [
                    ...state.searchresult,
                    deleteGame
                ]   
                // console.log(newSearchResult)
            return {
                ...state,
                games: newGameList,
                selectedgamelist,
                searchresult: newSearchResult

            }
        case actionTypes.GET_SEARCHRESULT:
                // console.log(state,action.data)
                let result = state.games.filter(
                    todo => todo.desc.includes(action.data) || todo.classify.includes(action.data)
                    ) 
                return {
                    ...state,
                    searchresult: result
                }
            case actionTypes.DETELE_SEARCH_LIST:
                // console.log(action.data)
                let addedGame1 = state.games.find(item =>  item.cid == action.data)
                let deletesearchResult = state.searchresult.filter(item => item.cid != action.data)
                let games1 = state.games.filter(item => item.cid != action.data)
                // console.log(addedGame)
                let newSelectedGameList1 = [
                    ...state.selectedgamelist,
                    addedGame1
                ]
                return {
                    ...state,
                    games: games1,
                    selectedgamelist: newSelectedGameList1,
                    searchresult: deletesearchResult
                }
        case actionTypes.CHANGE_GAMELISTLOADING:
            return {
                ...state,
                loading: action.data
            }
        default:
            return state
    }
}