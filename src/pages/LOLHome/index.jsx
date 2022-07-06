import React, { useState, useEffect, Fragment} from 'react'
// import { } from './style'
import Banners from './Banners'
import Activities from './Activities'
import ActivitiesInfo from './ActivitiesInfo'
import Gift from './Gift'
import GameInfo from './GameInfo'
// import SaleInfo from './SaleInfo'
import { Wrapper } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import WeUI from 'react-weui'

const { Toast } = WeUI

function LOLHome(props) {
    const { 
        activitylolinfo,
        lolsaleinfo,
        lolgift,
        lolinfo,
        loading,
        getActivityLolInfoDispatch,
        getLolSaleInfoDispatch,
        getLolGiftDispatch,
        getLolInfoDispatch
    }
    = props
    // console.log(activitylolinfo)
    useEffect(() => {
        getActivityLolInfoDispatch()
        getLolSaleInfoDispatch()
        getLolGiftDispatch()
        getLolInfoDispatch()
    }, [])
    return (
        <Wrapper>
            <Toast show={loading} icon="loading">加载中</Toast>
            <Banners/>
            <ActivitiesInfo activitylolinfo={activitylolinfo}/>
            <Activities lolsaleinfo={lolsaleinfo}/>
            <Gift lolgift={lolgift}/>
            <GameInfo lolinfo={lolinfo}/>
        </Wrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        activitylolinfo: state.lolhome.activitylolinfo,
        lolsaleinfo: state.lolhome.lolsaleinfo,
        lolgift: state.lolhome.lolgift,
        lolinfo: state.lolhome.lolinfo,
        loading: state.lolhome.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getActivityLolInfoDispatch() {
            dispatch(actionCreators.getActivityLolInfo())
        },
        getLolSaleInfoDispatch() {
            dispatch(actionCreators.getLolSaleInfo())
        },
        getLolGiftDispatch() {
            dispatch(actionCreators.getLolGift())
        },
        getLolInfoDispatch() {
            dispatch(actionCreators.getLolInfo())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LOLHome)
