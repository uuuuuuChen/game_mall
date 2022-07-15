import { combineReducers } from 'redux'
import { reducer as HomeReducer } from '@/pages/Home/store'
import { reducer as LOLHomeReducer } from '@/pages/LOLHome/store'
import { reducer as GameListReducer } from '@/pages/GameList/store'

export default combineReducers ({
    home: HomeReducer,  // Home 子仓store
    lolhome: LOLHomeReducer,  // LOLHome 子仓store
    gamelist: GameListReducer  // GameList 子仓store
})