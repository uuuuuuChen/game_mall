import React, {useEffect,useState} from 'react'
import { Wrapper } from './style'
import { getLolSale } from '@/api/request'
import { Link } from 'react-router-dom'

export default function Activities() {
    const [lolsale,setLolsale] = useState([])
    useEffect(()=> {
        (async() => {
            let { data } = await getLolSale()
            // console.log(data)
            setLolsale(data)
        })()
    }, [])
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
                    lolsale.map(item => {
                        return (
                            <Link 
                                to='/lol'
                                // key={Math.random()*1000}
                                key={Math.random()*1000 + item.aid}
                                // className={`activities${item.aid}`}
                                className={item.aid}
                            >
                                <img src={item.img} alt="" />
                                <span>{item.desc}</span>
                                <span style={{display:"block",color:'red'}}>￥{item.price}</span>
                            </Link>
                        )
                    })
                }
            </div>
        </Wrapper>
    )
}
