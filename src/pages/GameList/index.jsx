import React, { useState, useEffect, useRef } from 'react';
import { GameWrapper, Container } from './style'
import { SearchBar, List} from 'antd-mobile'
import { LeftOutline, AddCircleOutline  } from 'antd-mobile-icons'
import Main from './Main'
import classnames from 'classnames'
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group'
import { useNavigate } from 'react-router-dom'
import { 
    getGameList,
    getSelectedGameList,
    AddListData,
    DeleteListData,
    DeleteSearchListData,
    getSearchResult,
} from './store/actionCreator'
import WeUI from 'react-weui'

const { Toast } = WeUI


// import { } from './style'

const GameList = (props) => {
    const [value, setValue] = useState('')
    const [activekey, setActivekey] = useState(false)
    const [query, setQuery] = useState('');
    const [show, setShow] = useState(false)
    const queryRef = useRef()
    const navigate = useNavigate()

    const { 
        onMaskClick, 
        selectedgamelist, 
        games,
        searchResult,
        loading 
    } = props
    const { 
        getGameListDispatch, 
        getSelectedGameListDispatch,
        getSearchResultDispatch,
        AddList,
        DeleteList,
        DeleteSearchList,
    } = props

    const onSetQuery = (query) => {
        setQuery(query)
    }

    // mount 挂载 聚焦输入框
    useEffect(() => {
        // 挂载后
        queryRef.current.focus() 
    }, [])

    useEffect(() => {
        getGameListDispatch()
        getSelectedGameListDispatch()
    }, [])

    useEffect(() => {
        if(query.trim()){
            getSearchResultDispatch(query)  
        }
    }, [query])

    // console.log(query,searchResult)
    const onAdd = () => {
        onSetQuery(value)
        setShow(true)
     }


    
    const renderGames = () => {
        // console.log('selectedgameList');
        return selectedgamelist.map((item) => {
            return (
                <li key={item.cid} className={classnames({active: activekey == true})}
                   onClick={ activekey ? () => DeleteList(item.cid) : () => {}}
                >
                    {item.desc}
                    <i className='fa fa-minus-circle icon' 
                     style={activekey ? {} : {display:'none'}}
                    >
                    </i>
                </li>
            )
        })
    }
    // console.log(searchResult)
    const renderSearchList = () => {
        return searchResult.map(item => {
            return (
                <List 
                    key={item.cid}    
                >
                    <div 
                        key={item.cid+ Math.random()*10} 
                        className="list" 
                        onClick={
                            () => { 
                                DeleteSearchList(item.cid)
                                setShow(!show)
                                setValue('')
                        }
                    }
                    >
                    <img src={item.img} alt="" key={item.cid}/>
                    <span>{item.desc}</span>
                    <i className='fa fa-plus-circle icon'/>
                    </div>
                </List>
            )
        })
    }
    const renderNull = () => {
        return (
            <p style={{'textAlign':'center'}}>无相关游戏，请重新搜索</p>
        )
    }
    return (
        <GameWrapper>
            <Toast show={loading} icon="loading">加载中</Toast>
            <div className='search'>
                {/* fa fa-close (alias) */}
                <i className='iconfont icon-guanbi icon-right' onClick={onMaskClick}></i>
                <SearchBar
                    ref={queryRef}
                    onSearch={onAdd}
                    placeholder='搜索想要添加的游戏'
                    className='search1'
                    value={value}
                    onChange={ e => {
                        setValue(e)
                        if(e == '' || !e) {
                            setShow(!show)
                            queryRef.current.focus()
                            // onAdd()
                        }
                    }}
                    style={{
                        '--border-radius': '5rem',
                        // '--background': '#ffffff',
                        '--height': '1.5rem',
                        '--padding-left': '0.6rem',
                    }}
                />
            </div>
            { query && <CSSTransition
                    in={show}   // 控制动画开启关闭
                    timeout={1000}  // 为动画执行时间
                    appear={true}  // 是否第一次加载该组件时启用相应的动画渲染
                    classNames="fly"
                    unmountOnExit  // 当动画效果为隐藏时，该标签会从dom树上移除，类似js操作
                    onExit={() => {  // 出场动画时触发
                        navigate(-1)
                }}
                >  
                    <Container>
                        {/* <LeftOutline onClick={() => setShow(!show)}/> */}
                        
                        { searchResult == false ? renderNull() : renderSearchList()
                        }
                    </Container> 
                </CSSTransition>
                }
            <div className='header'>
                <h2>我的游戏</h2>
                {/* <span className='span1'>按住拖动可调整顺序</span> */}
                <span onClick={() => setActivekey(!activekey)} 
                className={classnames({span2:true}, {active: activekey === true})}
                >
                    {
                        activekey ? '完成' : '编辑'
                    }
                </span>
            </div>
            <div className="list">
                <li>推荐</li>
                {renderGames()}
            </div>
            <Main games={games} AddList={AddList}></Main>
        </GameWrapper>
    )
}
const mapStateToProps = (state) => {
    return {
        games:state.gamelist.games,
        selectedgamelist: state.gamelist.selectedgamelist,
        searchResult: state.gamelist.searchresult,
        loading:state.gamelist.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getGameListDispatch() {
            dispatch(getGameList())
        },
        getSelectedGameListDispatch() {
            dispatch(getSelectedGameList())
        },
        getSearchResultDispatch(query) {
            dispatch(getSearchResult(query))
        },
        AddList(data) {
            // console.log(data)
            dispatch(AddListData(data))
        },
        DeleteList(data) {
            dispatch(DeleteListData(data))
        },
        DeleteSearchList(data) {
            dispatch(DeleteSearchListData(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(GameList))
