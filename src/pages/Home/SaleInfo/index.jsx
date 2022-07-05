import React, {useEffect,useState} from 'react'
import { Wrapper } from './style'
import { getSalesInfo } from '@/api/request'
import { Link } from 'react-router-dom'
import Swiper from 'swiper'

export default function Activities({saleinfo}) {
    // const [saleinfo,setSaleInfo] = useState([])
    // useEffect(()=> {
    //     (async() => {
    //         let { data } = await getSalesInfo()
    //         // console.log(data)
    //         setSaleInfo(data)
    //     })()
    // }, [])

    let swiper = null;
    useEffect(() => {
        if (swiper) return 
        swiper = new Swiper('.sale',{
            observer: true, //修改swiper自己或子元素时，自动初始化swiper，默认为false
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
            freeMode: true
        })
    },[])

    const renderSaleIndfo = () => {
        return (
            saleinfo.map(item => {
                return (
                    <div className="swiper-slide" key={item.sid}>
                        <Link 
                            to='/home'
                            // key={`sale${item.sid}`}
                            key={item.sid}
                            className={`sale${item.sid}`}>
                            <div>
                                <span>{item.title}</span>
                                {/* <a href='/home'> */}
                                    <i className='fa fa-chevron-circle-right icon-right'></i>
                                {/* </a> */}
                            </div>
                            <img src={item.img} alt="" />
                            <span>{item.desc}</span>
                            <span style={{color:'red'}}>￥{item.price}</span>
                        </Link>
                    </div>
                )
            })
        )
    }
    return (
        <Wrapper>
            <div className='title'>
                <h3 style={{fontWight:700}}>特惠专区</h3>
                <a href='/home'>
                    <i className='fa fa-chevron-circle-right icon-right'></i>
                </a>
            </div>
            <div className="sale swiper-container">
                <div className="swiper-wrapper">                  
                    {renderSaleIndfo()}  
                </div>
            </div>
            <div className='bottom'><p>讨厌，都被你看光了~~~</p></div>
        </Wrapper>
    )
}
