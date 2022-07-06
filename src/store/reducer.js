import { combineReducers } from 'redux'

import { reducer as HomeReducer } from '@/pages/Home/store'
import { reducer as LOLHomeReducer } from '@/pages/LOLHome/store'

export default combineReducers ({
    home: HomeReducer,  // Home 子仓store
    lolhome: LOLHomeReducer
})