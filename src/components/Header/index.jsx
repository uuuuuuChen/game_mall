import React,{ useState,useEffect, memo } from 'react'
import { HeaderWrapper } from './style'
import { Link, NavLink,useLocation } from 'react-router-dom'
import GameList from '@/pages/GameList'
import { Popup, Space } from 'antd-mobile'
import { connect } from 'react-redux'
import { getSelectedGameList } from '../../pages/GameList/store/actionCreator'
import classnames from 'classnames'
import Swiper from 'swiper'

function Header(props) {
    const [visible, setVisible] = useState(false)
    const { selectedgamelist, getSelectedGameListDispatch}  = props
    const {pathname } = useLocation()


    const onMaskClick= () => {
        setVisible(false)
    }

    useEffect(() => {
        getSelectedGameListDispatch()
        let swiper = null;
        if (swiper) return 
        swiper = new Swiper('.sale',{
            // loop: true,
            // observer: true, //修改swiper自己或子元素时，自动初始化swiper，默认为false
            // observeParents: true, //修改swiper的父元素时，自动初始化swiper
            freeMode: true,
            // momentum: false
        })
    }, [])

    const renderMyGames = () => {
        return (
            selectedgamelist.map(item => {
                return (
                    <>
                    <div className="swiper-slide" key={item.cid}>
                    <NavLink
                        to={item.path}
                        key={item.cid}    
                    >
                        <span>{item.desc}</span>
                    </NavLink>
                    </div>
                    </>
                )
            })
        )
    }
    return (
        <HeaderWrapper>
                <div className="nav-box">
                    <div><i className='iconfont icon-saoyisao'></i></div>
                    <div className="sale swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide"> 
                                <NavLink to='/'>
                                    <span>精选</span>
                                </NavLink>
                               
                            </div>
                            { renderMyGames() }
                        </div>
                    </div>
                    {/* <NavLink 
                        to='/lol'
                        className={classnames({navitem:true},{active:pathname == '/lol'})}
                    >
                        英雄联盟
                    </NavLink>
                    <Link 
                        to='/cf'
                        className={classnames({navitem:true},{active:pathname == '/cf'})}
                    >
                        CF穿越火线
                    </Link> */}
                    <div 
                        to='/'
                        onClick={() => {
                            setVisible(true)
                          }}
                    >
                        <i  className='iconfont icon-jiahao icon-right' ></i>
                        <Space direction='vertical'>
                        <Popup
                            // style={{'--z-index':'9999'}}
                            visible={visible}
                            position='bottom'
                            onMaskClick={onMaskClick}
                            bodyStyle={{ minHeight:'100%' }}
                            >
                            <GameList onMaskClick={onMaskClick}/>
                        </Popup>
                        </Space>
                    </div>
                </div>    
        </HeaderWrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedgamelist: state.gamelist.selectedgamelist,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSelectedGameListDispatch() {
            dispatch(getSelectedGameList())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Header))