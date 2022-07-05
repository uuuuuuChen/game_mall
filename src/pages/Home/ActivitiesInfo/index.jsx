import React, { useEffect, useState } from 'react'
import { Wrapper } from './style'
// import { getActivitiesInfo } from '@/api/request'
import { Link } from 'react-router-dom'

export default function ActiveitiesInfo({activityinfo}) {
    // const [activitiesinfo,setActivitiesinfo] = useState([])
    // useEffect(() => {
    //     (async() => {
    //         let { data } = await getActivitiesInfo()
    //         setActivitiesinfo(data)
    //         // console.log(data)
    //     })()
    // }, [])
    
    return (
        <Wrapper>
            <div className='item'>
                {
                    activityinfo.map(item => {
                        return (
                        
                            <Link
                                to='/'
                                key={`item${item.id}`}
                                className={`item${item.id}`}
                            >
                                <img src={item.img} alt="" />
                                <span>{item.title}</span>
                            </Link>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}
