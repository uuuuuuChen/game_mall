import React, { useState,useEffect } from 'react'
import Banners from './Banners'
import Activities from './Activities'
import ActivitiesInfo from './ActivitiesInfo'
import GameInfo from './GameInfo'
import SaleInfo from './SaleInfo'
import { Wrapper } from './style'
import { connect } from 'react-redux'
import { actionCreators }  from './store/index'
import WeUI from 'react-weui'

const { Toast } = WeUI


function Home(props) {
    const [loading, setLoading] = useState(true)
    let { 
        activityinfo,
        activitylist,
        gameinfo, 
        saleinfo,
        getActivityInfoDataDispatch,
        getActivityListDataDispatch,
        getGameInfoDataDispatch,
        getSaleInfoDataDispatch
    } 
    = props
    // console.log(saleinfo)
    useEffect(() => {
        getActivityInfoDataDispatch()
        getActivityListDataDispatch()
        getGameInfoDataDispatch()
        getSaleInfoDataDispatch()
        setLoading(false)
    }, [])
    return (
        <Wrapper>
            <Toast show={loading} icon="loading">加载中</Toast>
            <Banners />
            <ActivitiesInfo activityinfo={activityinfo} />
            <Activities activitylist={activitylist}/>
            <GameInfo gameinfo={gameinfo}/>
            <SaleInfo saleinfo={saleinfo}/>
        </Wrapper>
    )
}
const mapStateToProps = (state) => {
    return {
        activitylist: state.home.activitylist,
        activityinfo: state.home.activityinfo,
        gameinfo: state.home.gameinfo,
        saleinfo: state.home.saleinfo,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getActivityInfoDataDispatch() {
            dispatch(actionCreators.getActivityInfo())
        },
        getActivityListDataDispatch() {
            dispatch(actionCreators.getActivityList())
        },
        getGameInfoDataDispatch() {
            dispatch(actionCreators.getGameInfo())
        },
        getSaleInfoDataDispatch() {
            dispatch(actionCreators.getSaleInfo())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)