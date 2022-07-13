import React, { useState }from 'react'
import { Tabs, SideBar } from 'antd-mobile'
import { AddCircleOutline  } from 'antd-mobile-icons'
import classnames from 'classnames'
// import { Badge } from 'antd-mobile'
import { Wrapper } from './style'

export default function Main(props) {
    const {games, AddList} = props
    const [activeKey, setActiveKey] = useState('key1')
    const tabs1 = [
        {
            key: 'key1',
            title: '全部',
        },
        {
            key: 'key2',
            title: '热门',
        },
        {
            key: 'key3',
            title: '竞技',
        },
        {
            key: 'key4',
            title: '体育',
        },
        {
            key: 'key5',
            title: '休闲',
        },
    ]
    const tabs2 = [
        {
            key: 'key1',
            title: '全部',
        },
        {
            key: 'key2',
            title: '热门',
        },
        {
            key: 'key3',
            title: '竞技',
        },
        {
            key: 'key4',
            title: '策略',
        },
        {
            key: 'key5',
            title: '休闲',
        },
    ]
    const pcgame = games.filter(item => item.tag == 'pc')
    const hotpcgame = games.filter(item => item.popule == 'pctrue')
    const pcjingjigame = games.filter(item => item.classify == 'pc竞技' )
    const PEgame = games.filter(item => item.classify == '体育' )
    const pcxiuxiangame = games.filter(item => item.classify == 'pc休闲' )
    const renderTabs = () => {
        return (
            <Wrapper>
            <div className="container">
            <div className="side">
                <SideBar activeKey={activeKey} onChange={setActiveKey}
                style={{ '--width': '65px','--background-color':'#fff' }}>
                {
                    tabs1.map(item => (
                        <SideBar.Item key={item.key} 
                        title={<span style={{fontSize:"0.7rem"}}>{item.title}</span>
                    }/>
                    ))
                }
                </SideBar>
            </div>
                <div className="main">
                    <div className='gamelist'>
                    <div className={classnames(
                        {content:true},
                        activeKey === 'key1' && {active:activeKey === 'key1'}
                    )}
                    >
                    {pcgame.map(item => {
                        return (
                            <li className='game-list' key={item.cid + Math.random()*10}
                                onClick={() => AddList(item.cid)}
                            >
                                <i className='fa fa-plus-circle icon'/>
                                <img src={item.img} alt="" key={item.cid}/>
                                <span key={item.cid + Math.random()*10}>{item.desc}</span>
                            </li>
                        )
                    })}
                    </div>
                    <div className={classnames(
                        {content:true},
                        activeKey === 'key2' && { active:activeKey === 'key2'}
                    )}
                    >
                    {hotpcgame.map(item => {
                        return (
                            <li className='game-list' key={item.cid + Math.random()*10}
                            onClick={() => AddList(item.cid)}
                            >
                                <i className='fa fa-plus-circle icon'/>
                                <img src={item.img} alt="" key={item.cid}/>
                                <span key={item.cid + Math.random()*10}>{item.desc}</span>
                            </li>
                        )
                    })}
                    
                    </div>
                    <div className={classnames(
                        {content:true},
                        activeKey === 'key3' && {active:activeKey === 'key3'}
                    )}
                    >
                    {pcjingjigame.map(item => {
                        return (
                            <li className='game-list' key={item.cid + Math.random()*10}
                            onClick={() => AddList(item.cid)}
                            >
                                <i className='fa fa-plus-circle icon'/>
                                <img src={item.img} alt="" key={item.cid}/>
                                <span key={item.cid + Math.random()*10}>{item.desc}</span>
                            </li>
                        )
                    })}
                    </div>
                    <div className={classnames(
                        {content:true},
                        activeKey === 'key4' && {active:activeKey === 'key4'}
                    )}
                    >
                    {PEgame.map(item => {
                        return (
                            <li className='game-list' key={item.cid + Math.random()*10}
                            onClick={() => AddList(item.cid)}    
                            >
                                <i className='fa fa-plus-circle icon'/>
                                <img src={item.img} alt="" key={item.cid}/>
                                <span key={item.cid + Math.random()*10}>{item.desc}</span>
                            </li>
                        )
                    })}
                    </div>
                    <div className={classnames(
                        {content:true},
                        activeKey === 'key5' && {active:activeKey === 'key5'}
                    )}
                    >
                    {pcxiuxiangame.map(item => {
                        return (
                            <li className='game-list' key={item.cid + Math.random()*10}
                                onClick={() => AddList(item.cid)}
                            >
                                <i className='fa fa-plus-circle icon'/>
                                <img src={item.img} alt="" key={item.cid}/>
                                <span key={item.cid + Math.random()*10}>{item.desc}</span>
                            </li>
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
        </Wrapper>
        )
    }
    const mobilegame = games.filter(item => item.tag == 'mobile')
    const hotmobilegame = games.filter(item => item.popule == true)
    const jingjigame = games.filter(item => item.classify == '竞技' )
    const celuegame = games.filter(item => item.classify == '策略' )
    const xiuxiangame = games.filter(item => item.classify == '休闲' )
    const renderTabs2 = () => {
        return (
            <Wrapper>
            <div className="container">
            <div className="side">
                <SideBar activeKey={activeKey} onChange={setActiveKey}
                style={{ '--width': '65px','--background-color':'#fff' }}>
                {
                    tabs2.map(item => (
                        <SideBar.Item key={item.key} 
                        title={<span style={{fontSize:"0.7rem"}}>{item.title}</span>
                    } />
                    ))
                }
                </SideBar>
            </div>
                <div className="main">
                    <div className='gamelist'>
                    <div className={classnames(
                        {content:true},
                        activeKey === 'key1' && {active:activeKey === 'key1'}
                    )}
                    >
                    {mobilegame.map(item => {
                        return (
                            <li className='game-list' key={item.cid + Math.random()*10}
                                onClick={() => AddList(item.cid)}
                            >
                                <i className='fa fa-plus-circle icon'/>
                                <img src={item.img} alt="" key={item.cid}/>
                                <span key={item.cid + Math.random()*10}>{item.desc}</span>
                            </li>
                        )
                    })}
                    </div>
                    <div className={classnames(
                        {content:true},
                        activeKey === 'key2' && { active:activeKey === 'key2'}
                    )}
                    >
                    {hotmobilegame.map(item => {
                        return (
                            <li className='game-list' key={item.cid + Math.random()*10}
                            onClick={() => AddList(item.cid)}
                            >
                                <i className='fa fa-plus-circle icon'/>
                                <img src={item.img} alt="" key={item.cid}/>
                                <span key={item.cid + Math.random()*10}>{item.desc}</span>
                            </li>
                        )
                    })}
                   
                    </div>
                    <div className={classnames(
                        {content:true},
                        activeKey === 'key3' && {active:activeKey === 'key3'}
                    )}
                    >
                    {jingjigame.map(item => {
                        return (
                            <li className='game-list' key={item.cid + Math.random()*10}
                            onClick={() => AddList(item.cid)}
                            >
                                <i className='fa fa-plus-circle icon'/>
                                <img src={item.img} alt="" key={item.cid}/>
                                <span key={item.cid + Math.random()*10}>{item.desc}</span>
                            </li>
                        )
                    })}
                    </div>
                    <div className={classnames(
                        {content:true},
                        activeKey === 'key4' && {active:activeKey === 'key4'}
                    )}
                    >
                    {celuegame.map(item => {
                        return (
                            <li className='game-list' key={item.cid + Math.random()*10}
                            onClick={() => AddList(item.cid)}
                            >
                                <i className='fa fa-plus-circle icon'/>
                                <img src={item.img} alt="" key={item.cid}/>
                                <span key={item.cid + Math.random()*10}>{item.desc}</span>
                            </li>
                        )
                    })}
                    </div>
                    <div className={classnames(
                        {content:true},
                        activeKey === 'key5' && {active:activeKey === 'key5'}
                    )}
                    >
                    {xiuxiangame.map(item => {
                        return (
                            <li className='game-list' key={item.cid + Math.random()*10}
                                onClick={() => AddList(item.cid)}
                            >
                                <i className='fa fa-plus-circle icon'/>
                                <img src={item.img} alt="" key={item.cid}/>
                                <span key={item.cid + Math.random()*10}>{item.desc}</span>
                            </li>
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
        </Wrapper>
        )
    }

    return (
        <div>
            <Tabs>  
                <Tabs.Tab title='端游' key='key1'>
                    {
                        renderTabs()
                    }
                </Tabs.Tab>
                <Tabs.Tab title='手游' key='key2'>
                    {
                        renderTabs2()
                    }  
                </Tabs.Tab>
            </Tabs>
        </div>
    )
}

