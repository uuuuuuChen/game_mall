import React, { useState, useEffect, Fragment} from 'react'
import { Link } from 'react-router-dom'
import Banners from './Banners'
import Activities from './Activities'
import ActivitiesInfo from './ActivitiesInfo'
import Gift from './Gift'
import GameInfo from './GameInfo'
import { Wrapper } from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store/index'
import { actionCreators1 }  from '../ShoppingCart/store/index'
import WeUI from 'react-weui'

const { Toast } = WeUI

function LOLHome(props) {
    const { 
        activitylolinfo,
        lolsaleinfo,
        lolgift,
        lolinfo,
        loading,
        goodsList
    }
    = props
    const { 
        getActivityLolInfoDispatch,
        getLolSaleInfoDispatch,
        getLolGiftDispatch,
        getLolInfoDispatch,
        getAllGoodsDispatch,
        addGoodsDispatch
    }
    = props
    // console.log(activitylolinfo)
    const addCart = (e, goodsId) => {
        e.preventDefault();
        e.stopPropagation();
        // console.log(goodsId)
        addGoodsDispatch(goodsId)
    }
    useEffect(() => {
        getActivityLolInfoDispatch()
        getLolSaleInfoDispatch()
        getLolGiftDispatch()
        getLolInfoDispatch()
        getAllGoodsDispatch()
    }, [])
    return (
        <Wrapper>
            <Toast show={loading} icon="loading">加载中</Toast>
            <Banners/>
            <ActivitiesInfo activitylolinfo={activitylolinfo}/>
            <Activities lolsaleinfo={lolsaleinfo} addCart={addCart}/>
            <Gift lolgift={lolgift}/>
            <GameInfo lolinfo={lolinfo}/>
            <Link to='/shoppingcart'>
                <div className='cart'>
                    <i className="iconfont icon-gouwuche1 icon"></i>
                    <div className='number'>{goodsList.length}</div>
                </div>
            </Link>
        </Wrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        activitylolinfo: state.lolhome.activitylolinfo,
        lolsaleinfo: state.lolhome.lolsaleinfo,
        lolgift: state.lolhome.lolgift,
        lolinfo: state.lolhome.lolinfo,
        loading: state.lolhome.loading,
        goodsList: state.cart.list,
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
        },
        getAllGoodsDispatch() {
            dispatch(actionCreators1.getAllGoodsAction())
        },
        addGoodsDispatch(data) {
            dispatch(actionCreators1.addGoodsAction(data))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LOLHome)
