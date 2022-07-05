import React, {useEffect,useState} from 'react'
import { Wrapper } from './style'
import { getLolInfo } from '@/api/request'
import { Link } from 'react-router-dom'

export default function GameInfo() {
    const [lolinfo,setgLolinfo] = useState([])
    useEffect(()=> {
        (async() => {
            let { data } = await getLolInfo()
            // console.log(data)
            setgLolinfo(data)
        })()
    }, [])
    return (
        <Wrapper>
            <div className='title'>
                <h3>精选资讯</h3>
                <a href='/lol'>
                    <i className='fa fa-chevron-circle-right icon-right'></i>
                </a>
            </div>
            <div className='game-info'>
            {
                    lolinfo.map(item => {
                        return (
                            <Link 
                                to='/lol'
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
                <div className='bottom'><p>讨厌，都被你看光了~~~</p></div>
            </div>
        </Wrapper>
    )
}
