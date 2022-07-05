import React, {useEffect,useState} from 'react'
import { Wrapper } from './style'
import { getGamesInfo } from '@/api/request'
import { Link } from 'react-router-dom'

export default function GameInfo({gameinfo}) {
    // const [gameinfo,setgGameinfo] = useState([])
    // useEffect(()=> {
    //     (async() => {
    //         let { data } = await getGamesInfo()
    //         // console.log(data)
    //         setgGameinfo(data)
    //     })()
    // }, [])
    return (
        <Wrapper>
            <div className='title'>
                <h3>精选资讯</h3>
                <a href='/home'>
                    <i className='fa fa-chevron-circle-right icon-right'></i>
                </a>
            </div>
            <div className='game-info'>
            {
                    gameinfo.map(item => {
                        return (
                            <Link 
                                to='/home'
                                key={`info${item.gid}`}
                                className={`game-info${item.gid}`}
                            >
                                <img src={item.img} alt="" />
                                <p>{item.desc}</p>
                                <div className='content'>
                                    <span>{item.author}</span>
                                    <i className='iconfont icon-guankan'></i>
                                    <span>{item.guankan}</span>
                                    <i className='iconfont icon-dianzan'></i>
                                    <span>{item.dianzan} </span>   
                                </div>                           
                            </Link>
                        )
                    })
                }
                
            </div>
        </Wrapper>
    )
}
