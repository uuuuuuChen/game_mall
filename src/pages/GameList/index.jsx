import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getGameListsRequest } from '@/api/request';
import { GameWrapper } from './style'

// import { } from './style'

const GameList = (props) => {
    const { onMaskClick } = props
    const [games, setGames] = useState([])

    useEffect(() => {
        (async () => {
            let { data } = await getGameListsRequest();
            // console.log(data);
            setGames(data);
        })()
    },[])

    const renderGames = () => {
        return games.map(({id, desc}) => {
            return (
                    <Link 
                        key={id}
                        className='game_name'
                        to={{
                            pathname: '/',
                            // search: `name=${desc}`
                        }}>
                        {desc}
                    </Link>
            )
        })
    }
    return (
        <GameWrapper>
            <div>
                {/* fa fa-close (alias) */}
                <i className='iconfont icon-guanbi icon-right' onClick={onMaskClick}></i>
            </div>
            <div className='header'>
                <h2>我的游戏</h2>
                <span className='span1'>按住拖动可调整顺序</span>
                <span className='span2'>编辑</span>
            </div>
           { renderGames()}
        </GameWrapper>
    )
}

export default GameList
