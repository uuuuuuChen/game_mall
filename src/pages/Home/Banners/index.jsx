import React, { useEffect } from 'react'
import { Wrapper } from './style'
import { Link } from 'react-router-dom'
import Swiper from 'swiper'

export default function Banners() {
    useEffect(() => {
        new Swiper('.btn-banners', {
            loop: true,
            // autoplay: true,
            autoplay:{disableOnInteraction: false},
            pagination: {
                el:'.swiper-pagination'
            }
        })
    }, [])

    return (
        <Wrapper>
                <div className="btn-banners swiper-container">
                    <div className="swiper-wrapper">
                        <div className = "swiper-slide">
                            <Link to="/">
                                <img src="https://game.gtimg.cn/images/daojushop/uploads/ad/202206/20220621105344_472882.jpg" alt=""/>
                            </Link>
                        </div>
                        <div className="swiper-slide">
                            <Link to="/">
                                <img src="https://game.gtimg.cn/images/daojushop/uploads/ad/202206/20220609155226_809882.jpg" alt=""/>
                            </Link>
                        </div>
                        <div className="swiper-slide">
                            <Link to="/">
                                <img src="https://game.gtimg.cn/images/daojushop/uploads/ad/202206/20220622143800_528795.jpg" alt=""/>
                            </Link>
                        </div>
                        <div className="swiper-slide">
                            <Link to="/">
                                <img src="https://game.gtimg.cn/images/daojushop/uploads/ad/202206/20220621192234_528972.jpg" alt=""/>
                            </Link>
                        </div>
                        <div className="swiper-slide">
                            <Link to="/">
                                <img src="https://game.gtimg.cn/images/daojushop/uploads/ad/202206/20220606194917_385436.jpg" alt=""/>
                            </Link>
                        </div>
                    </div>
                <div className="swiper-pagination"></div>
            </div>

        </Wrapper>
    )
}
