import React, { useEffect, useState, memo } from 'react'
import { Wrapper } from './style'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'
import game from "@/assets/images/game.png"

function Activities({ activitylist }) {
    return (
        <Wrapper>
            <div className='title'>
                <h3>精彩活动</h3>
                <a href='/home'>
                    <i className='fa fa-chevron-circle-right icon-right'></i>
                </a>
            </div>
            <div className='activity'>
                {
                    activitylist.map(item => {
                        return (
                            <Link
                                to='/home'
                                key={Math.random() * 1000 + item.aid}
                                className={item.aid}
                            >
                                <LazyLoad placeholder={<img width='100%'
                                    height='100%' src={game} />}
                                    key={Math.random() * 1000 + item.aid}   
                                >
                                    <img src={item.img} alt="" />
                                </LazyLoad>
                                <span>{item.desc}</span>
                            </Link>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}
export default Activities