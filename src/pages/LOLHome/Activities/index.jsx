import React, {useEffect,useState} from 'react'
import { Wrapper } from './style'
import { Toast } from 'antd-mobile'
import { Link } from 'react-router-dom'

export default function Activities({lolsaleinfo,addCart}) {
    const [activekey, setActivekey] = useState('')
    // const addCart = (e, status, goodsId) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     // changeGoodsNumDispatch(data)
    // }
    return (
        <Wrapper>
            <div className='title'>
                <h3>热门精选</h3>
                <a href='/home'>
                    <i className='fa fa-chevron-circle-right icon-right'></i>
                </a>
            </div>
            <div className='lol-sale'>
                {
                    lolsaleinfo.map(item => {
                        return (
                            <Link 
                                to='/lol'
                                // key={Math.random()*1000}
                                key={Math.random()*1000 + item.sid}
                                // className={`activities${item.aid}`}
                                className={item.sid}
                            >
                                <img src={item.img} alt="" />
                                <span className='span1'
                                style={{display:"block"}}>{item.desc}</span>
                                <span className='span2'
                                style={{color:'red'}}>￥{item.price}</span>

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
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}
