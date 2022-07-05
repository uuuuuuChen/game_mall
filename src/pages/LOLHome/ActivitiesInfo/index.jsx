import React, { useEffect, useState } from 'react'
import { Wrapper } from './style'
import { getActivityLolInfo } from '@/api/request'
import { Link } from 'react-router-dom'
import Swiper from 'swiper'

export default function ActiveitiesInfo() {
    const [lolactivityinfo, setLolactivityinfo] = useState([])
    useEffect(() => {
        (async () => {
            let { data } = await getActivityLolInfo()
            setLolactivityinfo(data)
            // console.log(data)
        })()
    }, [])
    let swiper = null;

    useEffect(() => {
        if (swiper) return
        swiper = new Swiper('.item', {
            observer: true, //修改swiper自己或子元素时，自动初始化swiper  默认为false
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
            freeMode: true,
            scrollbar: {
                el: '.swiper-scrollbar',
                dragSize: 30,
            },
        })
    }, [])

    const renderBtnBannersPages1 = () => {
        let items = lolactivityinfo.slice(0, 5)
        return items.map(item => {
            return (
                
                    <Link
                        to='/lol'
                        key={`item${item.id}`}
                        className={`item${item.id}`}
                    >
                        <img src={item.img} alt="" />
                        <span>{item.title}</span>
                    </Link>

            )
        })
    }
    const renderBtnBannersPages2 = () => {
        let items = lolactivityinfo.slice(5)
        return items.map(item => {
            return (
                    <Link
                        to='/lol'
                        key={`item${item.id}`}
                        className={`item${item.id}`}
                    >
                        <img src={item.img} alt="" />
                        <span>{item.title}</span>
                    </Link>
            )
        })
    }
    return (
        <Wrapper>
            <div className='item swiper-container'>
                <div className="swiper-wrapper">
                    {/* {
                        lolactivityinfo.map(item => {
                            return (
                                <div className="swiper-slide" key={Math.random() * 1000 + item.id}>
                                    <Link
                                        to='/lol'
                                        key={`item${item.id}`}
                                        className={`item${item.id}`}
                                    >
                                        <img src={item.img} alt="" />
                                        <span>{item.title}</span>
                                    </Link>
                                </div>
                            )
                        })
                    } */}
                    <div className="swiper-slide">
                        {
                            renderBtnBannersPages1()  
                        }
                    </div>
                    <div className="swiper-slide" >
                        {
                            renderBtnBannersPages2()
                        }
                    </div>

                </div>
                <div className="swiper-scrollbar"></div>
            </div>
        </Wrapper>
    )
}
