import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FooterWrapper } from './style'
import classnames from 'classnames'

export default function Footer() {
  const { pathname } = useLocation()
  // console.log(pathname)
  return (
    <FooterWrapper>
        <div className='footer'>
            <Link to='/home' className={classnames({active:pathname == '/home' || pathname == '/' || pathname == '/cf'|| pathname == '/lol'})}>
                <i className='iconfont icon-shouye'></i>
                <span>首页</span>
            </Link>
            <Link to='/judou' className={classnames({active:pathname == '/judou'})}>
                <i className='iconfont icon-dadou'></i>
                <span>聚豆</span>
            </Link>
            <Link to='/find' className={classnames({active:pathname == '/find'})}>
                <i className='iconfont icon-faxian'></i>
                <span>发现</span>
            </Link>
            <Link to='/mine' className={classnames({active:pathname == '/mime'})}>
                <i className='iconfont icon-wode'></i>
                <span>我的</span>
            </Link>
          </div>
    </FooterWrapper>
  )
}
