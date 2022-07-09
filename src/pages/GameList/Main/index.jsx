import React, { useState }from 'react'
import { Tabs, SideBar } from 'antd-mobile'
import classnames from 'classnames'
// import { Badge } from 'antd-mobile'
import { Wrapper } from './style'

export default function Main({games}) {
    const [activeKey, setActiveKey] = useState('key1')
    const tabs = [
        {
            key: 'key1',
            title: '全部',
            // badge: Badge.dot,
          },
          {
            key: 'key2',
            title: '热门',
            // badge: '5',
          },
          {
            key: 'key3',
            title: '竞技',
            // badge: '99+',
            // disabled: true,
          },
    ]
    const pcgame = games.filter(item => item.tag == 'pc')
    const hotpcgame = games.filter(item => item.popule == 'pctrue')
    const pcjingjigame = games.filter(item => item.classify == 'pc竞技' )
    const renderTabs = () => {
        return (
            <Wrapper>
            <div className="container">
            <div className="side">
                <SideBar activeKey={activeKey} onChange={setActiveKey}
                style={{ '--width': '65px','--background-color':'#fff' }}>
                {
                    tabs.map(item => (
                        <SideBar.Item key={item.key} title={item.title} />
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
                            <li className='game-list' key={item.cid + Math.random()*10}>
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
                            <li className='game-list' key={item.cid + Math.random()*10}>
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
                            <li className='game-list' key={item.cid + Math.random()*10}>
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
    const renderTabs2 = () => {
        return (
            <Wrapper>
            <div className="container">
            <div className="side">
                <SideBar activeKey={activeKey} onChange={setActiveKey}
                style={{ '--width': '65px','--background-color':'#fff' }}>
                {
                    tabs.map(item => (
                        <SideBar.Item key={item.key} title={item.title} />
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
                            <li className='game-list' key={item.cid + Math.random()*10}>
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
                            <li className='game-list' key={item.cid + Math.random()*10}>
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
                            <li className='game-list' key={item.cid + Math.random()*10}>
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
                <Tabs.Tab title='端游' key='fruits'>
                    {
                        renderTabs()
                    }
                </Tabs.Tab>
                <Tabs.Tab title='手游' key='vegetables'>
                    {
                        renderTabs2()
                    }  
                </Tabs.Tab>
            </Tabs>
        </div>
    )
}

