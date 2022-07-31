import React, { useState,useEffect } from 'react'
import Banners from './Banners'
import Activities from './Activities'
import ActivitiesInfo from './ActivitiesInfo'
import GameInfo from './GameInfo'
import SaleInfo from './SaleInfo'
import { Wrapper } from './style'
import { connect } from 'react-redux'
import { actionCreators }  from './store/index'
import { actionCreators1 }  from '../ShoppingCart/store/index'
import WeUI from 'react-weui'
import ShoppingCart from '../ShoppingCart'
import { Link } from 'react-router-dom'

const { Toast } = WeUI


function Home(props) {
    const { 
        activityinfo,
        activitylist,
        gameinfo, 
        saleinfo,
        loading,
        goodsList
    } 
    = props
    const { 
        getActivityInfoDataDispatch,
        getActivityListDataDispatch,
        getGameInfoDataDispatch,
        getSaleInfoDataDispatch,
        getAllGoodsDispatch,
        addGoodsDispatch
    } 
    = props
    // console.log(goodsList)
    const addCart = (e, goodsId) => {
        e.preventDefault();
        e.stopPropagation();
        // console.log(goodsId)
        addGoodsDispatch(goodsId)
        // changeGoodsNumDispatch(data)
    }
    useEffect(() => {
        getActivityInfoDataDispatch()
        getActivityListDataDispatch()
        getGameInfoDataDispatch()
        getSaleInfoDataDispatch()
        if (goodsList == ''){
            getAllGoodsDispatch()
        }
    }, [])
    return (
        <Wrapper>
            <Toast show={loading} icon="loading">加载中</Toast>
            <Banners />
            <ActivitiesInfo activityinfo={activityinfo} />
            <Activities activitylist={activitylist}/>
            <GameInfo gameinfo={gameinfo}/>
            <SaleInfo saleinfo={saleinfo} addCart={addCart}/>
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
        activitylist: state.home.activitylist,
        activityinfo: state.home.activityinfo,
        gameinfo: state.home.gameinfo,
        saleinfo: state.home.saleinfo,
        loading: state.home.loading,
        goodsList: state.cart.list,
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
        },
        getAllGoodsDispatch() {
            dispatch(actionCreators1.getAllGoodsAction())
        },
        addGoodsDispatch(data) {
            dispatch(actionCreators1.addGoodsAction(data))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)