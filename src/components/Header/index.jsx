import React,{ useState,useEffect } from 'react'
import { HeaderWrapper } from './style'
import {  NavLink } from 'react-router-dom'
import GameList from '@/pages/GameList'
import { Popup, Space } from 'antd-mobile'
import { connect } from 'react-redux'
import { getSelectedGameList } from '../../pages/GameList/store/actionCreator'
import Swiper from 'swiper'

function Header(props) {
    const [visible, setVisible] = useState(false)
    const { selectedgamelist, getSelectedGameListDispatch}  = props

    const onMaskClick= () => {
        setVisible(false)
    }

    useEffect(() => {
        getSelectedGameListDispatch()
        let swiper = null;
        if (swiper) return 
        swiper = new Swiper('.sale',{
            freeMode: {
                enabled: true,
                // momentum: false
              },
            
        })
    }, [])

    const renderMyGames = () => {
        return (
            selectedgamelist.map(item => {
                return (                   
                    <div className="swiper-slide" key={item.cid}>
                    <NavLink
                        to={item.path}
                        key={item.cid}    
                    >
                        <span key={item.cid}>{item.desc}</span>
                    </NavLink>
                    </div>
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
                    <div>
                        <i  className='iconfont icon-jiahao icon-right' 
                        onClick={() => {
                            setVisible(true)
                        }}>
                        
                          </i>
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