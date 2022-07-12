import React,{ useState,useEffect, memo } from 'react'
import { HeaderWrapper } from './style'
import { Link, NavLink,useLocation } from 'react-router-dom'
import GameList from '@/pages/GameList'
import { Popup, Space } from 'antd-mobile'
import classnames from 'classnames'

function Header() {
    // const [title, setTitle] = useState('精选')
    const [visible, setVisible] = useState(false)
    const {pathname } = useLocation()
    
    const onMaskClick= () => {
        setVisible(false)
    }
    return (
        <HeaderWrapper>
                <div className="nav-box">
                    <div><i className='iconfont icon-saoyisao'></i></div>
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

export default memo(Header)