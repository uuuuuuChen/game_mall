import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { getGameListsRequest } from '@/api/request';
import { GameWrapper } from './style'
import { SearchBar } from 'antd-mobile'
import Main from './Main'
import classnames from 'classnames'
import { connect } from 'react-redux';
import { 
    getGameList,
    getSelectedGameList,
    AddListData,
    DeleteListData
} from './store/actionCreator'
import WeUI from 'react-weui'

const { Toast } = WeUI


// import { } from './style'

const GameList = (props) => {
    const [activekey, setActivekey] = useState(false)
    const { 
        onMaskClick, 
        selectedgamelist, 
        games, 
        loading 
    } = props
    const { 
        getGameListDispatch, 
        getSelectedGameListDispatch,
        AddList,
        DeleteList
    } = props

    useEffect(() => {
        getGameListDispatch()
        getSelectedGameListDispatch()
    }, [])
    
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
    return (
        <GameWrapper>
            <Toast show={loading} icon="loading">加载中</Toast>
            <div className='search'>
                {/* fa fa-close (alias) */}
                <i className='iconfont icon-guanbi icon-right' onClick={onMaskClick}></i>
                <SearchBar
                    placeholder='搜索想要添加的游戏'
                    className='search1'
                    style={{
                        '--border-radius': '100px',
                        // '--background': '#ffffff',
                        '--height': '20px',
                        '--padding-left': '12px',
                    }}
                />
            </div>
            <div className='header'>
                <h2>我的游戏</h2>
                <span className='span1'>按住拖动可调整顺序</span>
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
        AddList(data) {
            // console.log(data)
            dispatch(AddListData(data))
        },
        DeleteList(data) {
            dispatch(DeleteListData(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(GameList))
