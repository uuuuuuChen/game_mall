import React, {useEffect,useState} from 'react'
import { Wrapper } from './style'
// import { getActivities } from '@/api/request'
import { Link } from 'react-router-dom'

export default function Activities({activitylist}) {
    // const [activities,setActivities] = useState([])
    // useEffect(()=> {
    //     (async() => {
    //         let { data } = await getActivities()
    //         // console.log(data)
    //         setActivities(data)
    //     })()
    // }, [])
    return (
        <Wrapper>
            <div className='title'>
                <h3>精彩活动</h3>
                <a href='/home'>
                    {/* 更多<i className='iconfont icon-youjiantou icon-right'></i> */}
                    <i className='fa fa-chevron-circle-right icon-right'></i>
                </a>
            </div>
            <div className='activity'>
                {
                    activitylist.map(item => {
                        return (
                            <Link 
                                to='/home'
                                // key={Math.random()*1000}
                                key={Math.random()*1000 + item.aid}
                                // className={`activities${item.aid}`}
                                className={item.aid}
                            >
                                <img src={item.img} alt="" />
                                <span>{item.desc}</span>
                            </Link>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}
