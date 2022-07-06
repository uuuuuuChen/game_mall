import React, {useEffect,useState} from 'react'
import { Wrapper } from './style'
// import { RightOutline } from 'antd-mobile-icons'
// import { getLolGiftRequest } from '@/api/request'
import { Link } from 'react-router-dom'

export default function GameInfo({lolgift}) {
    // const [giftinfo,setgGiftinfo] = useState([])
    // useEffect(()=> {
    //     (async() => {
    //         let { data } = await getLolGiftRequest()
    //         // console.log(data)
    //         setgGiftinfo(data)
    //     })()
    // }, [])
    return (
        <Wrapper>
            <div className='title'>
                <h3>我的礼包</h3>
                <a href='/home'>
                    <i className='fa fa-chevron-circle-right icon-right'></i>
                </a>
                {/* <RightOutline /> */}
            </div>
            <div className='gift-info'>
            {
                    lolgift.map(item => {
                        return (
                            <Link 
                                to='/lol'
                                key={`info${item.gid}`}
                                className={`gift-info${item.gid}`}
                            >
                                <img src={item.img} alt="" />                        
                                <span>兑换</span>
                                <p>{item.desc}</p>
                                <p style={{color:'red'}}>{item.price}</p>
                                {/* <span>兑换</span>  */}
                                {/* <Button color='warning' className='btn'>
                                </Button>                      */}
                            </Link>
                        )
                    })
                }
                
            </div>
        </Wrapper>
    )
}
