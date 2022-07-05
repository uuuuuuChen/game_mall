import React,{ useState,useEffect } from 'react'
import { HeaderWrapper } from './style'
import { Link, NavLink,useLocation } from 'react-router-dom'
import GameList from '@/pages/GameList'
import { Popup, Space } from 'antd-mobile'
// import Swiper from 'swiper'
import classnames from 'classnames'

export default function Header() {
    // const [title, setTitle] = useState('精选')
    const [visible, setVisible] = useState(false)
    const { pathname } = useLocation()

    // let homeNavs = [
    //     { id: 1, desc: '精选', path: '/'},
    //     { id: 2, desc: '英雄联盟', path: '/lol'},
    //     { id: 3, desc: 'CF穿越火线', path: '/cf'},
    // ]
    return (
        <HeaderWrapper>
                <div className="nav-box">
                    <i className='iconfont icon-saoyisao'></i>
                    <Link 
                        to='/'
                        className={classnames({navitem:true},{active:pathname == '/home' || pathname == '/'})}
                    >
                        精选
                    </Link>
                    <Link 
                        to='/lol'
                        className={classnames({navitem:true},{active:pathname == '/lol'})}
                    >
                        英雄联盟
                    </Link>
                    <Link 
                        to='/cf'
                        className={classnames({navitem:true},{active:pathname == '/cf'})}
                    >
                        CF穿越火线
                    </Link>
                    <Link 
                        to='/'
                        onClick={() => {
                            setVisible(true)
                          }}
                    >
                        <i  className='iconfont icon-jiahao icon-right' ></i>
                        <Space direction='vertical'>
                        <Popup
                            visible={visible}
                            onMaskClick={() => {
                                setVisible(false)
                            }}
                            position='right'
                            bodyStyle={{ minWidth: '60vw' }}
                            >
                            <GameList/>
                        </Popup>
                        </Space>
                    </Link>
                </div>    
        </HeaderWrapper>
    )
}