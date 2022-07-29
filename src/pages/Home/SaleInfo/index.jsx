import React, { useEffect, useState, memo } from 'react'
import { Wrapper } from './style'
import { Toast } from 'antd-mobile'
import { Link } from 'react-router-dom'
import Swiper from 'swiper'

function SaleInfo({ saleinfo, addCart }) {
    const [activekey, setActivekey] = useState('')
    let swiper = null;
    useEffect(() => {
        if (swiper) return
        swiper = new Swiper('.sale', {
            observer: true, //修改swiper自己或子元素时，自动初始化swiper，默认为false
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
            freeMode: true,
        })
    }, [])

    // const addCart = (e, status, goodsId) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     // changeGoodsNumDispatch(data)
    // }

    const renderSaleIndfo = () => {
        return (
            saleinfo.map(item => {
                return (
                    <div className="swiper-slide" key={item.sid}>
                        <Link
                            to='/'
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
                            <span style={{ color: 'red' }}>￥{item.price}</span>

                            <i className="fa fa-shopping-cart icon-cart"
                                onClick={(e) => {
                                    addCart(e,item.sid)
                                    if (activekey == `active${item.sid}`) {
                                        Toast.show({
                                            content: '该商品已经在购物车中了',
                                        })
                                    } else {
                                        Toast.show({
                                            content: '已成功加入购物车',

                                        })
                                        setActivekey(`active${item.sid}`)
                                    }
                                }
                                }
                            >
                            </i>
                        </Link>
                    </div>
                )
            })
        )
    }
    return (
        <Wrapper>
            <div className='title'>
                <h3 style={{ fontWight: 700 }}>特惠专区</h3>
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
export default memo(SaleInfo)
